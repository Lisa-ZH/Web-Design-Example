<?php
if($_POST) {
  $to = "admin@hztechnology.net"; // your mail here
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
  $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
  $body = "Message: $message\nE-mail: $email";
  
  if(mail($to, $subject, $body)) {
    $output = json_encode(array('success' => true));
    die($output);
  } else {
    $output = json_encode(array('success' => false));
    die($output);
  }
}
?>


<!--
<!DOCTYPE html>
<html>
<body>


<?php
/*
$to = "admin@hztechnology.net";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: lisazhad@yahoo.com" . "\r\n" . "CC: ";

$mail = mail($to,$subject,$txt, $headers);
if($mail){
  echo "Thank you for using our mail form";
}else{
  echo "Mail sending failed."; 
}*/
?>

</body>
</html>
-->