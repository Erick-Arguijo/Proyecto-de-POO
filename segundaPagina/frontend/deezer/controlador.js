

/////////////////////////////////  MUSICA GENERO ///////////////////////////////////////////////////////////////////////
function generarMusicaGenero() {
    axios({
        method:"GET",
        url:"../../backend/api/playlist.php",
        respondeType:"json"
    }).then((res)=>{
        console.log(res)
        for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < res.data[i].identificador.length; j++) {
                //console.log(res.data[i].identificador[j]="genero");
                if (res.data[i].identificador[j]=="genero") {
                    document.getElementById("musicagenero").innerHTML+=
                    `
                        <div class="comun col-xl-3 col-lg-3"><div style="background-image: url(${res.data[i].imagen}); height: 92px;" ><p class="estandar">${res.data[i].nombre}</p></div></div>
                    `
                    document.getElementById("cuerpomusicagenero").innerHTML+=
                    `
                    <div class="comun col-xl-3 col-lg-3"><div style="background-image: url(${res.data[i].imagen}); height: 92px;" ><p class="estandar">${res.data[i].nombre}</p></div></div>
                    `

                }
                
            }
            
        }
    }).catch((error)=>{
        console.log(error);
    });
    
}
generarMusicaGenero();

/////////////////////////////////  Musica Destacada  ///////////////////////////////////////////////////////////////////
function generarDestacada() {
    axios({
        method:"GET",
        url:"../../backend/api/playlist.php",
        respondeType:"json"
    }).then((res)=>{
        console.log(res)
        for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < res.data[i].identificador.length; j++) {
                //console.log(res.data[i].identificador[j]="genero");
                if (res.data[i].identificador[j]=="destacadas") {
                    document.getElementById("musicadestacada").innerHTML+=
                    `
                        <div class="comun col-xl-3 col-lg-3"><div style="background-image: url(${res.data[i].imagen}); height: 92px;" ><p class="estandar">${res.data[i].nombre}</p></div></div>
                    `
                }
                
            }
            
        }
    }).catch((error)=>{
        console.log("error");
    });
    
}
generarDestacada();

///////////////////////////////////// MUSICA MOMENTOS ///////////////////////////////////////////////////////////////

function generarMomentos() {
    axios({
        method:"GET",
        url:"../../backend/api/playlist.php",
        respondeType:"json"
    }).then((res)=>{
        console.log(res)
        for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < res.data[i].identificador.length; j++) {
                //console.log(res.data[i].identificador[j]="genero");
                if (res.data[i].identificador[j]=="momento") {
                    document.getElementById("musicamomentos").innerHTML+=
                    `
                        <div class="comun col-xl-3 col-lg-3"><div style="background-image: url(${res.data[i].imagen}); height: 92px;" ><p class="estandar">${res.data[i].nombre}</p></div></div>
                    `
                }
                
            }
            
        }
    }).catch((error)=>{
        console.log(error);
    });
    
}
generarMomentos();


///////////////////////// Cantantes favoritos /////////////////////////////////////////////////////////////////

function generarcantatesfavoritos(){

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      var correo = getCookie("correo");
      console.log(correo);

    axios({
        method:"GET",
        url:"../../backend/api/usuario.php?id="+correo,
        respondeType:"json"
    }).then((res)=>{
        console.log(res)
       
        document.getElementById("misartistas").innerHTML=``;
        document.getElementById("contenedorartista").innerHTML=``;


        document.getElementById("misartistas").innerHTML=
        `<div id="titulo" class="col-xl-12"> <h2>${res.data.cantanteFavorito.length} Artistas</h2></div>
        `
        for (let i = 0; i < res.data.cantanteFavorito.length; i++) {
            document.getElementById("contenedorartista").innerHTML+=

            `
            <div id="contenedorartista" class="col-xl-3 col-lg-3">
            <div id="contenedoricono">
              <button id="iconoplay" class="botonicono"><i class="fas fa-play"></i></button>
              <button id="iconoheart" class="botonicono"><i class="fas fa-heart"></i></button>
            </div>
            <img id="imagenartista" src="${res.data.cantanteFavorito[i].imagen}" alt="" onclick="verartista('${res.data.cantanteFavorito[i].nombre}')">
            <h6 class="nombreartistas" >${res.data.cantanteFavorito[i].nombre}</h6>
            <p class = "fansartistas">${res.data.cantanteFavorito[i].fans} fans</p>
          </div>
            `
            document.getElementById("misartistas").innerHTML+=
            `
            <div id="contenedorartista" class="col-xl-3 col-lg-3">
            <div id="contenedoricono">
              <button id="iconoplay" class="botonicono"><i class="fas fa-play"></i></button>
              <button id="iconoheart" class="botonicono"><i class="fas fa-heart"></i></button>
            </div>
            <img id="imagenartista" src="${res.data.cantanteFavorito[i].imagen}" alt="">
            <h6 class="nombreartistas" >${res.data.cantanteFavorito[i].nombre}</h6>
            <p class = "fansartistas">${res.data.cantanteFavorito[i].fans} fans</p>
          </div>
            `
        }


    }).catch((error)=>{
        console.log(error);
    });
    
}
generarcantatesfavoritos();


/////////////////////////////////////// MIS ARTISTAS ////////////////////////////////////////////////////////

function generarNuevosArtistas() {
    axios({
        method:"GET",
        url:"../../backend/api/artista.php",
        respondeType:"json"
    }).then((res)=>{
        console.log(res)

        for (let i = 0; i < 4; i++) {
            document.getElementById("generarNuevosArtistas").innerHTML+=
            `
            <div id="contenedorartista" class="col-xl-3 col-lg-3">
            <div id="contenedoricono">
              <button id="iconoplay" class="botonicono"><i class="fas fa-play"></i></button>
              <button id="iconoheart" class="botonicono"><i class="fas fa-heart"></i></button>
            </div>
            <img id="imagenartista" src="${res.data[i].imagen}" alt="">
            <h6 class="nombreartistas" >${res.data[i].nombre}</h6>
            <p class = "fansartistas">${res.data[i].fans} fans</p>
          </div>
            `
        }

    }).catch((error)=>{
        console.log(error);
    });
    
}
generarNuevosArtistas();


///////////////////////// PLAYLIST RECOMENDADAS ///////////////////////////////////////////////////////////////////////

function playlistRecomendadas() {
    axios({
        method:"GET",
        url:"../../backend/api/playlist.php",
        respondeType:"json"
    }).then((res)=>{
        //console.log("Datos");
        console.log(res)
        for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < res.data[i].identificador.length; j++) {
                if (res.data[i].identificador[j]=="populares") {
                    document.getElementById("contenedorbody").innerHTML+=
                    `
                    <div id="etiqueta" class="col-xl-3 col-lg-3">
                    <div id="contenedoriconoalbum">
                      <button id="iconoplay" class=" botonicoalbum botonicono"><i class="fas fa-play"></i></button>
                      <button id="iconoheart" class="botonicoalbum botonicono"><i class="fas fa-heart"></i></button>
                      <button id="iconoinf" class="  botonicoalbum botonicono"><i class="fas fa-info-circle"></i></button>
                    </div>
                    <img id="imgalbums" src="${res.data[i].imagen}" alt="">
                  </div>
                    
                    `
                }
                
            }
            
        }
    }).catch((error)=>{
        console.log(error);
    });
    
}

playlistRecomendadas();

///////////////////////////////////////// VER CANTANTE /////////////////////////////////////

function verartista(artista) {
    document.getElementById("contenedortitulo").style.display="none";
    document.getElementById("contenedorartista").style.display="none";
    document.getElementById("verartista").style.display="block";
    document.getElementById("vercanciones").style.display="block";
    document.getElementById("contenedorbod").style.display="flex";
    
 console.log(artista);
 axios({
    method:"GET",
    url:"../../backend/api/artista.php?id="+artista,
    respondeType:"json"
}).then((res)=>{
    console.log(res)

    document.getElementById("verartista").innerHTML=
    `
    <div id="contendorverimagenartista" class="row">
    <div class="col-xl-3"><img id="imagenverartista" src="${res.data.imagen}" alt=""></div>
    
    <div class="col-xl-9">
      <ul id="ulartista">
        <li><h4>${res.data.nombre}</h4></li>
        <li>${res.data.fans} fans</li>
        <li><button>mix</button></li>
      </ul>
    </div>    
    `
    document.getElementById("contenerorUlMusica").innerHTML=``;
    for (let i = 0; i < res.data.discografia.length; i++) {
        for (let j = 0; j < res.data.discografia[i].canciones.length; j++) {
            document.getElementById("contenerorUlMusica").innerHTML+=
            `
            <ul id="ulmusica">
                <li>${i+1}</li>
                    <li class="liprincipal"><button type="submit" onclick="reproducir('${res.data.discografia[i].canciones[j].nombre}')"><i class="fas fa-play"></i></button></li>
                    <li class="liprincipal">${res.data.discografia[i].canciones[j].nombre}</li>
                    <li class="lisecundario"><button><i class="fas fa-plus"></i></button></i></li>
            </ul>
            `
            
        }
        
    }

    document.getElementById("contenedorbod").innerHTML="";
    for (let i = 0; i < res.data.discografia.length; i++) {
        document.getElementById("contenedorbod").innerHTML+=
        `
        <div id="etiqueta" class="col-xl-3 col-lg-3">
            <div id="contenedoriconoalbum" class="">
                <button id="iconoplay" class=" botonicoalbum botonicono"><i class="fas fa-play"></i></button>
                <button id="iconoheart" class="botonicoalbum botonicono"><i class="fas fa-heart"></i></button>
                <button id="iconoinf" class="  botonicoalbum botonicono"><i class="fas fa-info-circle"></i></button>
            </div>
            <img id="imgalbums" src="${res.data.discografia[i].imagen}" onclick="veralbum('${res.data.discografia[i].album}')" alt="">
            <p>${res.data.discografia[i].album}</p>
            <p>de ${res.data.discografia[i].nombre}</p>
        </div>
        `
        
    }


   

}).catch((error)=>{
    console.log(error);
});



}

/////////////////////////// REPRODUCIR MUSICA /////////////////////////////////////////////////////////////////

function reproducir(cancion) {
   

    console.log("nombre de la cancion: "+cancion);
    axios({
        method:"GET",
        url:"../../backend/api/cancion.php?id="+cancion,
        respondeType:"json"
    }).then((res)=>{
        
        console.log(res)
        var audio = new Audio(res.data.url);
        audio.play();
    }).catch((error)=>{
        console.log(error);
    });
}

 //////////////////////  VER ALBUM ////////////////////////////////////////////////////////////////////////////

 function veralbum(album) {
    document.getElementById("verartista").style.display="none";    
    document.getElementById("vercanciones").style.display="none";
    document.getElementById("contenedorbod").style.display="none";
    

    
    console.log(album);



    axios({
        method:"GET",
        url:"../../backend/api/cancion.php?album="+album,
        respondeType:"json"
    }).then((res)=>{
        console.log(res);
        
        document.getElementById("caratula").innerHTML='';
        document.getElementById("contenerorUlMusicaAlbum").innerHTML='';
        for (let i = 0; i < res.data.length; i++) {
            document.getElementById("caratula").innerHTML+=
        `
        <div class="col-xl-3 col-lg-3"><img src="${res.data[0].imagen}" alt=""></div>
        <div id = "margen" class="col-xl-9 col-lg-9">${res.data[0].album}</div>        
        `

            document.getElementById("contenerorUlMusicaAlbum").innerHTML+=
            `
            <ul id="ulmusica" class="ulmusica">
                        <li>${i+1}</li>
                        <li class="liprincipal"><button><i class="fas fa-play"onclick="reproducir('${res.data[i].nombre}')" ></i></button></li>
                        <li class="liprincipal"><button><i class="far fa-heart"></i></button></li>
                        <li class="liprincipal">${res.data[i].nombre}</li>
                        <li class="lialbum lisecundario">${res.data[i].duracion}</li>
                        <li class="lialbum lisecundario"><button><i class="fas fa-plus"></i></button></i></li>
                        
                      </ul>
            `
            
        }

    }).catch((error)=>{
        console.log(error);
    });
    
 }