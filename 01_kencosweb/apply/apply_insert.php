<!DOCTYPE html>
<!doctype html>
<html lang="ko">
    <head>
        <meta charset="utf-8">
        <title>List of Kencos Applicants</title>
        <style>
            body {
                font-family: Consolas, monospace;
                font-family: 12px;
            }
        </style>
    </head>
    <body>
        <?php
            //mysql 접속 계정 정보 설정
            $host = "localhost"; 
            $user = "root";
            $password = "1122";
            $database = "medical_db";
        
            $ka_name = $_POST['name'];
            $ka_phone1 = $_POST['phone1'];
            $ka_phone2 = $_POST['phone2'];
            $ka_phone3 = $_POST['phone3'];
            $ka_email = $_POST['email'];
            $ka_agree = $_POST['agree'];

            $ka_phone = $ka_phone1."-".$ka_phone2."-".$ka_phone3; // xxx-xxxx-xxxx
            
            if (!$ka_name or !$ka_phone1 or !$ka_phone2 or !$ka_phone3 or !$ka_email or !isset($ka_agree)) {
                echo '<h1>Fail</h1>';
            } else {
                //connect 설정
                $conn = mysqli_connect($host, $user, $password, $database);
                $sql = "INSERT INTO kencos_apply (ka_name, ka_phone, ka_email) VALUES ('$ka_name', '$ka_phone', '$ka_email');";
                
                mysqli_query($conn, $sql);
                echo '<h1>Success</h1>';
            }
            ?>
            
            <p>
                <a href="apply_add.php">Try again</a>
            </p>
    </body>
</html>

