<?php
  require '../variables.php';

  if (!empty($_POST)){
    $data = $_POST;
    if(!empty($_FILES)){
      $filename = basename($_FILES['file']['name']);
      $destination = $_SERVER['DOCUMENT_ROOT'] . $data['targetPath'] . $filename;
      move_uploaded_file($_FILES['file']['tmp_name'], $destination);
      echo json_encode($data);
    } else {
      echo json_encode("no hay imagen");
    }

  } else {
    echo json_encode("no hay nada");
  }

?>
