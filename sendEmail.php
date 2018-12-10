
<?php

	function send_email(){
		if(empty($_POST['email'])){
			header('Location:/contact.php?status=error');
			exit();
		}
		if(!isset($_POST['message']) || !isset($_POST['email'])){
			header('Location:/contact.php?status=error');
			exit();
		}
		
	
		$to = 'm_shalabi2@fanshaweonline.ca';
		$subject = "Portfolio Site Feedback";
		$message = 'Message Body:'.$_POST['message'];
		$headers = "From: noreply@mainshalabi.com\r\n";
		$headers .= 'Reply-To:'.$_POST['email'];
		
        
		if(mail($to, $subject, $message, $headers)){
			header('Location:/index.html');
		}
	}
	
	send_email();
	
?>