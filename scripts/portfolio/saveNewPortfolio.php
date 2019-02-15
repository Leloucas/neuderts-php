<?php
  require '../variables.php';

  if (!empty($_POST)){
    $data = $_POST;

    $filename = '';

    if(!empty($_FILES)){
      $filename = time().basename($_FILES['file']['name']);
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
      $title = $data['portfolio']['title'];
      $slug = $data['portfolio']['slug'];
      $type = $data['portfolio']['type'];
      $subtitle = $data['portfolio']['subtitle'];
      $body = $data['portfolio']['body'];

      $sql = "SELECT 1 FROM portfolio WHERE slug = :slug";
      $stmtest = $dbh->prepare($sql);
      $stmtest->execute(array('slug' => $slug));
      $exists = $stmtest->fetch(PDO::FETCH_ASSOC);

      if(!$exists){

        $doc = new DOMDocument();
        $doc->loadHTML($body);
        $images = $doc->getElementsByTagName('img');

        foreach ($images as $image) {
          $img = $image->getAttribute('src');
          $bodyImg = $image->getAttribute('data-filename');
          if(substr($img, 0, 10) === 'data:image'){
            $data = explode( ',', $img );
            $image = base64_decode($data[1]);
            $file = '/public/assets/img/portfolio/' . $bodyImg;
            file_put_contents($_SERVER['DOCUMENT_ROOT'].$file, $image);
            $body = str_replace($img, $file, $body);
          }

        }

        $sql = "INSERT INTO portfolio (title, slug, type, subtitle, body";
        $sql2 = ") VALUES (:title, :slug, :type, :subtitle, :body";

        $vars = array(
          'title' => $title,
          'slug' => $slug,
          'type' => $type,
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
    echo json_encode(array('status' => 404, 'message' => 'No hay portfolio'));
  }

?>
