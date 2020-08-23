<?php
    $_POST=json_decode(file_get_contents('php://input'),true);
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            
        
        case 'GET':
            if (isset($_GET['id'])) {
                include_once('../clases/class-artistas.php');
                Artista::obtenerartista($_GET['id']);
            } else {
                include_once('../clases/class-artistas.php');
                Artista::obtenerartistas();
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