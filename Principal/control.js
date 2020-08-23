var razones=[
    {
        titulo:'Toda la música en tu bolsillo.',
        descripcion:'Encuentra tus futuras pasiones y tus canciones favoritas de siempre entre 56 millones de canciones.'
    },
    {
        titulo:'¿No hay wifi? No pasa nada.',
        descripcion:'Con Deezer Premium, no necesitas estar conectado para disfrutar de tus canciones favoritas.'
    },
    {
        titulo:'Crea tu propia biblioteca musical.',
        descripcion:'Crea playlists con millones de canciones y llévalas contigo allá donde vayas.'
    },
    {
        titulo:'Diseñado a tu medida.',
        descripcion:'Flow se entera de lo que te gusta y de lo que no. Descubre tu propia banda sonora.'
    }
];

var ofertas=[
    {
        titulo:'Deezer Free',
        precio:'$0.00',
        tiempo:'/mes',
        descripcion1:'<i class="fas fa-check"></i> 56 millones de c...',
        descripcion2:'<i class="fas fa-check"></i> Reproducción ale...',
        descripcion3:'<i class="fas fa-times"></i> Sin anuncios',
        descripcion4:'<i class="fas fa-times"></i> Pasa canciones ...',
        descripcion5:'<i class="fas fa-times"></i> Modo sin conex...',
        descripcion6:'<i class="fas fa-times"></i> 6 cuentas',
        boton:'Regristrarse',
        color:'#FFFFFF',
        p1:'',
        p2:'',
        colorboton:'#8E8E94',
        colortexto:'',
        colorul:'#A0A0A0',
        colorenlace:''
    },
    {
        titulo:'Deezer Premium',
        precio:'$5.99',
        tiempo:'durante 3 meses*',
        descripcion1:'<i class="fas fa-check"></i> 56 millones de c...',
        descripcion2:'<i class="fas fa-check"></i> Sin anuncios',
        descripcion3:'<i class="fas fa-check"></i> Pasa canciones ...',
        descripcion4:'<i class="fas fa-check"></i> Modo sin conex...',
        descripcion5:'<i class="fas fa-times"></i> 6 cuentas',
        descripcion6:'',
        boton:'Suscribirse',
        color:'#2D96C8',
        p1:'',
        p2:'Mas informacion',
        colorboton:'#EF5466',
        colortexto:'#FFFFFF',
        colorul:'#FFFFFF',
        colorenlace:'white'

    },
    {
        titulo:'Deezer Family',
        precio:'$8.99',
        tiempo:'/mes',
        descripcion1:'<i class="fas fa-check"></i> 56 millones de c...',
        descripcion2:'<i class="fas fa-check"></i> Sin anuncios',
        descripcion3:'<i class="fas fa-check"></i> Pasa canciones ...',
        descripcion4:'<i class="fas fa-check"></i> Modo sin conex...',
        descripcion5:'<i class="fas fa-check"></i> 6 cuentas',
        descripcion6:'',
        boton:'Probar ahora',
        color:'#FFFFFF',
        p1:'1 mes gratis',
        p2:'Mas informacion',
        colorboton:'#EF5466',
        colortexto:'',
        colorul:'#A0A0A0',
        colorenlaces:'#2D96C8'
    }
];
var terminos=[
    {
        titulo:'DEEZER',
        termino1:'Ofertas',
        termino2:'Ventajas',
        termino3:'Dispositivos',
        termino4:'Ayuda',
        termino5:'Quiénes somos',
        termino6:'Ofertas de empleo'
    },
    {
        titulo:'EXPLORAR',
        termino1:'Todos los canales',
        termino2:'Charts',
        termino3:'Lanzamiento más popular',
        termino4:'Nuevos lanzamientos',
        termino5:'Quédate en casa',
        termino6:''
    },
    {
        titulo:'¿QUIÉNES SOMOS?',
        termino1:'Sellos y artistas',
        termino2:'Desarrolladores',
        termino3:'Prensa',
        termino4:'',
        termino5:'',
        termino6:''
    },
    {
        titulo:'LEGAL',
        termino1:'Aviso legal',
        termino2:'Condiciones generales de uso',
        termino3:'Política de privacidad',
        termino4:'Cookies',
        termino5:'',
        termino6:''
    },


];



function collapse() {
    console.log('boton 1 funciona')
    document.getElementById("cambiarcollapse").innerHTML=
    `
    <span><i id="icono" class="fas fa-times" onclick="returncollapse()"></i></span>
    `
}
function returncollapse() {
    console.log('boton2funciona')
    document.getElementById("cambiarcollapse").innerHTML=
    `
    <span class="navbar-toggler-icon" onclick="collapse()"></span>
    `
}

function porqueelegirdeezer() {
    razones.forEach(function(razon) {
        document.getElementById('comienzo').innerHTML+=
        `
        <div id="primero" class="porquedeezer col-xl-6 col-lg-6">
              <h3>${razon.titulo}</h3>
              <p>${razon.descripcion}</p>
            </div>
        `
    });
}
porqueelegirdeezer();

function generaroferas() {
    ofertas.forEach(function(oferta) {
        document.getElementById('catalogo').innerHTML+=
        `
        <div id="descripcion" style="width:246px ; background-color:${oferta.color} ;">
        <div id="cajainterna">
        <h3>${oferta.titulo}</h3>
        <p id="precio">${oferta.precio}</p>
        <p id="mes">${oferta.tiempo}</p>
        <ul style="color:${oferta.colorul} ;">
          <li>${oferta.descripcion1}</li>
          <li>${oferta.descripcion2}</li>
          <li>${oferta.descripcion3}</li>
          <li>${oferta.descripcion4}</li>
          <li>${oferta.descripcion5}</li>
          <li>${oferta.descripcion6}</li>
        </ul>
        <p id="p1" style="color:${oferta.colorenlaces} ;">${oferta.p1} </p>
        <button id="botonoferta" type="button" style="background-color:${oferta.colorboton} ; ">${oferta.boton}</button>
        <a href="" style="color:${oferta.colorenlaces} ;">${oferta.p2}</a>
        </div>
        </div>
        `
    });
}
generaroferas();

function generarterminos() {
    terminos.forEach(function(termino) {
        document.getElementById('condiciones').innerHTML+=
        `
        <div id="lista" class="col-xl-2 col-lg-2"> 
        <h4>${termino.titulo}</h4>
        <ul>
          <li><a href="">${termino.termino1}</a></li>
          <li><a href="">${termino.termino2}</a></li>
          <li><a href="">${termino.termino3}</a></li>
          <li><a href="">${termino.termino4}</a></li>
          <li><a href="">${termino.termino5}</a></li>
          <li><a href="">${termino.termino6}</a></li>
        </ul>
        </div>
        `
    });
    
}
generarterminos();


function nuevapagina() {

    window.location.href = '../segundaPagina/frontend/correo/correo.html' ;
}
/*function pulsar(indice) {
    console.log("boton funciona", indice);
    console.log(terminos[indice].termino1);

    document.getElementById('lista').innerHTML+=
    `
    <ul>
    <li> <a href="">${terminos[indice].termino1}</a> </li>
    <li> <a href="">${terminos[indice].termino2}</a> </li>
    <li> <a href="">${terminos[indice].termino3}</a> </li>
    <li> <a href="">${terminos[indice].termino4}</a> </li>
    <li> <a href="">${terminos[indice].termino5}</a> </li>
    <li> <a href="">${terminos[indice].termino6}</a> </li>
  </ul> 
     
    `
    
    
}
pulsar();*/