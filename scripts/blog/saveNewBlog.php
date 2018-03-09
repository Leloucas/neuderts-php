<?php
  require '../variables.php';

  if (!empty($_POST)){
    $data = $_POST;

    $filename = '';

    if(!empty($_FILES)){
      $filename = basename($_FILES['file']['name']);
      $destination = $_SERVER['DOCUMENT_ROOT'] . $data['targetPath'] . $filename;
      move_uploaded_file($_FILES['file']['tmp_name'], $destination);
    }

    try {
        $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
        $dbh = new PDO($dsn, $username, $pass);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e){
        echo json_encode($e->getMessage());
        return 0;
    }

    if($dbh){
      $title = $data['blog']['title'];
      $slug = $data['blog']['slug'];
      $subtitle = $data['blog']['subtitle'];
      $body = $data['blog']['body'];

      $sql = "SELECT 1 FROM blog WHERE slug = :slug";
      $stmtest = $dbh->prepare($sql);
      $stmtest->execute(array('slug' => $slug));
      $exists = $stmtest->fetch(PDO::FETCH_ASSOC);

      if(!$exists){
        $sql = "INSERT INTO blog (title, slug, subtitle, body";
        $sql2 = ") VALUES (:title, :slug, :subtitle, :body";

        $vars = array(
          'title' => $title,
          'slug' => $slug,
          'subtitle' => $subtitle,
          'body' => $body,
        );
        if($filename !== ''){
          $sql .= ", img";
          $sql2 .= ", :img";
          $vars['img'] = $filename;
        }

        $sql2 .=  ")";
        $statement = $sql.$sql2;
        $stmt = $dbh->prepare($statement);
        $stmt->execute($vars);


        echo json_encode(array('status' => 201, 'message' => 'Guardado correctamente'));
      } else {
        echo json_encode(array('status' => 409, 'message' => 'Ya existe un registro con ese slug.'));
      }

    } else {
      echo json_encode(array('status' => 500, 'message' => 'Error en el servidor'));
    }

  } else {
    echo json_encode(array('status' => 404, 'message' => 'No hay blog'));
  }

?>
