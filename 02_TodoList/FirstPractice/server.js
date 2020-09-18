var http = require('http');
var fs = require('fs');

// 404 error message
function send404Message(response) {
    response.writeHead(404, {"Content-Type":"text/plain"}); // 단순 글자 출력
    response.write("40 ERROR");
    response.end();
}

// 200 okay
function onRequest(request, response) {
    if(request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type":"text/html"});  // 웹페이지 출력
        fs.createReadStream("./index.html").pipe(response); // 같은 디렉토리에 있는 index.html response
    } else {
        // file이 존재하지 않을 때
        send404Message(response);
    }
}

http.createServer(onRequest).listen(3000);
console.log("Server Created");

/*
// 웹 서버에 html 파일 서비스
const http = require('http');
var fs = require('fs'); // 파일 읽기, 쓰기 등 모듈

http.createServer((request, response) => {
  return request
    .on('error', (err) => { // if there is an error in request (요청)
      console.error(err);
    })
    .on('data', (data) => { // if there is a data in request
      console.log(data);
    })
    .on('end', () => { // all data received for the request
      response.on('error', (err) => { // if there is an error in response (응답)
        console.error(err);
      });
      response.statusCode = 200; // 성공 상태 코드
       response.setHeader('Content-Type', 'text/plain'); // header 설정
      response.write('hi\n'); // body에 정보 탑재
      response.end('the end!'); // 정보 탑재 후 브라우저로 전송
    });
}).listen(3000);
*/


/*
const http = require('http');   // create server - http module, require method
http.createServer((request, response) => {   // create server - method
    console.log('server start!');
}).listen(3000);

/*
const express = require('express');   // create server - http module, require method
const app = express();
app.get('/TodoList', (request, response) => {
    res.send('hello');
})

app.listen('3000', () => {
    console.log('server listening port 3000')
})

/*
const http = require('http');   // create server - http module, require method
http.createServer((request, response)   // create server - method
    console.log('server start!');
    ).listen(8080);
*/