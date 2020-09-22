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

/*
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
*/

const express = require('express')   // create server - express module, require method
const app = express().use(express.static(__dirname + '/'))
const PORT = 3000;
const bodyParser = require('body-parser') // express 미들웨어: body-parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => {
  console.log(`server listening ${PORT}`)
})

app.get('/', (req, res) => {
  res.readFile(__dirname + '/index.html');
})
//app.use('/', express.static('/'))

// MySQL module 불러오기
var mysql = require('mysql')

// MySQL connection 생성
var connection = mysql.createConnection({
  host: "192.168.1.70", // server local IP
  port: "5506",
  user: "shpark", // 계정 아이디
  password: "",  // 계정 비밀번호
  database: "my_todo"  // 접속할 DB
})

// MySQL 접속
connection.connect(function(err) {
  if(!err) {
    console.log("Databases is connected ... \n\n")
  } else {
    console.log("Error connecting database ... \n\n")
  }
})


/*
// query문 작성
$query = "SELECT * from TodoList"

// 쿼리 보내고 결과를 변수에 저장
$result = mysql_query($query)
//echo "현재 리스트"<br>

while($row = mysql_fench_array($result)) {
  //echo "todo".$
}

/*
// socket.io (채팅 기능)
const io = require('socket.io').listen(server)  // running a socket server
io.sockets.on('connection', function(socket) {  // connection event: 클라이언트가 소켓 서버 접속시 발생
    socket.on('join', function(data) {  // join event: 클라이언트를 특정 방에 포함시킬 때 사용
      socket.room = data  // socket에 신규 room 속성을 추가, 사요아가 입력한 방이름 저장
    });

    socket.on('item', function(data) {  // item event: 같은 방에 속한 클라이언트에 메세지 전달
      io.sockets.in(socket.room).emit('item', data);  // public 통신 문법: io.sockets.emit('ClientEvent명', data);
    })
})
*/

/*
// user router
app.get('/index.html', function(req, res) {
  connection.query('SELECT * from TodoList', function(err, rows, fields) {
    connection.end();

    if(!err) {
      const data = "<html><head><title>MySQL Test</title><head>"
      data += "<h1>Sehee's Todo</h1>"
      data += "<table border=\ "1\">"
      data += "<tr><th>Name</th><th>List</th></tr>"

      for(const i in rows) {
        data += "<tr>"
        data += "<td>" + rows[i].todo + "</td>"
        data += "<td>" + rows[i].details + "</td>";
        data += "</tr>"
      }

      data += "</table></html>"
      response.send(data);
    } else {
      console.log('Error while performing Query.')
    }
  });
});

  })
}
*/

/*
express.static(path.join(__dirname, '/index.html'));

// respond with "index.html" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})
*/

/*
app.get('/', function(request, response) {
  console.log(request)
})
*/

/*
http.createServer((request, response)   // create server - method
    console.log('server start!');
    ).listen(8080);
*/