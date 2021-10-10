<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Excaption;


require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';


$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLenguage('uk', 'phpmailer/Language');
$mail->IsHTML(true);

//От кого письмо
$mail->serFrom('olexandr.sheva@gmail.com', 'Oleksandr');
//Кому письмо
$mail->addAddress('ovshevchuk.fitu18@gmail.com');
//Тело письма
$mail->Subject = 'Hello';

$body = '<h1>Email for support</h1>';

if (trim(!empty($_POST['message']))){
    $body.='<p><strong>Message: </strong>'.$_POST['message'].'</p>';
}
if (trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail: </strong>'.$_POST['email'].'</p>';
}

$mail->Body = $body;

//Отправление

if (!$mail->send()){
    $message = '_Error';
}else{
    $message = 'YES';
}

$response = ['message'=>$message];

header('Content-type: application/json');
echo json_encode($response);
?>

