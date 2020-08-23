<?php
    $_POST=json_decode(file_get_contents('php://input'),true);
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
        break;
        
        case 'GET':
            if (isset($_GET['album'])) {
                include_once('../clases/class-canciones.php');
                Cancion::obteneralbum($_GET['album']);
            }
            
            if (isset($_GET['id'])) {
                include_once('../clases/class-canciones.php');
                Cancion::obtenercancion($_GET['id']);
            } else {
                include_once('../clases/class-canciones.php');
                Cancion::obtenercanciones();
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