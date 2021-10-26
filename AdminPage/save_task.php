<?php

// GUID format is XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX for readability    
   
include('db.php');

if (isset($_POST['save_task'])) {
  $fullname = $_POST['fullname'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $description = $_POST['description'];
  $id=uniqid();
  $unique_id = time() . mt_rand() . $fullname;
 $query = "INSERT INTO contact_us(fullname,email,phone,msg,id) VALUES ('$fullname','$email','$phone', '$description','$unique_id')";

// $query = "UPDATE contact_us set fullname = '$fullname', email = '$email', phone = '$phone', msg = '$description' WHERE id=$id";
 // $result = mysqli_query($conn, $query);
  $result = mysqli_query($conn, $query);
  
  if(!$result) {
    die("Query Failed.  $query");
  }
 // else
 
echo('Thank you for contacting us, we will get back to you shortly');
  //$_SESSION['message'] = 'Task Saved Successfully';
  //$_SESSION['message_type'] = 'success';
  //header('Location: index.html');
//RewriteCond %{REQUEST_FILENAME} !-f
//RewriteCond %{REQUEST_FILENAME} !-d
//RewriteRule ^(.*)$ folder/$1 [L]
}

?>
