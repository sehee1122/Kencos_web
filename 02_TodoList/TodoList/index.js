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
const router = express.Router();
const { Router, response } = require('express');

// const indexRouter = require('./views/index.ejs');

app.use(bodyParser.urlencoded({ extended: true }))

// View Engine Setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('views', './views');

//app.use('/public', express.static(__dirname + '/public')); 
app.use('/css', express.static(__dirname + '/css'));

// Express web server create and excute
const PORT = 3000;
app.listen(PORT, function() {
  console.log(`Express server listening on port ${PORT}`);
})

/*
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

var app2 = express()
app2.get('/', function(req, res) {
res.send('hello')
})
*/

const mariadb = require('mariadb');
//const mainPage = fs.readFileSync('./index.ejs', 'utf8');
//require('dotenv').config()

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

/*
// app 대신 router에 연결
router.get('/postTest', function(req, res) {  // req: Request, res: Response
  res.sendFile(__dirname + '/views/index.ejs');
  // fs.readFile
})

/* 연결 확인 */
pool.getConnection()
    .then(conn => {
      console.log('MariaDB successfully connected\n')
    })

// POST Test
// index.ejs <form action="/views/index.ejs" name="Ajaxform" method="POST">
app.post('/views/index.ejs', function(req, res) {
  console.log(req.body);
  //res.json({ok: true});
  //var responseData = {'result': 'ok'}

  const dueDate = req.body.dueDate;
  var toDo = req.body.toDo;
  const toDetails = req.body.toDetails;
  const toColor = req.body.toColor;

  if(!toDo) {
    //alert('select 값을 선택해주세요.')
    toDo = "기타";
    //const window =  new window();
    //window.alert('select 값을 선택해주세요.')
  }
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
  if (typeof window !== "undefined") {
    // browser code
    window.location.back();
    window.location.reload(true);
  }
})

/*
router.get('/', (req, res, next) => {
    console.log('hi');
  })
  */

  /*
// ERROR: Cannot GET /
app.get('/', (req, res) => {
  res.render('index');
})
*/


// DB에서 데이터 호출
app.get('/', function(req, res) {
  //res.render('index', {title: 'Express'})
  fs.readFile(__dirname + '/views/index.ejs', (err, data) => {
    if(err) {
      console.log('readFile Error');
    } else {
      console.log("data: ");
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
          console.log('Catch error')
          conn.release();
        })
    .catch(err => {
      console.log('catch error...')
    })
    }
  })
})

/*
// 연결 확인
router.get('/', function(req, res) {
  fs.readFile(__dirname + '/views/index.ejs', function(err, data) {
    if(err) {
      console.log('readFile error');
      throw err;
    } else {
      console.log("data: " + data);
      pool.getConnection()
        .then(conn => {
          conn.query('SELECT * FROM TodoList_copy', function(error, results) {
            if(error) {
              console.log('error: ', error.message);
            } else {
              res.send(ejs.render(data, {
                data: results }
              ))
            }
          })          
        })
        .catch(err => {
          console.log(err)
          conn.release();
        })
    }
  })
  console.log('check2')
})

/*
            .then(rows => {
              console.log(rows);
              res.render('.', { prodList: rows })
            })
            .catch(err => {
              console.log(err);
              conn.release();
            })
 */

// 모듈로 만드는 부분
module.exports = router;

/*
router.post('postTest', function(req, res) {
  console.log(req.body.id)
  pool.getConnection()
    .then(conn => {
      console.log("INSERT data")
      return conn.query("INSERT INTO TodoList_copy (dueDate, toDo, toDetails, toColor) VALUES (?, ?, ?, ?)");
    })
})

/*
if(error)
          console.log('error:', error.message);
        else{
          // 조회결과를 'prodList' 변수에 할당한 후 'list.html'에 전달
          res.send(ejs.render(data, {
            prodList:results}

            */
