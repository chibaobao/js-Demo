# js-Demo
只是一个js的一些小demo，主要是网络连接相关的

## tcp
tcp文件夹是一对nodejs写的tcp socket的服务器与客户端小demo

## websocket
- websocket-client是一个websocket的网页客户端
- websocket-s.py是用python写的websocket服务器，是用tcp实现的websocket协议
- websocket-server.js是通过node库实现的一个websocket服务器

## 长连接和PostGet
这里的长连接是只http连接保持不断(keep-alive),require库中require.write是往里面写数据，
对应客户端的data事件，每次一个chunk，require.end代表这次连接完成对应客户端end事件。
- get.js一个get请求客户端，支持长连接
- keep_app.js一个不停发送hello world的长连接服务器
- post.js是一个post请求客户端，支持长连接