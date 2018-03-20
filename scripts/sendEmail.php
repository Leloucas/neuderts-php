<?php

ini_set("SMTP", "aspmx.l.google.com");
ini_set("sendmail_from", "contacto@neuderts.com");
ini_set('smtp_port',25);


$postdata = file_get_contents("php://input");
$post = json_decode($postdata);

if(isset($post)){

  $nombre = $post->nombre;
  $email = $post->email;
  $message = $post->message;

  $message = str_replace("\n.", "\n..", $message);

  $mail = [$nombre, $email, $message];

  $head = "De: $email";

  if(mail("lucasg.ruizd@gmail.com", "Contacto Neuderts", $message, $head)){
      echo json_encode(array('status' => 201, 'message' => 'Editado correctamente'));
  } else {
      echo json_encode(array('status' => 500, 'message' => 'Error en el servidor.'));
  }

} else {
  echo json_encode(array('status' => 404, 'message' => 'No hay nada'));
}

?>
