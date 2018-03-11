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
  $stmt = $dbh->prepare("SELECT id, title, slug, subtitle, img, date, active FROM portfolio WHERE active = 1 ORDER BY date DESC");
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


// $obj1 = new stdClass();
//   $obj1->title = "Soy una verga";
//   $obj1->slug = "ayy-lmao";
//   $obj1->subtitle = "A poco no mamon";
//   $obj1->img = '000_ElShowDeKarl.png';
//   $obj1->date = '18-12-2018';
// $obj2 = new stdClass();
//   $obj2->title = "Ayy Lmao";
//   $obj2->slug = "ayy-lmao";
//   $obj2->subtitle = "the kekkest of all";
//   $obj2->img = '000_ElShowDeKarl.png';
//   $obj2->date = '18-12-2018';
// $obj3 = new stdClass();
//   $obj3->title = "Double trouble";
//   $obj3->slug = "double-trouble";
//   $obj3->subtitle = "tlatoani";
//   $obj3->img = '000_ElShowDeKarl.png';
//   $obj3->date = '18-12-2018';
//
// $retorno = array($obj1, $obj2, $obj3);

// echo json_encode($retorno);

 ?>
