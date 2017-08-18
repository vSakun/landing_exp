<?php
$send_text = $_POST['send_text'];
$send_text = htmlspecialchars($send_text);
$send_text = urldecode($send_text);
$send_text = trim($send_text);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("vsakun@gmail.com", "Заявка с сайта", "E-mail: ".$send_text ,"From: vitali.sakun@newland.by \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>