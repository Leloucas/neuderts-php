<?php
  require '../variables.php';
  
  $arrData = json_decode(file_get_contents("php://input"));
  $arrData = (array) $arrData;

  if (!empty($arrData)){
    $iId = (int) $arrData[0];
    $iOrder = (int) $arrData[1];

    try {
      $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
      $dbh = new PDO($dsn, $username, $pass);
    } catch (PDOException $e){
      echo json_encode($e->getMessage());
      return 0;
    }

    $sql = "UPDATE portfolio SET display = :order WHERE id = :id";

    $vars = array(
      'id' => $iId,
      'order' => $iOrder,
    );

    try {
      $stmt = $dbh->prepare($sql);
      $stmt->execute($vars);

      echo json_encode(array('status' => 201, 'message' => 'Editado correctamente'));
    } catch (PDOException $e){
      echo json_encode($e->getMessage());
      return;
    }
    
  } else {
    echo json_encode(array('status' => 404, 'message' => 'No hay portfolio'));
  }

  return;