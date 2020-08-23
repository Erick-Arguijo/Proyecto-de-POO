<?php
    class Artista {
        private $nombre="";
        private $imagen="";
        private $biografia="";

       
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

       
  

        public function getBiografia()
        {
                return $this->biografia;
        }

       
        public function setBiografia($biografia)
        {
                $this->biografia = $biografia;

                return $this;
        }

        

        public static function obtenerartista($artista){
            $archivoartistas = file_get_contents("../data/artistas.json");
            $asociativoartistas = json_decode($archivoartistas, true);


            $archivocanciones = file_get_contents("../data/canciones.json");
            $asociativocanciones = json_decode($archivocanciones,true);

            $archivodiscografia = file_get_contents("../data/discografias.json");
            $asociativodiscografia = json_decode($archivodiscografia, true);

            for ($i=0; $i <sizeof($asociativodiscografia) ; $i++) { 
                    for ($j=0; $j <sizeof($asociativocanciones) ; $j++) { 
                            if ($asociativodiscografia[$i]["album"]==$asociativocanciones[$j]["album"]) {
                                    $asociativodiscografia[$i]["canciones"][]=$asociativocanciones[$j];
                            }
                    }
            }
            

 
            for ($i=0; $i <sizeof($asociativoartistas) ; $i++) { 
                for ($j=0; $j <sizeof($asociativodiscografia) ; $j++) {


                        if ($asociativoartistas[$i]["nombre"]==$asociativodiscografia[$j]["nombre"]) {
                                $asociativoartistas[$i]["discografia"][]=$asociativodiscografia[$j];

                                 
                        }       

                }
            }

         for ($i=0; $i <sizeof($asociativoartistas) ; $i++) { 
                if ($asociativoartistas[$i]["nombre"]==$artista) {
                        $dato = $asociativoartistas[$i];
                }
          }

                echo json_encode($dato);  
         
            

        }

        public static function obtenerartistas(){
                /*$archivo = file_get_contents("../data/artistas.json");
                $asociativo = json_decode($archivo, true);

                for ($i=0; $i <sizeof($asociativo) ; $i++) { 
                        if ($asociativo[$i]["nombre"]==$artista) {
                                $dato = $asociativo[$i];
                        }
                }*/
                echo file_get_contents("../data/artistas.json");
        }

} 
?>