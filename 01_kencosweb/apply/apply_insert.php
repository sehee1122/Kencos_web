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
            $host = "keenus13.cafe24.com"; // 183.111.174.52
            $user = "keenus13";
            $password = "make59@keenus";
            $database = "keenus13";
        
            $ka_name = $_POST['your-name'];
            $ka_phone1 = $_POST['tel-830'];
            $ka_phone2 = $_POST['tel-831'];
            $ka_phone3 = $_POST['tel-832'];
            $ka_email = $_POST['your-email'];
            $ka_agree = $_POST['your-consent'];

            $ka_phone = $ka_phone1."-".$ka_phone2."-".$ka_phone3; // xxx-xxxx-xxxx
            
            if (!$ka_name or !$ka_phone1 or !$ka_phone2 or !$ka_phone3 or !$ka_email or !isset($ka_agree)) {
                echo '<h1>Fail</h1>';
            } else {
                //connect 설정
                $conn = mysqli_connect($host, $user, $password, $database);
                $sql = "INSERT INTO kencos_apply (ka_name, ka_phone, ka_email) VALUES ('$ka_name', '$ka_phone', '$ka_email');";
                
                mysqli_query($conn, $sql);
                echo '<h1>Success</h1>';
            </script>
            }
            ?>
            
            <p>
                <a href="index.html">Try again</a>
            </p>
    </body>
</html>

