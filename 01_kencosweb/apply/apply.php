<?php 
//header("Content-Type: apply/html; charset=UTF-8");
//session_start();
//$conn = new mysqli("localhost","sehee","1024","medical_db");

$host = "localhost"; 
$user = "root";
$password = "1122";
$database = "medical_db";

$conn = mysqli_connect($host, $user, $password, $database);

mysqli_query($conn,'SET NAMES utf8');
//mysqli_query($conn);

$name = $_POST['name'];
$phone1 = $_POST['phone1'];
$phone2 = $_POST['phone2'];
$phone3 = $_POST['phone3'];
$email = $_POST['email'];

$phone = $phone1."-".$phone2."-".$phone3; // xxx-xxxx-xxxx

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

?>
