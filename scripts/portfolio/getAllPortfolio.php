<?php
require '../variables.php';

if (!defined('PDO::ATTR_DRIVER_NAME')) {
  echo 'PDO unavailable';
  return 0;
}

$dbh = null;
$whereType = '';

if(isset($_GET['type']) && $_GET['type']){
  $type = preg_replace('/[^-a-zA-Z0-9_]/', '', $_GET['type']);
  if($type == 1){
    $whereType = ' AND type IN (0,1) ';
  } else if ($type == 2){
    $whereType = ' AND type IN (0,2) ';
  }
}

try {
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
    $dbh = new PDO($dsn, $username, $pass);
} catch (PDOException $e){
    echo $e->getMessage();
    return 0;
}

if($dbh){
  $stmt = $dbh->prepare("SELECT id, title, slug, subtitle, img, date, active, display, type FROM portfolio WHERE active = 1 $whereType ORDER BY display ASC");
  // Especificamos el fetch mode antes de llamar a fetch()
  $stmt->setFetchMode(PDO::FETCH_ASSOC);
  // Ejecutamos
  $stmt->execute();
  // Mostramos los resultados
  $portfolios = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($portfolios, JSON_UNESCAPED_UNICODE);
  return 0;
} else {
  echo 500;
  return 0;
}

 ?>
