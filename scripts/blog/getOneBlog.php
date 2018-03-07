<?php
  require '../variables.php';

  if (!defined('PDO::ATTR_DRIVER_NAME')) {
    echo 'PDO unavailable';
    return 0;
  }
  $where = '';
  if(isset($_GET['slug']) && $_GET['slug']){
    $slug = preg_replace('/[^-a-zA-Z0-9_]/', '', $_GET['slug']);
    $where = "WHERE slug = '$slug' AND active = 1";
  } elseif (isset($_GET['id']) && $_GET['id']) {
    $id = preg_replace('/[^-a-zA-Z0-9_]/', '', $_GET['id']);
    $where = "WHERE id = $id";
  } else {
    echo 500;
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
    $sql = "SELECT * FROM blog $where";

    $stmt = $dbh->prepare($sql);
    // Especificamos el fetch mode antes de llamar a fetch()
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    // Ejecutamos
    $stmt->execute();
    // Mostramos los resultados
    $port = $stmt->fetch(PDO::FETCH_ASSOC);

    $portfolio = json_encode($port, JSON_UNESCAPED_UNICODE);
    echo $portfolio;
  } else {
    echo 500;
  }

  return 0;
?>
