<?
    $data = json_decode($_GET['data']);

    $to  = "<prevetal@gmail.com>";

    $subject = "ДезЦентр «Прогресс» - Форма связи";

    $message = "Имя: " . $data->name . "<br>";
    $message .= "Телефон: " . $data->phone . "<br>";
    $message .= "Тип объекта: " . $data->type . "<br>";
    $message .= "Вид работ: " . $data->work . "<br>";
    $message .= "Площадь объекта: " . $data->area;

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";

    mail($to, $subject, $message, $headers);

    echo 1;
?>