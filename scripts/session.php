<?php
require 'variables.php';

$postdata = file_get_contents("php://input");
$post = json_decode($postdata);

if(isset($post)){

  $email = $post->email;
  $password = $post->password;

  try {
      $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
      $dbh = new PDO($dsn, $username, $pass);
      $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e){
      echo json_encode($e->getMessage());
      return 0;
  }

  $stmt = $dbh->prepare("SELECT * FROM users where email = '$email'");
  // Especificamos el fetch mode antes de llamar a fetch()
  $stmt->setFetchMode(PDO::FETCH_ASSOC);
  // Ejecutamos
  $stmt->execute();
  // Mostramos los resultados
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if (crypt($password, $user['password']) == $user['password']){
      $_SESSION['logged'] = true;

      echo json_encode(array('status' => 200, 'message' => 'Sesión iniciada', 'session' => $_SESSION['logged']));
  } else {
    echo json_encode(array('status' => 400, 'message' => 'Contraseña equivocada'), JSON_UNESCAPED_UNICODE);
  }
} else {
  echo json_encode(array('status' => 404, 'message' => 'No hay nada'));
}

?>
