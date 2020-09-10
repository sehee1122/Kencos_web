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
            $user = "username";
            $password = "password";
            $database = "keenus13";
        
            $ka_name = $_POST['your-name'];
            $ka_phone1 = $_POST['tel-830'];
            $ka_phone2 = $_POST['tel-831'];
            $ka_phone3 = $_POST['tel-832'];
            $ka_email = $_POST['your-email'];
            $ka_agree = $_POST['your-consent'];
            
            $ka_phone = $ka_phone1."-".$ka_phone2."-".$ka_phone3; // xxx-xxxx-xxxx
            
            $message1 = "다시 시도해주세요.";
            $message2 = "상담 신청이 완료되었습니다.";
            
            if (!$ka_name or !$ka_phone1 or !$ka_phone2 or !$ka_phone3 or !$ka_email or !isset($ka_agree)) {
                echo "<script type='text/javascript'>alert('$message1');</script>";
            } else {
                //connect 설정
                $conn = mysqli_connect($host, $user, $password, $database);
                $sql = "INSERT INTO kencos_apply (ka_name, ka_phone, ka_email) VALUES ('$ka_name', '$ka_phone', '$ka_email');";
                
                mysqli_query($conn, $sql);
                echo "<script type='text/javascript'>alert('$message2');</script>";
                
            }
            ?>
    
            <p>
                <script>
                    location.href='index.html';
                </script>
            </p>
            
            <!--
            alert("try again");
            alert("ok");
            
            echo "<script>Try Again</script>";
            echo "<script>OK</script>";
            
            
            $script = '<script type="text/javascript">';
            $script .= '</script>';
            echo $script;
            <script>
            window.alert('상담이 정상적으로 신청되었습니다.');
            location.href='index.html';
            </script>
            </p>
            
            
            <p>
            echo "<script>
                alert(\"신청이 정상적으로 이루어지지 않았습니다.\");
                window.open('index.html','keenus13','width=600,height=600,top=100,left=100');
                </script>";
            alert(\"상담이 정상적으로 신청되었습니다.\");
                window.open('index.html','keenus13','width=600,height=600,top=100,left=100');
                </script>";
            
                echo '<h1>Fail</h1>';
                echo '<h1>Success</h1>';
                <a href="index.html">Try again</a>
            </p>
            -->
    </body>
</html>

