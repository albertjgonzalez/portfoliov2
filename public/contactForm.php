<?php


    $email = $_POST['email'];
    $subjct = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "albert@albertjgonzalez.com";
  
    $txt = "$contactmessage";

    mail($mailTo, $subjct, $txt, $headers);


 ?>
