<?php
    class Playlist
    {
        private $nombre ="";
        private $imagen="";
        private $identificador="";


        public function __construct($nombre, $imagen, $identificador){
            $this->nombre=$nombre;
            $this->imagen=$imagen; 
            $this->identificador=$identificador;
        }
    
        public function getNombre()
        {
                return $this->nombre;
        }

        public function setNombre($nombre)
        {
                $this->nombre = $nombre;

                return $this;
        }

        public function getImagen()
        {
                return $this->imagen;
        }

  
        public function setImagen($imagen)
        {
                $this->imagen = $imagen;

                return $this;
        }

  
        public function getIdentificador()
        {
                return $this->identificador;
        }

       
        public function setIdentificador($identificador)
        {
                $this->identificador = $identificador;

                return $this;
        }
    

    public static function generarlistas(){
        
            $archivousuario = file_get_contents("../data/usuarios.json");
            $asociativousuario = json_decode($archivousuario, true);

            $archivoplaylist = file_get_contents("../data/playlist.json");
            $asociativoplaylist = json_decode($archivoplaylist, true);

            $archivocanciones = file_get_contents("../data/canciones.json");
            $asociativocanciones = json_decode($archivocanciones, true);

            for ($i=0; $i <sizeof($asociativoplaylist) ; $i++) { 
                    for ($j=0; $j <sizeof($asociativocanciones) ; $j++) {
                            for ($z=0; $z <sizeof($asociativocanciones[$j]["genero"]) ; $z++) { 
                                if ($asociativoplaylist[$i]["nombre"]==$asociativocanciones[$j]["genero"][$z]) {
                                
                                        $asociativoplaylist[$i]["canciones"][]=$asociativocanciones[$j]["cancion"];
                                }
                            }
                            
                        }    
                    }
             
            echo  json_encode($asociativoplaylist);
    }
}


    

?>