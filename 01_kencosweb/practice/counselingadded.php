<html>
<head>
<title> Add Client </title>
</head>
<body>

<?php

if (isset($_POST['submit'])) {
    $data_missing =  array();
    
    if (empty($_POST['full_name'])) {
        // Adds name to array
        $data_missing[] = 'Full Name';
    } else {
        // Trim white space from the name and store the name
        $name = trim($POST['full_name']);
    }
    
    if (empty($_POST['cell_phone'])) {
        $data_missing[] = 'Phone Number';
    } else {
        $phone = trim($POST['cell_phone']);
    }
    
    if (empty($_POST['email'])) {
        $data_missing[] = 'Email';
    } else {
        $email = trim($POST['email']);
    }
    
        if (empty($_POST['consent'])) {
        $data_missing[] = 'Consent for Collection';
    } else {
        $consent = trim($POST['consent']);
    }
    
    if (empty($data_missing)) {
        require_once('../mysqli_connect.php');
        $query = "INSERT INTO kencos (full_name, cell_phone, email, consent) VALUES (?, ?, ?, ?)";
        $stmt = mysqli_prepare($dbc, $query);
        
        i Integers
        d Doubles
        b Blobs
        s Everything Else
        
        mysqli_stmt_blind_param($stmt, "ssss", $name, $phone, $email, $consent);
        mysqli_stmt_execute($stmt);
        
        $affected_rows = mysqli_stmt_affected_rows($stmt);
        
        if($affected_rows == 1) {
            echo 'Client Entered';
            
            mysqli_stmt_close($stmt);
            mysqli_close($dbc);
        } else {
            echo 'Error Occurred<br />';
            echo mysqli_error();
            
            mysqli_stmt_close($stmt);
            mysqli_close($dbc);
        }
    } else {
        echo 'You need to enter the following data<br />';
        foreach($data_missing as $missing) {
            echo "$missing<br />";
        }
    }
}

?>

<form action = "http://localhost/counselingadded.php" method = "post">
    <b> Add a New Client </b>
    
    <p> Full Name:
    <input type="text" name = "full_name" size = "30" value="" />
    
    <p> Phone Number:
    <input type="text" name = "cell_phone" size = "30" value="" />
    
    <p> Email:
    <input type="text" name = "email" size = "30" value="" />
    
    <p> Consent for Collection<:
    <input type="text" name = "consent" size = "30" value="" />
    
    </p>
    
    <p>
        <input type = "submit" name = "submit" value = "Send" />
    </p>
    
</form>

</body>
</html>
