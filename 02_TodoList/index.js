/*
console.log('Hello world')
require('./TodoList');
*/

/*
// 사용 모듈 로드
const express = require('express'); // 웹 서버
var fs = require('fs'); // 파일 로드
const app = express();
var path = require('path');

// 포트 설정
const hostname = '127.0.0.1';
const port = 3000;

// 라우팅 설정: respond with "hello" when a GET request is made to the homepage
app.get('/', function(request, response) {
    fs.readFile('index.html', function(error, data) {   // index.html 파일 로드

        if(error) {
            console.log(error);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html'}); // Head Type 설정
            res.end(data);  // 로드 html response
        }
    })
});
*/

 
// Hello World text
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


/*
const express = require('express');   // create server - express module, require method
const app = express();

// respond with "hello" when a GET request is made to the homepage
app.get('/', (request, response) => {
    res.send('hello');
})

app.listen('8080', () => {
    console.log('server listening port 8080')
})

app.get('/', function(request, response) {
    console.log(request)
})

/*
http.createServer((request, response)   // create server - method
    console.log('server start!');
    ).listen(8080);
*/