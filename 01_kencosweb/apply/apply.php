<?php
//header("Content-Type: apply/html; charset=UTF-8");
//session_start();
//$conn = new mysqli("localhost","sehee","1122","medical_db");

//mysql 접속 계정 정보 설정
$host = "localhost"; 
$user = "root";
$password = "1122";
$database = "medical_db";

//connect 설정(host,user,password,database)
$conn = mysqli_connect($host, $user, $password, $database) or die("Failed");
//$conn = mysqli_connect($host,$user,$password);
//db 연결
//$dbconn = mysqli_select_db($database,$conn);

//charset UTF8
mysqli_query($conn,'SET NAMES utf8');

//쿼리문 작성
$query = "select * from kencos_apply";
//쿼리보내고 결과를 변수에 저장
$result = mysqli_query($query);
echo "현재 데이터는 아래와 같습니다.<br/>";
while($row = mysql_fetch_array($result)){
    echo "번호: ".$row[name]."/ 성함: ".$row[name]."/ 번호1: ".$row[phone1]
    ."/ 번호2: ".$row[phone2]."/ 번호3: ".$row[phone3]."/ 이메일: ".$row[email]."<br/>";
}

/*
mysqli_query("SET @NUM := 0");
$result = mysqli_query("SELECT @NUM := @NUM + 1 AS SEQ, field FROM kencos_apply");
while($row=mysql_fench_row($result)) {
    print_r($row);
}
*/

//mysqli_query($conn);

$name = $_POST['name'];
$phone1 = $_POST['phone1'];
$phone2 = $_POST['phone2'];
$phone3 = $_POST['phone3'];
$email = $_POST['email'];

$phone = $phone1."-".$phone2."-".$phone3; // xxx-xxxx-xxxx
//$phone = $phone1.$phone2.$phone3;

$sql = "insert *from member where name = '$name' and phone = '$phone' and email = '$email'";
$res = $conn->query($sql);
$row = mysqli_fetch_array($res);

if($res -> num_rows > 0) {
$_SESSION['name'] = $name;
$_SESSION['phone'] = $row["phone"];
$_SESSION['email'] = $row["email"];
if(isset($_SESSION['name']) && isset($_SESSION['phone1']) && isset($_SESSION['phone2']) && isset($_SESSION['phone3']) && isset($_SESSION['email'])) {
echo "<script>location.href='apply.php';</script>";
} else {
echo "<script>alert('신청 실패!');</script>";
}
}


$insertQuery = "insert into medical_db (name,phone,email)"
." values ('".$_POST['name']."','".$_POST['phone1']."',".$_POST['phone2'].","
.$_POST['phone3'].",".$_POST['email'].";

$result = mysql_query($insertQuery,$conn);

?>

