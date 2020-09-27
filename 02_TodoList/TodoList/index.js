
const http = require('http');
const express = require('express');
const ejs = require('ejs');

const app = express();
const fs = require('fs');
const server = http.createServer(app);

const bodyParser = require('body-parser');
const router= express.Router();

// View Engine Setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
})

const PORT = 3000;
app.listen(PORT, function() {
  console.log(`Express server listening on port ${PORT}`);
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

/*
router.get('/postTest', function(req, res) {  // req: Request, res: Response
  res.sendFile(__dirname + '/views/index.ejs');
  // fs.readFile
})
*/

// 연결 확인
pool.getConnection()
    .then(conn => {
      console.log('MariaDB successfully connected\n')
    })

// POST Test
app.post('/views/index.ejs', function(req, res) {
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

router.post('postTest', function(req, res) {
  console.log(req.body.id)
  pool.getConnection()
    .then(conn => {
      console.log("INSERT data")
      return conn.query("INSERT INTO TodoList_copy (dueDate, toDo, toDetails, toColor) VALUES (?, ?, ?, ?)");
    })
})

module.exports = router;
