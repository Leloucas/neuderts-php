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
    } catch (PDOException $e){
        echo json_encode($e->getMessage());
        return 0;
    }

    if($dbh){
      $sql = "UPDATE blog SET title = :title, slug = :slug, subtitle = :subtitle, body = :body";

      $id = $data['blog']['id'];
      $title = $data['blog']['title'];
      $slug = $data['blog']['slug'];
      $subtitle = $data['blog']['subtitle'];
      $body = $data['blog']['body'];
      $id = $data['blog']['id'];
      $vars = array(
        'id' => $id,
        'title' => $title,
        'slug' => $slug,
        'subtitle' => $subtitle,
        'body' => $body,
      );
      if($filename !== ''){
        // $sql .= ", img = '$filename'";
        $sql .= ", img = :img";
        $vars['img'] = $filename;
      }

      $sql .=  " WHERE id = :id";
      $stmt = $dbh->prepare($sql);
      $stmt->execute($vars);

      // $port = $stmt->fetch(PDO::FETCH_ASSOC);

      echo json_encode(array('status' => 201, 'message' => 'Editado correctamente'));

    } else {
      echo json_encode(array('status' => 500, 'message' => 'Error en el servidor'));
    }

  } else {
    echo json_encode(array('status' => 404, 'message' => 'No hay blog'));
  }

?>
