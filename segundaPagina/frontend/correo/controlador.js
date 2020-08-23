var sexo ;
var edad ;
function select1() {
    var valor= document.getElementById("select1")
    sexo = valor.options[valor.selectedIndex].text;
    
}
function select2() {
    var valor=document.getElementById("select2");
    edad = valor.options[valor.selectedIndex].text;

}


function registrarse() {
   
    console.log(sexo);
    console.log(edad);
    let nuevo = {
        "correo":document.getElementById("correo").value,
        "nombre":document.getElementById("nombre").value,
        "password":document.getElementById("password").value,
        "sexo":sexo,
        "edad":edad,

    }


    axios({
        url:"../../backend/api/usuario.php",
        method:"POST",
        responseType:"json",
        data:nuevo
    }).then((res)=>{
         console.log(res);
        if(res.data.codigoUsuario==0){
            window.location.href = '../Artistas/artistas.html' ;

        }else{
            document.getElementById("error").style.display= 'block';
            document.getElementById("error").innerHTML=res.data.mensaje ; 
        }
    
    }).catch((error)=>{
        console.error(error);
    });
} 

function obtenerusuario() {
    axios({
        url:"../../backend/api/usuario.php",
        method:"GET",
        responseType:"json",
    }).then((res)=>{
        console.log(res);
    }).catch((error)=>{
        console.error(error);
    });
}
obtenerusuario();