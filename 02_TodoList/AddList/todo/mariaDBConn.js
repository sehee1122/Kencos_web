// MySQL module 불러오기
console.log('hi')

const mariadb = require('mariadb');
//require('dotenv').config()

// MySQL connection 생성
//const connection = mysql.createConnection({
//const connection = mariadb.createConnection({
const pool = mariadb.createPool({
  host: "192.168.1.70", // server local IP
  port: "5506",
  user: "shpark", // 계정 아이디
  password: "",  // 계정 비밀번호
  database: "my_todo",  // 접속할 DB
  connectionLimit: 5
})

pool.getConnection()
  .then(conn => {
    console.log('MariaDB successfully connected\n')
  })

$dueDate = $_POST['dueDate'];
$toDo = $_POST['toDo'];
$toDetails = $_POST['toDetails'];
$toColor = $_POST['toColor'];

module.exports = {
  init: function () {
      return mysql.createConnection(db_info);
  },
  connect: function(conn) {
      conn.connect(function(err) {
          if(err) console.error('mysql connection error : ' + err);
          else console.log('mysql is connected successfully!');
      });
  }
}


/*
$message1 = "다시 시도해주세요.";
$message2 = "상담 신청이 완료되었습니다.";

if (!$dueDate or !$toDo or !$toDetails) {
    echo("다시 시도해주세요");
} else {
    //connect 설정
    $conn = mysqli_connect($host, $user, $password, $database);
    $sql = "INSERT INTO TodoList (dueDate, toDo, toDetails, toColor) VALUES ('$dueDate', '$toDo', '$toDetails', '$toColor');";
    
    mysqli_query($conn, $sql);
    echo("추가");
}

/*
.then(conn => {
  console.log("Connected successful");
})
.catch(error => {
  console.log("Error: " +err.message);
})
*/

/*
async function getUserList() {
  let conn, rows;
  try {
    conn = await pool.getConnection();
    conn.query('TodoList'); // 사용할 DB
    rows = await conn.query('SELECT * FROM users'); // 쿼리 실행
    console.log("Connected successful");
  }
  catch(err) {
    throw err;
  }
  finally {
    if (conn) conn.end();
    return rows;
  }
}

module.exports = {getUserList}
*/