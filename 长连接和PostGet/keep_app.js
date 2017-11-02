var http        = require("http");
require('timers');
var server = http.createServer(function(req, res) {
    console.log(req.connection.remoteAddress + ':' + req.connection.remotePort);
    
    setInterval(function () {
        res.write("Hello World:"+Date.now());
        console.log(Date.now());
    }, 1000);
    
}).listen(8124);
server.setTimeout(0);

console.log('start :8124');