<?php
    class Usuario{
        private $correo="";
        private $nombre = "";
        private $password ="";
        private $sexo="";
        private $edad="";
        private $imagen="";

        public function __construct($correo, $nombre, $password, $sexo, $edad){
            $this->correo=$correo;
            $this->nombre=$nombre; 
            $this->password=$password;
            $this->sexo=$sexo; 
            $this->edad=$edad;
        }

        public function getCorreo()
        {
                return $this->correo;
        }

    
        public function setCorreo($correo)
        {
                $this->correo = $correo;

        }

    
        public function getNombre()
        {
                return $this->nombre;
        }

   
        public function setNombre($nombre)
        {
                $this->nombre = $nombre;

        }


        public function getPassword()
        {
                return $this->password;
        }

        public function setContraseña($password)
        {
                $this->password = $password;

        }

        public function getSexo()
        {
                return $this->sexo;
        }

    
        public function setSexo($sexo)
        {
                $this->sexo = $sexo;

        }

        public function getEdad()
        {
                return $this->edad;
        }

    
        public function setEdad($edad)
        {
                $this->edad = $edad;

        }


        public static function obtenerusuarios(){
            echo file_get_contents('../data/usuarios.json');
                
        }

      public static function obtenerusuario($id){
              $archivo = file_get_contents("../data/usuarios.json");
              $asociativo = json_decode($archivo, true);
              for ($i=0; $i <sizeof($asociativo) ; $i++) { 
                      if ($asociativo[$i]["correo"]=$id) {
                              $imprimir = json_encode($asociativo[$i]);
                      }
              }

              echo $imprimir ;
      }

        public function favorito($identificador, $correo , $fans){
                //echo ('HOLA MUNDO: '.$identificador );
                $archivousuario = file_get_contents("../data/usuarios.json");
                $asociativousuario = json_decode($archivousuario, true);

                $archivoartistas = file_get_contents('../data/artistas.json');
                $asociativoartistas = json_decode($archivoartistas , true);

                //$asociativousuario[0] ["cantanteFavorito"] = array();

                for ($i=0; $i <sizeof($asociativoartistas) ; $i++) { 
                        if ($asociativoartistas[$i]["nombre"]==$identificador) {
                                $nuevo= array(
                                        "nombre"=>$asociativoartistas[$i]["nombre"],
                                        "imagen"=>$asociativoartistas[$i]["imagen"],
                                        "fans"=>$asociativoartistas[$i]["fans"]
                                );
                        
                        }        
                }

                for ($i=0; $i <sizeof($asociativousuario) ; $i++) { 
                        if ($asociativousuario[$i]["correo"]==$correo) {
                                $asociativousuario[$i]["cantanteFavorito"][]=$nuevo;    
                        }
                }

               
               
                

                //echo json_encode($asociativousuario) ;
        
               $dato=fopen ('../data/usuarios.json', "w");
               fwrite($dato, json_encode($asociativousuario));
               fclose($dato); 
               //echo file_get_contents('../data/usuarios.json') ;
               //echo ('hola mundo');
               echo json_encode($asociativousuario);
        }


        public function registrarse($correo, $password){
                $existe = false;
                $archivo = file_get_contents('../data/usuarios.json');
                $asociativo = json_decode($archivo, true);
                for ($i=0; $i < sizeof($asociativo) ; $i++) { 
                      if ($asociativo[$i]["correo"]==$correo && $asociativo[$i]["password"]==sha1($password)) {
                              $existe = true ; 
                      }
                }

                if ($existe==true) {
                        return null;
                }
                if ($existe == false) {
        
                        $password = sha1($this->password);
                        $nuevo = array(
                                
                                "correo"=>$this->correo,
                                "nombre"=>$this->nombre,
                                "password"=>$password,
                                "sexo"=>$this->sexo,
                                "edad"=>$this->edad,
                                "misfavoritas"=>[],
                                "albumes"=>[],
                                "poscast"=>[]
                        );
                        $asociativo [] = $nuevo;
                        $enviar = fopen('../data/usuarios.json', 'w');
                        fwrite($enviar, json_encode($asociativo));
                        fclose($enviar);
                        return $nuevo ; 
                        //echo json_encode($nuevo);
                }
        }
                
                
        

        public static function login($correo , $password){
                $archivo = file_get_contents('../data/usuarios.json');
                $asociativo = json_decode($archivo, true);
                for ($i=0; $i < sizeof($asociativo); $i++) { 
                        if ($asociativo[$i]["correo"]==$correo && $asociativo[$i]["password"]==$password) {
                                return $asociativo[$i];
                        }
                }
                return null ;
        }


        public function musicagenero(){
                $archivousuario = file_get_contents("../data/usuario.json");
                $asociativousuario = json_encode($archivousuario, true);

                $archivoplaylist = file_get_contents("../data/playlist.json");
                $asociativoplaylist = json_encode($archivoplaylist, true);

                $archivocanciones = file_get_contents("../data/canciones.json");
                $asociativocanciones = json_encode($asociativocanciones, true);

                for ($i=0; $i <sizeof($asociativoplaylist) ; $i++) { 
                        for ($j=0; $j <sizeof($asociativocanciones) ; $j++) { 
                                if ($asociativoplalist[$i]["nombre"]==$asociativocanciones[$j]["genero"]) {
                                        $asociativoplalist[]["canciones"]=$archivocanciones["cancion"];
                                }
                        }
                       
                }
        }
    }
    

?>