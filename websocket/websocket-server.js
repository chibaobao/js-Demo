var express = require('express');
var http = require('http');
var WebSocket = require('ws');

var app = express();
app.use(express.static(__dirname));

var server = http.createServer(app);
var wss = new WebSocket.Server({server});

wss.on('connection', function connection(ws) {
    console.log('链接成功！');
    ws.on('message', function incoming(data) {
            ws.send(data);
    });
});

server.listen(4001, function listening() {
    console.log('服务器启动成功！');
});