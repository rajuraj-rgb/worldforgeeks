<?php
if(!empty($_POST["Submit"])) {
	$name = $_POST["Name"];
	$email = $_POST["Email"];
	$subject = $_POST["Subject"];
	$content = $_POST["Content"];

	$toEmail = "support@worldforgeeks.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";
	if(mail($toEmail, $subject, $content, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
}
require_once "contact-view.php";
?>
