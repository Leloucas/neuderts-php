<?php
require 'variables.php';

$dbh = null;

try {
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
    $dbh = new PDO($dsn, $username, $pass);
} catch (PDOException $e){
    echo $e->getMessage();
    return 0;
}

if($dbh){
  $salt = uniqid(mt_rand(), true);
  $password =  crypt('wenzel neudert 1605', $salt);

  $stmt = $dbh->prepare("INSERT INTO users (name, email, password) VALUES ('Wenzel', 'wenzelneudert@gmail.com', '$password')");

  // Especificamos el fetch mode antes de llamar a fetch()
  // Ejecutamos
  $stmt->execute();
  echo $password;


  echo "sí se pudo papu";
}
?>
