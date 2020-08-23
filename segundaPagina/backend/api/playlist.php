<?php
    header("content-Type: aplication/json");
    $_POST=json_decode(file_get_contents('php://input'),true);
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
        break; 
  
        case 'GET':
            if (isset($_GET['id'])) {
                include_once('../clases/class-playlist.php');
                Playlist::generarlista($_GET['id']);
            } else {
                include_once('../clases/class-playlist.php');
                Playlist::generarlistas();
            }

            break;
        case 'PUT':
            # code...
            break;
        case 'DELETE':
            # code...
            break;        
    }
?>