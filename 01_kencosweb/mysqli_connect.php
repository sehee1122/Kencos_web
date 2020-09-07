<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<title>Untitled</title>
</head>

<body>

<table width=600 border=1>
	<tr>
		<td> No
		<td> 성명
		<td> 휴대전화
		<td> 이메일
		</td>
		</td>
		</td>
	</tr>


<?php

DEFINE ('DB_USER', 'kencosweb');
DEFINE ('DB_TEL', '01048016061');
DEFINE ('DB_MAIL', 'pshwkd37@gmail.com');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'test3');

$dbc = @mysqli_connect(DB_HOST, DB_USER, DB_TEL, DB_MAIL, DB_NAME)
OR die('Could not connect to MySQL ' .
	   mysqli_connect_error());
/*
	$connect = mysql_connect("localhost", "php", "1234") or die("접속불가");
	mysql_select_df("php");
	*/
?>

</table>

</body>
</html>
