


/* HOME */
//PINTAR CANCIONES EN HOME ----------------
const listaCancionesHTML = document.getElementById('listaCanciones')

let  listaCanciones = [
    {
        id:1,
        titulo:'Titulo Cancion',
        autor:'Marlong mendoza',
        letra:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus aspernatur enim eos. Aspernatur eveniet quos saepe maxime nam vero voluptatibus dolores, commodi eligendi odit ipsum iste possimus itaque magnam laborum provident quidem eius quisquam at eum laudantium esse rerum accusamus officia? Minima ea possimus similique asperiores harum exercitationem porro! Voluptates.',
        puntosacordes:[
            {
                posicionpalabra:3,
                acorde:4
            },
            {
                posicionpalabra:7,
                acorde:2
            },
            {
                posicionpalabra:12,
                acorde:1
            }
        ]
    },
    {
        id:2,
        titulo:'Titulo Cancion 2',
        autor:'Marlong mendoza',
        letra:'adipisicing elit. Delectus aspernatur enim eos. Aspernatur eveniet quos saepe maxime nam vero voluptatibus dolores, commodi eligendi odit ipsum iste possimus itaque magnam laborum provident quidem eius quisquam at eum laudantium esse rerum accusamus officia? Minima ea possimus similique asperiores harum exercitationem porro! Voluptates.',
        puntosacordes:[
            {
                posicionpalabra:1,
                acorde:5
            },
            {
                posicionpalabra:8,
                acorde:1
            },
            {
                posicionpalabra:10,
                acorde:4
            }
        ]
    },
    {
        id:3,
        titulo:'Titulo Cancion 3',
        autor:'Marlong mendoza',
        letra:' Aspernatur eveniet quos saepe maxime nam vero voluptatibus dolores, commodi eligendi odit ipsum iste possimus itaque magnam laborum provident quidem eius quisquam at eum laudantium esse rerum accusamus officia? Minima ea possimus similique asperiores harum exercitationem porro! Voluptates.',
        puntosacordes:[
            {
                posicionpalabra:3,
                acorde:6
            },
            {
                posicionpalabra:2,
                acorde:1
            },
            {
                posicionpalabra:13,
                acorde:1
            }
        ]
    },
]  

for(let cancion of listaCanciones){
    listaCancionesHTML.innerHTML += 
    '<article class="cancion__target" id='+cancion.id+'>'+
        '<h3 id='+cancion.id+'>'+cancion.titulo+'</h3>'+
        '<p id='+cancion.id+'>'+cancion.autor+'</p>'+
    '</article>'
}
///PINTAR CANCIONES EN HOME ----------------
//ACCIONAR MODAL VER CANCION ---------------

listaCancionesHTML.addEventListener('click',function(evento){
    let cancion = accionarVerCancion(evento.target.id)
    let verCancionContent = document.getElementById('verCancionContent')
    let asideCancionContent = document.getElementById('asideCancionContent')
    verCancionContent.innerHTML =
        '<article>'+
        '<h2>'+cancion.titulo+'</h2>'+
        '<p>'+cancion.letra+'</p>'+
        '</article>'+
        '<aside>'+
            '<ul>'+
                cancion.titulo
            /*  for(let acorde of cancion.puntosacordes){
                    '<li>ACORDE </li>'
                    console.log(acorde.acorde);
                } */
            '</ul>'+
        '</aside>' 
})

///ACCIONAR MODAL VER CANCION ---------------
//ACCIONAR MODAL CREAR CANCION --------------
const targetCrearCancionHTML = document.getElementById('targetCrearCancion')
targetCrearCancionHTML.addEventListener('click',function(evento){
    accionarCrearCancion()
})
///ACCIONAR MODAL CREAR CANCION --------------

function filtrarCancion(idCancion){
    return listaCanciones.filter(cancion => cancion.id === parseInt(idCancion))[0]
}
/* /HOME */
/* CREAR CANCION */
let containerCrearLetraCancion = document.getElementById('containerCrearLetraCancion')
let containerAcordesLetra = document.getElementById('containerAcordesLetra')
let btnGuardarLetra = document.getElementById('btnGuardarLetra')
containerAcordesLetra.style.display = 'none'
btnGuardarLetra.addEventListener('click',function(){
    containerCrearLetraCancion.style.display = 'none';
    containerAcordesLetra.style.display = 'block'

})
let btnVolverLetra = document.getElementById('btnVolverLetra')

btnVolverLetra.addEventListener('click',function(){
    containerCrearLetraCancion.style.display = 'flex';
    containerAcordesLetra.style.display = 'none'

})
/* CREAR CANCION */




//ACCIONAR MODALES
var modalVerCancion = document.getElementById("myModal-VerCancion");
var btnVerCancion = document.getElementById("myBtn-VerCancion");
var spanVerCancion = document.getElementsByClassName("close")[0];

function accionarVerCancion(idCancion) {
  modalVerCancion.style.display = "block";
  return filtrarCancion(idCancion)
}
spanVerCancion.onclick = function() {
  modalVerCancion.style.display = "none";
  console.log("hueva");
}
window.onclick = function(event) {
  if (event.target == modalVerCancion) {
    modalVerCancion.style.display = "none";
  }
}
/* ------------------------------------------------------------- */
var modalCrearCancion = document.getElementById("myModal-CrearCancion");
var btnCrearCancion = document.getElementById("myBtn-CrearCancion");
var spanCrearCancion = document.getElementsByClassName("close2")[0];

function accionarCrearCancion() {
  modalCrearCancion.style.display = "block";
  //aqui falta limpiar los campos
}
spanCrearCancion.onclick = function() {
  modalCrearCancion.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalCrearCancion) {
    modalCrearCancion.style.display = "none";
  }
}
///ACCIONAR MODALES













//Le pasamos un texto y nos devolvera la posicion y la palabra que seleccionemos

/* 
let parrafoText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit';
    let parrafo = parrafoText.split(' ')
let containerParrafo = document.getElementById('containerParrafo')

for(let i = 0;i < parrafo.length;i++){
    containerParrafo.innerHTML += '<span id='+ i + '.' + parrafo[i] + ' name=' + parrafo[i] + 'dir="2">' + parrafo[i] + ' ' + '</span>';
}
acorde = 'em'
containerParrafo.addEventListener('click',(x)=>{
    let datos = x.target.id.split('.')
   document.getElementById(x.target.id).innerHTML += '<em>'+acorde+'</em>'
})
 */
