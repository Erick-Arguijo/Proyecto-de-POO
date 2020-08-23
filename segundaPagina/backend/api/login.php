<?php
    $_POST=json_decode(file_get_contents('php://input'),true);
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            
            Usuario::login($_POST["correo"], $_POST["password"]);
        break;      
    }
?>