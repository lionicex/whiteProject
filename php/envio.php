<?php
       if (isset($_POST["name"]) and isset($_POST["correo"])) {
       $destino="lionicex@gmail.com";
       $asunto="Contacto White Project";

       $name=$_POST['name'];
       $email=$_POST['email'];
       $asunto=$_POST['asunto'];
       $mensaje=$_POST['mensaje'];
       $msn="
       nombre: $name  \n
       email: $email  \n
       asunto: $asunto\n
       mensaje: $mensaje  \n
       ";

       $cabeceras = 'From: lionicex@gmailcom' . "\r\n" . 'Reply-To: lionicex@gmail.com ' . "\r\n" . 'X-Mailer: PHP/' . phpversion();

       if(mail($destino,$asunto,$msn,$cabeceras)){
         header("Location: contacto.php?m=1");
         }
       }
       ?>