/*
  Node.js의 모듈 시스템
  각 파일은 분리된 모듈로 간주
  -> 파일에서 필요한 모듈을 따로 추가
*/

// 다음 ' ' module을 require하여 파일에 추가
const fs = require('fs');
const ejs = require('ejs');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// 라우터 분리: Router 객체를 따로 뽑아서 router 변수가 참조
/*
const router = express.Router();
const { Router, response } = require('express');
*/

const router = require('./router/index');

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/router', router);

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/css', express.static(__dirname + '/css'));

// Express web server create and excute
const PORT = 3000;

app.listen(PORT, function() {
  console.log(`Express server listening on port ${PORT}`);
})

const mariadb = require('mariadb');

// MySQL connection 생성
//const conn = mariadb.createConnection({
const pool = mariadb.createPool({
  host: "192.168.1.70", // server local IP
  port: "5506",
  user: "shpark", // 계정 아이디
  password: "shpark",  // 계정 비밀번호
  database: "my_todo",  // 접속할 DB
  connectionLimit: 5
})

/* 연결 확인 */
pool.getConnection()
    .then(conn => {
      console.log('MariaDB successfully connected\n')
    })

// POST Test
app.post('/views/index.ejs', function(req, res) {
  console.log(req.body);

  const dueDate = req.body.dueDate;
  var toDo = req.body.toDo;
  const toDetails = req.body.toDetails;
  const toColor = req.body.toColor;

  if(!toDo) {
    toDo = "기타";
  }

  pool.getConnection()
  .then(conn => {
    conn.query("SELECT 1 as val")
      .then(rows => { // rows: [ {val: 1}, meta: ... ]
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
  if (typeof window !== "undefined") {
    // browser code
    window.location.back();
    window.location.reload(true);
  }
})

// DB에서 데이터 호출
app.get('/', function(req, res) {
  fs.readFile(__dirname + '/views/index.ejs', (err, data) => {
    if(err) {
      console.log('readFile Error');
    } else {
      console.log("data read complete!");
      pool.getConnection()
        .then(conn => {
          console.log('connect')

          conn.query('SELECT * FROM TodoList_copy')
            .then(rows => {
              // DB 불러오기
              console.log(rows)
              res.render('.', { prodList: rows })
            })
        })
        .catch(err => {
          console.log('catch Error...1')
          conn.release();
        })
    .catch(err => {
      console.log('catch Error...2')
    })
    }
  })
})

// 모듈로 만드는 부분
module.exports = router;
