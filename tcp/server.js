var net = require('net');  

var server = net.createServer();  

//聚合所有客户端  
var sockets = [];  

//接受新的客户端连接  
server.on('connection', function(socket){  
  console.log('got a new connection');  
  sockets.push(socket);  
  //从连接中读取数据  
  socket.on('data', function(data){  
      console.log('got data:', data.toString());  
      socket.write(data); 
       

      //删除被关闭的连接  
      socket.on('close', function(){  
          console.log('connection closed:'+data);  
          var index = sockets.indexOf(socket);  
          sockets.splice(index, 1);  
      });  
  });  
});  

server.on('error', function(err){  
  console.log('Server error:', err.message);  
});  

server.on('close', function(){  
  console.log('Server closed');  
});  

server.listen(4000); 