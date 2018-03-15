<?php
  require '../variables.php';

  $postdata = file_get_contents("php://input");
  $id = json_decode($postdata);

  if($id){

    try {
      $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
      $dbh = new PDO($dsn, $username, $pass);
      $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e){
      echo json_encode($e->getMessage());
      return 0;
    }

    if($dbh){
      $sql = "DELETE FROM portfolio WHERE id = :id";
      $stmt = $dbh->prepare($sql);
      $stmt->execute(array('id' => $id));

      echo json_encode(array('status' => 201, 'message' => 'Borrado correctamente'));
    } else {
      echo json_encode(array('status' => 500, 'message' => 'Error en el servidor'));
    }

  } else {
    echo json_encode(array('status' => 404, 'message' => 'No hay portfolio'));
  }

 ?>
