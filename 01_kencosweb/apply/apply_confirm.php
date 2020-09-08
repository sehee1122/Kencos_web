<?
//    $fp = fopen("member.dat", "a+");
    mysqli_query("medical_db");
    
    $t = time();
    $tmp = "$name/$phone1/$phone2/$phone3/$email/$REMOTE_ADOR/$time `r`n";
    
    fputs($fp, $tmp);
    
    fclose($fp);
    
?>

<script>
    window.alert('상담이 정상적으로 신청되었습니다.');
    location.href='apply.html';
</script>
