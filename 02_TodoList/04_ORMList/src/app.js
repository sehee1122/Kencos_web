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

//const router = require('../router/index');

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/router', router);

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/views', express.static(__dirname + '/views'));
app.use('/css', express.static(__dirname + '/css'));

// Express web server create and excute
const PORT = 3000;

app.listen(PORT, function() {
  console.log(`Express server listening on port ${PORT}`);
})

const mariadb = require('mariadb');

// create MySQL connection
//const conn = mariadb.createConnection({
const pool = mariadb.createPool({
  host: "192.168.1.70", // server local IP
  port: "5506",
  user: "shpark", // account ID
  password: "shpark",  // account PW
  database: "my_todo",  // DB to connect to
  connectionLimit: 5
})

// Connection check
pool.getConnection()
    .then(conn => {
      console.log('MariaDB successfully connected\n')
    })

//const models = require('../models/index.js');
const Sequelize = require('sequelize')

sequelize = new Sequelize('my_todo', 'shpark', 'shpark', {
  host: '192.168.1.70',
  port: 5506,
  dialect: 'mariadb',
  //dialectOptions: {connectTimeout: 1000}  // mariadb connector option
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    useUTC: false //for reading from database
  },
  timezone: 'Etc/GMT0' //for writing to database
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.\n');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err, '\n');
  });

module.exports = function(sequelize, DataTypes) {
  console.log('user.js hihi')
  let usr = sequelize.define("TodoList_copy", {
    id: {
      filed: "id",
      type: DataTypes.INT(11),
      unique: true,
      auto_increment,
      allowNull: false
    },
    dueDate: {
      field: "dueDate",
      type: DataTypes.TEXT,
      allowNull: false
    },
    toDo: {
      field: "toDo",
      type: DataTypes.MEDIUMTEXT,
      allowNull: false
    },
    toDetails: {
      field: "toDetails",
      type: DataTypes.MEDIUMTEXT,
      allowNull: true
    },
    toColor: {
      field: "toColor",
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
  })
}

/*
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
*/

// Recalling data from DB
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
              // load DB
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

// make into a module
module.exports = router;
