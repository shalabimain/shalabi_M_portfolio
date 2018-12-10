<?php 
    $user = "mains602";
    $password = "Dayof400";
    $host = "localhost";
    $db = "mains602_portfolio";

    $conn = mysqli_connect($host, $user, $password, $db);
    if($conn->connect_error) {
        die("connection failed:" .$conn->connect_error);
        echo "connection didn't work...";
        
    }
       
       $myQuery = "SELECT * FROM tbl_portfolio";

        $result = mysqli_query($conn, $myQuery);
        $rows = array();

         while($row = mysqli_fetch_assoc($result)) {

           $rows[] = $row;
            
       }


         echo json_encode($rows);
 
?>


