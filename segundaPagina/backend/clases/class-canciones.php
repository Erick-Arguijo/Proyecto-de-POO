<?php
    class Cancion{
       private $cancion = "";
       private $nombre ="";
       private $artista ="" ;
       private $album = "";
       private $genero =[];
       private $duracion ="";
       private $url = "";

        


       /**
        * Get the value of cancion
        */ 
       public function getCancion()
       {
              return $this->cancion;
       }

       /**
        * Set the value of cancion
        *
        * @return  self
        */ 
       public function setCancion($cancion)
       {
              $this->cancion = $cancion;

              return $this;
       }

       /**
        * Get the value of nombre
        */ 
       public function getNombre()
       {
              return $this->nombre;
       }

       /**
        * Set the value of nombre
        *
        * @return  self
        */ 
       public function setNombre($nombre)
       {
              $this->nombre = $nombre;

              return $this;
       }

       /**
        * Get the value of artista
        */ 
       public function getArtista()
       {
              return $this->artista;
       }

       /**
        * Set the value of artista
        *
        * @return  self
        */ 
       public function setArtista($artista)
       {
              $this->artista = $artista;

              return $this;
       }

       /**
        * Get the value of album
        */ 
       public function getAlbum()
       {
              return $this->album;
       }

       /**
        * Set the value of album
        *
        * @return  self
        */ 
       public function setAlbum($album)
       {
              $this->album = $album;

              return $this;
       }

       /**
        * Get the value of duracion
        */ 
       public function getDuracion()
       {
              return $this->duracion;
       }

       /**
        * Set the value of duracion
        *
        * @return  self
        */ 
       public function setDuracion($duracion)
       {
              $this->duracion = $duracion;

              return $this;
       }

       /**
        * Get the value of url
        */ 
       public function getUrl()
       {
              return $this->url;
       }

       /**
        * Set the value of url
        *
        * @return  self
        */ 
       public function setUrl($url)
       {
              $this->url = $url;

              return $this;
       }

       public static function obtenercancion($nombre){
           $archivo = file_get_contents("../data/canciones.json");
           $asociativo = json_decode($archivo, true);

           for ($i=0; $i <sizeof($asociativo) ; $i++) { 
                if ($asociativo[$i]["nombre"]==$nombre) {
                    $dato =$asociativo[$i];
                }
           }

           echo json_encode($dato);
       }

       public static function obteneralbum($album){
              $respuesta = array();

           $archivo = file_get_contents("../data/canciones.json");
           $asociativo = json_decode($archivo, true);

           $archivodiscografia = file_get_contents("../data/discografias.json");
           $asociativodiscografia = json_decode($archivodiscografia, true);

           

           

           for ($i=0; $i <sizeof($asociativo) ; $i++) { 
                  if ($asociativo[$i]["album"]==$album) {
                     
                        $respuesta[] = $asociativo[$i]; 
                  }
           }
           for ($i=0; $i <sizeof($asociativodiscografia) ; $i++) { 
              if ($asociativodiscografia[$i]["album"]==$album) {
                     $respuesta[0]["imagen"]=$asociativodiscografia[$i]["imagen"];
              }
       }

           echo(json_encode($respuesta));
       }

       public static function obtenercanciones(){

       } 

    }
?>