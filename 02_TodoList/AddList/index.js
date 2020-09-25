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

/*
//const mdbConn = require('./todo/mariaDBConn');
const express = require('express')   // create server - express module, require method
const app = express().use(express.static(__dirname + '/'))
const PORT = 3000;
const bodyParser = require('body-parser'); // express 미들웨어: body-parser
const { createPool } = require('mysql');
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const router = express.Router();

app.listen(PORT, () => {
  console.log(`Server listening ${PORT}`)
})
*/


const express = require('express');
//const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
const router= express.Router();

// View Engine Setup
//app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs")

// Body-parser middleware
app.use(bodyParser.urlencoded({extended: false}))  // post body 사용 가능
app.use(bodyParser.json())
app.use(express.static(__dirname + '/'))

app.listen(3000, function() {
  console.log('Running well...')
})

const mariadb = require('mariadb');
const { Router, response } = require('express');
//require('dotenv').config()

// MySQL connection 생성
//const connection = mysql.createConnection({
//const conn = mariadb.createConnection({
const pool = mariadb.createPool({
  host: "192.168.1.70", // server local IP
  port: "5506",
  user: "shpark", // 계정 아이디
  password: "shpark",  // 계정 비밀번호
  database: "my_todo",  // 접속할 DB
  connectionLimit: 5
})

app.get('/', function(req, res) {  // req: Request, res: Response
  res.sendFile(__dirname + '/index.html');
})

/* 연결 확인 */
pool.getConnection()
    .then(conn => {
      console.log('MariaDB successfully connected\n')
    })

/* POST Test */
app.post('/index.html', function(req, res) {
  console.log(req.body);
  res.json({ok: true});

  const dueDate = req.body.dueDate;
  const toDo = req.body.toDo;
  const toDetails = req.body.toDetails;
  const toColor = req.body.toColor;
  
  pool.getConnection()
  .then(conn => {
    conn.query("SELECT 1 as val")
      .then(rows => { // rows: [ {val: 1}, meta: ... ]
        //return conn.query("INSERT INTO TodoList_copy VALUES (dueDate, toDo, toDetails, toColor)", [1, 'mariadb']);
        return conn.query("INSERT INTO TodoList_copy (dueDate, toDo, toDetails, toColor) VALUES (?, ?, ?, ?)"
        , [dueDate, toDo, toDetails, toColor]);
      })
      .then(res => { // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
        conn.release(); // release to pool
      })
      .catch(err => {
        conn.release(); // release to pool
      })
  }).catch(err => {
    //not connected
  });

  //const responseData = {'result': 'ok', 'date': req.body.dueDate, 'todo': req.body.toDo, 'details': req.body.toDetails}
  //res.json(responseData)
})

//%H:%i:%s
/*
router.get('/index.html', function(req, res, next) {
  res.render('write', {title: '할일 목록 생성'})
  var page = req.params.page;
    var sql = "SELECT id, dueDate, toDo, toDetails, toColor" +
        "doDate_format(regdate,'%Y-%m-%d ') regdate from board";
    conn.query(sql, function (err, rows) {
        if (err) console.error("err : " + err);
        res.render('list', {title: '할일 목록', rows: rows});
    });
});
module.exports = router;

/*
app.put('/index.html', function(req, res) {
  console.log('hi')

  const id = req.body.body;
  const dueDate = req.body.dueDate;
  const toDo = req.body.toDo;
  const toDetails = req.body.toDetails;
  const toColor = req.body.toColor;

  if(dueDate)
  query += 'name="'+ dueDate +'"';
  if(toDo)
  query += 'name="'+ toDo +'"';
  if(toDetails)
  query += 'name="'+ toDetails +'"';
  if(toColor)
  query += 'name="'+ toColor +'"';

  pool.getConnection()
  .then(conn => {
    conn.query('SELECT * from TodoList_copy', function(err, results, fields) {
      if(err) {
        console.log(err);
      }
      console.log(results);
    })
    conn.end()
  })
})
*/

/* GET home page 
router.get('/', function(req, res, next) {
  console.log('URL: ${req.url}')
  pool.getConnection(function(error, conn) {
  conn.query('SELECT * from TodoList_copy', function(err, rows, fields) {
    res.render('index', {data: result})
      conn.release()
      /*
      if(!err) {
        response.send(rows)
        console.log('The result is: ', rows);
      } else {
        console.log('Error while performing Query');
      }
      
    })
  })
})
module.exports = router;
*/

/*
// 라우팅 객체 참조
const router = express.router();

router.route('/index.html').post(function(req, res) {
  console.log('/index.html success')
})
*/

/*
conn.query((err) => {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO TodoList (dieDate, toDo, toDetails, toColor) VALUES (1, 1, 1, 1)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

/*
pool.getConnection()
  .then(conn => {
    console.log('MariaDB successfully connected\n')
  
    conn.query("SELECT 1 as val")
      .then(rows => { // rows: [ {val: 1}, meta: ... ]
        return conn.query("INSERT INTO TodoList value (dueDate, toDo, toDetails, toColor)", [1, 1, 1, 1]);
      })
      .then(res => { // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
        conn.release(); // release to pool
      })
      .catch(err => {
        conn.release(); // release to pool
      })
      
  }).catch(err => {
    //not connected
  });
*/


/*
app.get('/', function(req, res) {
  console.log('postpost')
  res.send('POST request to homepage')
})

app.get('/', (req, res) => {  // req: Request, res: Response
  res.readFile(__dirname + '/index.html');
})
//app.use('/', express.static('/'))

/*
router.get('/', function (req, res, next) {
  mdbConn.getUserList()
    .then((rows) => {res.json(rows)}) // 쿼리 결과가 json 형태로 출력
    .catch((err) => {console.error(err)})
})

const getConnection = function (callback) {
  pool.getConnection(function(err, connection) {
    callback(err, connection)
  })
}
module.exports = router;

/* use Sequelize */


/*
pool.getConnection()
  .then(conn => {
    
    conn.query("SELECT 1 as val")
      .then((rows) => {
        console.log(rows); //[ {val: 1}, meta: ... ]
        //Table must have been created before 
        // " CREATE TABLE myTable (id int, val varchar(255)) "
        //return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
      })
      .then((res) => {
        console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
        conn.end();
      })
      .catch(err => {
        //handle error
        console.log(err); 
        conn.end();
      })
        
  }).catch(err => {
    //not connected
  });
*/

/*
promise
async / await

async function test () {

}

const pool = await test();
pool


pool.getConnection()
  .then(conn => {
    get
    .then(
      .then
        
    )
    catch(e )
  }).catch(err => {
    console.log(err);
  })

/*
pool.getConnection()
  .then(conn => {
    
    conn.query("SELECT 1 as val")
      .then((rows) => {
        console.log(rows); //[ {val: 1}, meta: ... ]
        //Table must have been created before 
        // " CREATE TABLE myTable (id int, val varchar(255)) "
        return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
      })
      .then((res) => {
        console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
        conn.end();
      })
      .catch(err => {
        //handle error
        console.log(err); 
        conn.end();
      })
        
  }).catch(err => {
    //not connected
  });
*/

// MySQL 접속
/*
connection.connect(function(err) {
  if(!err) {
    console.log("Databases is connected ... \n\n")
  } else {
    console.log("Error connecting database ... \n\n")
  }
})
*/

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