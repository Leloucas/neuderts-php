<?php
require '../variables.php';

if (!defined('PDO::ATTR_DRIVER_NAME')) {
  echo 'PDO unavailable';
  return 0;
}

$dbh = null;

try {
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
    $dbh = new PDO($dsn, $username, $pass);
} catch (PDOException $e){
    echo $e->getMessage();
    return 0;
}

if($dbh){
  $stmt = $dbh->prepare("SELECT id, title, slug, subtitle, img, date, active FROM blog  ORDER BY date DESC");
  // Especificamos el fetch mode antes de llamar a fetch()
  $stmt->setFetchMode(PDO::FETCH_ASSOC);
  // Ejecutamos
  $stmt->execute();
  // Mostramos los resultados
  $blog = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($blog, JSON_UNESCAPED_UNICODE);
  return 0;
} else {
  echo 500;
  return 0;
}

 ?>
