<?php

require_once('../mysqli_connect.php');

$query = "SELECT full_name, cell_phone, email, consent, FROM kencos";

$response = @mysqli_query($dbc, $query);

if ($response) {
    echo '<table align ="left"
    cellspacing = "5" cellpadding = "8">
    
    <tr><td align = "left"><b>Full Name</b></td>
        <td align = "left"><b>Phone Number</b></td>
        <td align = "left"><b>Email</b></td>
        <td align = "left"><b>Consent for Collection</b></td>
    </tr>';
        
    while ($row = mysqli_fetch_array($response)) {
        echo '<tr><td align = "left"' .
        $row['full_name'] . '</td><td align = "left">' .
        $row['cell_phone'] . '</td><td align = "left">' .
        $row['email'] . '</td><td align = "left">' .
        $row['consent'] . '</td><td align = "left">';
        
        echo '</tr>';
    }
    echo '</table>';
}

else {
    echo "Couldn't issue database query";
    echo mysqli_error($dbc);
}

mysqli_close($dpc);

?>