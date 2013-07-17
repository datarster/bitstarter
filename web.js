#!/usr/bin/env node

var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var HTMLImport = fs.readFileSync('index.html');

app.get('/', function(request, response) {
 // response.send('Hello World 2!');
//fs.readFile('index.html',function(err,data)
//{
//	if(err)throw err;
//	console.log(data);});
//fs.open("index.html",'r',function(status,fd){
//    
//    if(status)
//        {
//            console.log(status.message);
//            return;
//        }
//    var buffer = new Buffer(1024);
//    fs.readFileSync(fd,buffer,0,1024,0,function(err,num){
//       console.log(buffer.toString('utf-8',0,num)); 
//    });
//    
//    });

response.writeHead(200, {
      'Content-type': 'text/html; charset=utf-8'
  });
response.end(HTMLImport);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
