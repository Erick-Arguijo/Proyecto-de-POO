function generarartista() {
    axios({
        url:'../../backend/api/artista.php',
        method:'GET',
        responseType:'json'

    }).then((res)=>{
    console.log(res.data);
    
    for (let i = 0; i < res.data.length; i++) {
        var nombre = res.data[i].nombre; 
        document.getElementById("pintar").innerHTML+=
        `
        <div class="cuerpo col-xl-2 col-lg-2" onclick="favorito('${res.data[i].nombre}','${res.data[i].fans}' );">
            <img class="img" src="${res.data[i].imagen}" alt="">
            <h6 class="h">${res.data[i].nombre}</h6>
        </div>
        `
        
    }
    
    }).catch((error)=>{
    console.log(error);
    });
}
generarartista();



function favorito(identificador , fans) {
    console.log("Hola mundo" + identificador);
    
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

      var leer = getCookie("correo");
      console.log(leer);
    
    
    axios({
        url:`../../backend/api/usuario.php`,
        method:'POST',
        responseType:'json',
        data:{
            "identificador":identificador,
            "correo":leer,
            "fans":fans 
        }

    }).then((res)=>{
    console.log(res);
    document.getElementById("continuar").style.display = "block";
    document.getElementById("seleccion").style.display="none";
        
     }).catch((error)=>{
    console.log(error);
    });
}

function terminar() {
  window.location.href = '../deezer/index.html';
}

