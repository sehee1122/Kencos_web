<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<title>Untitled</title>
</head>

<body>

<?php
/*
$hostname = "127.0.0.1"; // 아이피 혹은 도메인 이름
$username = "sehee"; // 아이디(root)
$password = "1024"; // root 비밀번호
$dbname = "testdb"; // 데이터베이스 이름 중 하나
//$mysqli = new mysqli($hostname, $username, $password, $dbname);

$db = mysqli_connect($hostname, $username, $password, $dbname);

if (mysqli_connect_errno()) {
	printf("실패");
	exit();
} else {
	printf("성공");
}
mysqli_close($mysqli);

$result = mysqli_query($db, 'SELECT VERSION() as VERSION');
$data = mysqli_fetch_assoc($result);
echo $data['VERSION'];
*/

$db_con = mysqli_connect("127.0.0.1", "root", "1024");
if ($db_con){
  echo "DB 연결 성공<p>";
} else {
  echo "DB 연결 실패<p>";
}
  
$db_sec = mysqli_select_db($db_con, "testdb");
if ($db_sec) {
  echo "DB select OK <p>";
} else {
  echo "DB select NO <p>";
}

?>

</body>
</html>
