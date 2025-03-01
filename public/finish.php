<?php
// Файлы phpmailer

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$name = $obj['name'];
$phone = $obj['phone'];
$question = $obj['question'];
$agree = $obj['agree'];

// Формирование самого письма
$title = "Новый контакт".$name;

$body = "<h2>Новый контакт на Landing page</h2>

  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Клиент: </b>$name</td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон: </b>$phone</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Вопрос клиента: </b>$question</td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$agree</b></td>
  </tr>";
$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  //$mail->SMTPDebug = 2; 
  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

// Настройки вашей почты
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'igorbob73@gmail.com'; // Логин на почте
  $mail->Password   = 'aozrcvztnjanepif'; // Пароль
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('igorbob73@gmail.com', 'Игорь Бобырев'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('igor73diz@mail.ru');
  $mail->addAddress('igorbob73@gmail.com');
  $mail->addAddress('yorg1973fisher@yandex.ru');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);