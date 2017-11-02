const http = require('http');
var net = require('net');
const querystring = require('querystring');
const postData = JSON.stringify({
    "EasyDarwin" : {
    "Header" : {
    "Version": "1.0",
    "AppType": "EasyClient",
    "TerminalType": "PC",
    "CSeq": "1",
    "MessageType": "MSG_CS_SUBSCRIBE_MESSAGE_REQ"
    },
    "Body": {
    "Username" : "username",
    "DatabaseChange" : "1",
    "NvrException" : "1",
    "ServerDeviceException" : "1"
    }
    }
    });
  
  const options = {
    hostname: '192.168.1.160',
    port: 10010,
    path: '/',
    method: 'POST',
    headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };
  
  const req = http.request(options, function(res){
    console.log('状态码:'+res.statusCode);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('##data:'+chunk+'##');
    });
    res.on('end', () => {
      console.log('###end###');
    });
  });
  
  req.on('error', (e) => {
    console.error('error'+e.message);
  });
  
  // 写入数据到请求主体
  req.write(postData);
  req.end();
  console.log('##start##');