<?php
    header("content-Type: aplication/json");
    $_POST=json_decode(file_get_contents('php://input'),true);
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            
            include_once('../clases/class-usuario.php');

            if (isset($_POST["identificador"], $_POST["correo"], $_POST["fans"])){
            
                 Usuario::favorito($_POST['identificador'],$_POST["correo"],$_POST["fans"]); 
            }else{

            $nuevousuario = new Usuario(
                $_POST["correo"],
                $_POST["nombre"],
                $_POST["password"],
                $_POST["sexo"],
                $_POST["edad"],
                
            );
                
            $respuesta = $nuevousuario -> registrarse($_POST["correo"], $_POST["password"]);
            if ($respuesta) {
                //echo '{"codigo":0, "mensaje": "Usuario guardado"}';
                //echo '{"codigoUsuario":0 , "mensaje":"Usuario guardado"}';
                $res = array(
                    "codigoUsuario"=>0,
                    "mensaje"=>"Usuario guardado con exito",
                    "token"=> sha1(uniqid(rand(),true))
                );
                setcookie("token", $res["token"] , time()+(60*60*24*31),"/");
                setcookie("correo",$respuesta["correo"],time()+(60*60*24*31),"/");
                setcookie("nombre",$respuesta["nombre"],time()+(60*60*24*31),"/");
                setcookie("password",$respuesta["password"],time()+(60*60*24*31),"/");

                echo json_encode($res);
            }else {

                echo '{"codigoUsuario":1, "mensaje": "Ya existe un usuario con este correo y password"}';
            }
        }  
        /*}*/
        break;
        case 'GET':
            if (isset($_GET['id'])) {
                include_once('../clases/class-usuario.php');
                Usuario::obtenerusuario($_GET['id']);
            } else {
                include_once('../clases/class-usuario.php');
                Usuario::obtenerusuarios();
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