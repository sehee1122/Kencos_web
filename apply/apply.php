<?php 
//header("Content-Type: apply/html; charset=UTF-8");
//session_start();
//$conn = new mysqli("localhost","sehee","1024","kencosdb");

$host = "localhost"; 
$user = "sehee";
$password = "1024";
$database = "kencosdb";

$conn = mysqli_connect($host, $user, $password, $database);

mysqli_query($conn,'SET NAMES utf8');
mysqli_query($conn);

$name = $_POST['name'];
$phone1 = $_POST['phone1'];
$phone2 = $_POST['phone2'];
$phone3 = $_POST['phone3'];
$email = $_POST['email'];

$sql = "select *from member where name = '$name' and phone1 = '$phone' and phone2 = '$phone2' and phone3 = '$phone3' and and email = '$email'";
$res = $conn->query($sql);
$row = mysqli_fetch_array($res);

if($res -> num_rows > 0) {
$_SESSION['name'] = $name;
$_SESSION['nickname'] = $row["nickname"];
if(isset($_SESSION['id']) && isset($_SESSION['nickname'])) {
echo "<script>location.href='main.php';</script>";
} else {
echo "<script>alert('로그인 실패!');</script>";
}
} else {
echo "<script>alert('로그인 실패!');</script>";
}
?>
