<?php
// Include required PHPMailer files
require('phpmailer/PHPMailer.php');
require('phpmailer/SMTP.php');
require('phpmailer/Exception.php');

// Define name spaces
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Create instance of PHPMailer
$mail = new PHPMailer();

// Set mailer to use smtp
$mail->isSMTP();

// Define smtp host
$mail->Host = "smtp.gmail.com";

// Enable smtp authentication
$mail->SMTPAuth = true;

// Set smtp encryption type (ssl/tls)
// $mail->SMTPSecure = 'ssl';
$mail->SMTPSecure = "tls";

// Port to connect smtp
// $mail->Port = 465;
$mail->Port = "587";

// Set gmail username
$mail->Username = "oxyblade2@gmail.com";

// Set gmail password
$mail->Password = "YlY1FCKY-google2";

// Email subject
$mail->Subject = "CONTACT ME";

// Set sender email
$mail->setFrom('oxyblade2@gmail.com');

// Enable HTML
$mail->isHTML(true);

// Attachment
// $mail->addAttachment('img/attachment.png');

// Email body
// $mail->Body = "<h1>This is HTML h1 Heading</h1></br><p>This is html paragraph</p>";
$mail->Body = '' . '<strong>' . $name . '</strong>' . ' has been sent form<br> <strong>Subject:</strong> ' . $subject . '<br>' . '<strong>E-mail:</strong> ' . $email . '<br>' . '<strong>Message:</strong> ' . $message;

// Add recipient
$mail->addAddress('oxyblade@gmail.com');

// Finally send email
if (!$mail->send()) {
    echo '<strong style="color: #CD214F">MESSAGE COULD NOT BE SENT!</strong><br><br>';
    echo '<strong style="color: #CD214F">ERROR:</strong><br> ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent <strong style="color: #fafafa">SUCCESSFULLY</strong>';
}

// Closing smtp connection
$mail->smtpClose();
