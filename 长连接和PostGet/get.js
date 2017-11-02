const http = require('http');
var net = require('net');
http.get('http://127.0.0.1:8124', (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
  
    let error;
    if (statusCode !== 200) {
      error = new Error('请求失败。\n' +
                        `状态码: ${statusCode}`);
    }
    if (error) {
      console.error(error.message);
      // 消耗响应数据以释放内存
      res.resume();
      return;
    }
  
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { 
        rawData += chunk; 
        console.log(chunk);});
    res.on('end', () => {
       // console.log("end:"+rawData);
    });
  }).on('error', (e) => {
    console.error(`错误: ${e.message}`);
  });