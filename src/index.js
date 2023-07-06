/* HOME */

//PINTAR CANCIONES EN HOME ----------------
let searchCancion = document.getElementById('searchCancion')
searchCancion.addEventListener('keyup',function(e){
   /*  console.log(searchCancion.value); */
    traerCanciones(searchCancion.value)
})

const listaCancionesHTML = document.getElementById('listaCanciones')
let listaCanciones = []

async function traerCanciones(busqueda = null) {

    try {
      const response = await fetch('http://localhost:8080/cancion/get/all');
      const canciones = await response.json();
      listaCanciones = canciones.reverse();
    } catch (error) {
      console.log('Tuvimos problemas para traer datos');
    }
    if(listaCanciones.length != 0){
        if(busqueda == null){
            listaCancionesHTML.innerHTML = ''

            for(let cancion of listaCanciones){
                listaCancionesHTML.innerHTML += 
                '<article class="cancion__target" id='+cancion.id+'>'+
                '<h3 id='+cancion.idcancion+'>'+cancion.nombre+'</h3>'+
                '<p id='+cancion.idcancion+'>'+cancion.autor+'</p>'+
                '</article>'
            }
        }else{
            listaCancionesHTML.innerHTML = ''
            let listaCancionesFiltrada = []
            listaCanciones.filter(cancion => {
                if(cancion.nombre.toLowerCase().includes(busqueda.toLowerCase()) || cancion.autor.toLowerCase().includes(busqueda.toLowerCase()) || cancion.letra.toLowerCase().includes(busqueda.toLowerCase()) ){
                    listaCancionesFiltrada.push(cancion)
                }
            })
            if(listaCancionesFiltrada.length == 0){
                listaCancionesHTML.innerHTML = '<p>¡Ups! No hemos encontrado lo que buscas</p>'
            }
            /* console.log(listaCancionesFiltrada); */
            for(let cancion of listaCancionesFiltrada){
                listaCancionesHTML.innerHTML += 
                '<article class="cancion__target" id='+cancion.id+'>'+
                '<h3 id='+cancion.idcancion+'>'+cancion.nombre+'</h3>'+
                '<p id='+cancion.idcancion+'>'+cancion.autor+'</p>'+

                '</article>'
            }
        }
    }
  }
traerCanciones()


let listaAcordes = []
async function traerAcordes(){
    await fetch('http://localhost:8080/acorde/get/all').then(data =>{ 
        return data.json()
    })
    .then(acordes =>{
            listaAcordes = acordes
    })
    .catch(err =>{
        console.log('tuvimos problemas para traer datos');
    })
}
traerAcordes()


let listaPulsadas = []
async function traerPulsadas(){
    await fetch('http://localhost:8080/pulsada/get/all').then(data =>{ 
        return data.json()
    })
    .then(pulsadas =>{
        listaPulsadas = pulsadas
    })
    .catch(err =>{
        console.log('tuvimos problemas para traer datos');
    })
}
traerPulsadas()


let listaPosiciones = []
async function traerPosiciones(){
    await fetch('http://localhost:8080/posicion/get/all').then(data =>{ 
        return data.json()
    })
    .then(Posiciones =>{
        listaPosiciones = Posiciones
    })
    .catch(err =>{
        console.log('tuvimos problemas para traer datos');
    })
}
traerPosiciones()


let ListaAcordesCancion = []
async function traerAcordesCancion(id){
    await fetch('http://localhost:8080/posicion/filtro/'+id).then(data =>{ 
        return data.json()
    })
    .then(listaAcordes =>{
        listaAcordes.forEach(element => {
            ListaAcordesCancion.push(Object.assign({}, element))
        });
    })
    .catch(err =>{
        console.log('tuvimos problemas para traer datos');
    })
/*     console.log(ListaAcordesCancion); */
}
///PINTAR CANCIONES EN HOME ----------------
function borrarCancion(id){
    let borrarCancionprompt 
    Swal.fire({
        title: '¿Seguro quieres eliminar esta canción?',
        text: "No podras recuperar esta información",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Estoy seguro'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch('http://localhost:8080/cancion/delete/'+id,{
            method:'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
                }
        })
        .then(x =>{
            let timerInterval
            Swal.fire({
            title: 'Guardando',
            timer: 800,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then(y =>{

                modalVerCancion.style.display = "none";
                traerCanciones()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Canción eliminada',
                    showConfirmButton: false,
                    timer: 700
                  })
            })

        })
          
        }
      })
        

}
//ACCIONAR MODAL VER CANCION ---------------
listaCancionesHTML.addEventListener('click',async function(evento){
    
    let cancion = await accionarVerCancion(evento.target.id)
    let verCancionContent = document.getElementById('verCancionContent')
    if(cancion){
       
        let letras = await pintarAcordesEnTexto(cancion.idcancion,cancion.letra)
        verCancionContent.innerHTML =
        '<article>'+
        '<div class="container__title--cancion"><h2>'+cancion.nombre+'</h2> <input  class="btnBorrar"type="button" title="Borrar cancion"value="🗑️" id="borrar'+cancion.idcancion+'" onClick="borrarCancion()"> </div>'+
        '<p>'+letras+'</p>'+
        '</article>'
        
        await pintarAcordes(cancion.idcancion)  //----------
        document.getElementById('borrar'+cancion.idcancion)
        .addEventListener('click',function(){
            borrarCancion(cancion.idcancion);
        })
    }
})


async function pintarAcordesEnTexto(id,texto){
    let respuesta = ''
    await fetch('http://localhost:8080/posicion/filtro/cancion/'+id)
    .then(x => x.json())
    .then(res =>{
        let arrayTexto = texto.split(' ')
        res.forEach(posicion =>{
            arrayTexto[posicion.posicion] += '<span class="text__float">'+posicion.idacorde.nombre+'</span>'   
        })
       
        respuesta = arrayTexto.join(' ')
    })
    return respuesta
}


/* MOSTRAR ACORDES DE CANCION */
async function pintarAcordes(id){
    
    let listaPulsadasDef = []
    let containerNotas = document.getElementById('container__notas')
    containerNotas.innerHTML = ''
    const response = await fetch('http://localhost:8080/posicion/filtro/'+id)
    const res = await response.json()
        listaPulsadasDef = res
        let listaNombreAcordes = []
        let listaNoRepetida = []
        let listaDeAcordes = []
        let lista = []
        listaPulsadasDef.forEach(e => {
            listaNombreAcordes.push(Object.assign({}, e)[0])
            lista.push(Object.assign({}, e))
        });
        listaNoRepetida = listaNombreAcordes.reduce((acum,x)=>{
            if(acum.indexOf(x) === -1) acum.push(x)
            return acum
        },[])
        listaNoRepetida.forEach(nota => {
            let listaAqui = []
            lista.filter(acorde => {
                if(acorde[0] == nota) listaAqui.push(acorde)
            });
            listaDeAcordes.push(listaAqui)
        });
    /*     console.log(listaAcordes); */

        listaDeAcordes.forEach(acordes => {
            /* console.log(acordes); */
            containerNotas.innerHTML +=
            '<div class="container__acorde">'+
                '<div class="nota">'+
                    '<h2>'+acordes[0][0]+'</h2>'+
                '</div>'+
                '<span class="primer__traste">'+acordes[0][1]+'</span>'+
                '<div class="mastil" id="mastil">'+
                '<div class="traste">'+
                    '<div class="punto" id="'+acordes[0][0]+'24"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'23"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'22"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'21"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'20"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'19"></div>'+
                '</div>'+
                '<div class="traste">'+
                    '<div class="punto" id="'+acordes[0][0]+'18"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'17"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'16"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'15"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'14"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'13"></div>'+
                '</div>'+
                '<div class="traste">'+
                    '<div class="punto" id="'+acordes[0][0]+'12"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'11"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'10"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'9"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'8"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'7"></div>'+
                '</div>'+
                '<div class="traste">'+
                    '<div class="punto" id="'+acordes[0][0]+'6"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'5"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'4"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'3"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'2"></div>'+
                    '<div class="punto" id="'+acordes[0][0]+'1"></div>'+
                 
                '</div>'+
                '</div>'+
                '</div>'
            acordes.forEach(element => {
                document.getElementById(acordes[0][0] + element[2]).style.backgroundColor = "#1e33d4"
            });
        })
    

    
}
/* /MOSTRAR ACORDES DE CANCION */


///ACCIONAR MODAL VER CANCION ---------------

//ACCIONAR MODAL CREAR CANCION --------------

///ACCIONAR MODAL CREAR CANCION --------------
async function filtrarCancion(idCancion){
    return await listaCanciones.filter(cancion => cancion.idcancion === parseInt(idCancion))[0]
}
/* /HOME */
/* CREAR CANCION */

let listaPosicionAcordes = []
async function agregarAcordeALetra(letraCancion){
/*     console.log(letraCancion); */
    let acordeSeleccionado = '';
    acordeSeleccionado = '';
    let listaAcordesHTML = document.getElementById('listaAcordesHTML')
    listaAcordesHTML.innerHTML = ''
    const response = await fetch('http://localhost:8080/acorde/get/all')
    const acordes = await response.json()
    
        acordes.forEach(acorde =>{
            listaAcordesHTML.innerHTML += '<li id="'+acorde.idacorde+'">'+acorde.nombre+'</li>'
        })

    listaAcordesHTML.addEventListener('click',(e)=>{
       acordeSeleccionado =  e.srcElement.innerText
       /*  console.log(acordeSeleccionado); */
    })
    let parrafo = letraCancion.split(' ')
    let containerParrafo = document.getElementById('containerParrafo')
    containerParrafo.innerHTML = ''
    for(let i = 0;i < parrafo.length;i++){
        containerParrafo.innerHTML += '<span id='+ i + '.' + parrafo[i] +'>' + parrafo[i] + ' ' + '</span>';
    }
        containerParrafo.addEventListener('click',(x)=>{
            let datos = x.target.id.split('.')
            //posicion - x.target.id
            //idcancion - cancionCreada.id
            //idacorde - listaAcordes.filter(x =>x.nombre = acordeSeleccionado)
            if(acordeSeleccionado != ''){
                if(x.target.childNodes.length < 2){
                    document.getElementById(x.target.id).innerHTML += '<em class="emClass">'+acordeSeleccionado+'</em>'
                    let posicion = {
                        idposicion:0,
                        posicion:parseInt(x.target.id.split('.')[0]),
                        idcancion:{idcancion:cancionCreada.idcancion},
                        idacorde:{idacorde:listaAcordes.filter(x =>x.nombre == acordeSeleccionado)[0].idacorde}
                    }
                    listaPosicionAcordes.push(posicion)
                    /* console.log(listaPosicionAcordes); */
                }else{
                   /*  if(x.target.id != "containerParrafo"){
                        x.target.children[0].remove()
                    } */
                }
            }else{
                alert('Por favor seleccione un acorde')
            }
        })
}


let btnGuardarCancion = document.getElementById('btnGuardarCancion')
    btnGuardarCancion.addEventListener('click',function(x){
        guardarPosiciones()
    })


function guardarPosiciones(){
    let timerInterval
    Swal.fire({
    title: 'Guardando',
    timer: 800,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
        fetch('http://localhost:8080/posicion/post/all',{
                method:'POST',
                body:JSON.stringify(listaPosicionAcordes),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                  }
            })
            .then(x =>x.json())
            .then(x =>{
                traerCanciones()
            /*     console.log(x)
                console.log("se creo una nueva cancion"); */
                
                modalCrearCancion.style.display = 'none'
                        //aqui actualizar lista canciones
                        containerCrearLetraCancion.style.display = 'block';
                        containerAcordesLetra.style.display = 'none'
                        let tituloInput = document.getElementById('tituloInput')
                        let autorInput = document.getElementById('autorInput')
                        let letraInput = document.getElementById('letraInput')
                        tituloInput.value = ''
                        autorInput.value = ''
                        letraInput.value = ''
            })
             //aqui falta hacer que pasa si no se envio con exito la cancion
            .catch(err =>{console.error(err)})
    }
    })
    
}


let cancionCreada = {}
function crearCancion(){
    let containerCrearLetraCancion = document.getElementById('containerCrearLetraCancion')
    let containerAcordesLetra = document.getElementById('containerAcordesLetra')
    let btnGuardarLetra = document.getElementById('btnGuardarLetra')
    let btnVolverLetra = document.getElementById('btnVolverLetra')
    let tituloInput = document.getElementById('tituloInput')
    let autorInput = document.getElementById('autorInput')
    let letraInput = document.getElementById('letraInput')
    tituloInput.value = ''
    autorInput.value = ''
    letraInput.value = ''

    containerAcordesLetra.style.display = 'none'
    acordeAPintar()
    btnGuardarLetra.addEventListener('click',function(){
        if(tituloInput.value != '' && autorInput.value != '' && letraInput.value != '' ){
            containerCrearLetraCancion.style.display = 'none';
            containerAcordesLetra.style.display = 'flex'
            let cancionEnviar = {
                idcancion:0,
                autor:autorInput.value,
                nombre:tituloInput.value,
                letra:letraInput.value
            }
            fetch('http://localhost:8080/cancion/post',{
                method:'POST',
                body:JSON.stringify(cancionEnviar),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                  }
            })
            .then(x =>x.json())
            .then(x =>{
                
                cancionCreada = x
                agregarAcordeALetra(letraInput.value)


            })
             //aqui falta hacer que pasa si no se envio con exito la cancion
            .catch(err =>{console.error(err)})
        }else{
            if(tituloInput.value == ''){
                alert('falta titulo')
            }else if(autorInput.value == ''){
                alert('falta autor')
    
            }else if(letraInput.value == ''){
                alert('falta letra')
            }
        }
    })
    btnVolverLetra.addEventListener('click',function(){
        containerCrearLetraCancion.style.display = 'block';
        containerAcordesLetra.style.display = 'none'
    })
    //aumentar la cantidad maxima de palabras en letra de cancion
}
crearCancion()


function acordeAPintar(){
    let listaAcordesHTML = document.getElementById('listaAcordesHTML')
    listaAcordesHTML.addEventListener('click',function(e){
        console.log(e);
        for(let idCrear = 1;idCrear <= 24;idCrear++){
            document.getElementById('Crear'+idCrear).style.backgroundColor = '#cacaca'
        }
        fetch('http://localhost:8080/pulsada/acorde/get/'+e.srcElement.id)
        .then(x => x.json())
        .then(res =>{
            res.forEach(pulsada => {
                if(pulsada.idacorde.nombre == e.srcElement.innerText){
                    document.getElementById('Crear'+pulsada.pulsada).style.backgroundColor = 'blue'
                }
            });
        })
    })
}

async function actualizarListaAcordes(){
   await traerAcordes()
   return listaAcordes
}
actualizarListaAcordes()
async function borrarAcorde(id){
    console.log(id);
    let borrarAcordeprompt 
    Swal.fire({
        title: '¿Seguro quieres eliminar este acorde?',
        text: "No podras recuperar esta información",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Estoy seguro'
      }).then(async (result) => {
        if (result.isConfirmed) {
            await fetch('http://localhost:8080/acorde/delete/'+id,{
            method:'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
                }
        })
        .then(async (x) =>{
                console.log(x);
              
               
                let timerInterval
            Swal.fire({
            title: 'Guardando',
            timer: 800,
            timerProgressBar: true,
            didOpen: async () => {
                Swal.showLoading()
                
                timerInterval = setInterval(() => {
                }, 100)
            },
            willClose:async() => {
                modalVerAcorde.style.display = "none";
               
                await explorarAcordeAPintar()
                clearInterval(timerInterval)
               
                for(let idVer = 1;idVer <= 24;idVer++){
                    document.getElementById('Ver'+idVer).style.backgroundColor = '#cacaca'
                }
                document.getElementById('acordePintado').innerText = ''
                document.getElementById('primerTrasteAcordePintado').innerText = ''
             
            }
            }).then(x =>{
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Acorde eliminado',
                    showConfirmButton: false,
                    timer: 700
                  })
            })
                
               
                  

            })
            .catch(err =>{
                console.log(err)
            })

          
        }
      })
        


}
async function explorarAcordeAPintar(){
    let listaAcordesVerHTML = document.getElementById('listaAcordesVerHTML')
   
    let acordePintado = document.getElementById('acordePintado')
    let primerTraste = document.getElementById('primerTrasteAcordePintado')
    let containerMastil = document.getElementById('containerMastil')
    listaAcordesVerHTML.innerHTML = ''
    ;(await actualizarListaAcordes()).forEach(acorde =>{
    /* console.log(acorde); */
    listaAcordesVerHTML.innerHTML += '<li id="'+acorde.idacorde+'">'+acorde.nombre+'</li>'
   })
   
    listaAcordesVerHTML.addEventListener('click',function(e){
        if(e.srcElement.id != 'listaAcordesVerHTML'){
            containerMastil.innerHTML = '<input type="button" title="Borrar cancion" class="btnBorrar" value="🗑️" id="borrarAcorde'+e.srcElement.id+'" onClick="borrarAcorde('+e.srcElement.id+')">'
    
            for(let idVer = 1;idVer <= 24;idVer++){
                document.getElementById('Ver'+idVer).style.backgroundColor = '#cacaca'
            }
            acordePintado.innerText = e.srcElement.innerText
            fetch('http://localhost:8080/pulsada/acorde/get/'+e.srcElement.id)
            .then(x => x.json())
            .then(res =>{
                res.forEach(pulsada => {
                    primerTraste.innerText = pulsada.idacorde.primertraste
                    if(pulsada.idacorde.nombre == e.srcElement.innerText){
                        document.getElementById('Ver'+pulsada.pulsada).style.backgroundColor = 'blue'
                    }
                });
            })
        }
    })
}
    explorarAcordeAPintar()


/* /CREAR CANCION */
//ACCIONAR MODALES
let modalVerCancion = document.getElementById("myModal-VerCancion");
let btnVerCancion = document.getElementById("myBtn-VerCancion");
let spanVerCancion = document.getElementsByClassName("close")[0];
async function accionarVerCancion(idCancion) {
   
let cancion = await filtrarCancion(idCancion)
await traerAcordesCancion(idCancion)
let timerInterval
Swal.fire({
title: 'Cargando',
timer: 800,
timerProgressBar: true,
didOpen: async() => {
  
   Swal.showLoading()
   
   timerInterval = setInterval(() => {
   }, 100)
},
willClose: () => {
    clearInterval(timerInterval)
    modalVerCancion.style.display = "block";

}
})
return cancion


  
    
    
}


spanVerCancion.onclick = function() {
  modalVerCancion.style.display = "none";
}


var modalVerAcorde = document.getElementById("myModal-verAcorde");
var spanVerAcorde = document.getElementsByClassName("close4")[0];

spanVerAcorde.onclick = function() {
    modalVerAcorde.style.display = "none";
  }
  function accionarVerAcorde() {
    accionarMenu()
    modalVerAcorde.style.display = "block";
    //aqui falta limpiar los campos
  }
/* ------------------------------------------------------------- */
var modalCrearCancion = document.getElementById("myModal-CrearCancion");

var btnCrearCancion = document.getElementById("myBtn-CrearCancion");
var spanCrearCancion = document.getElementsByClassName("close2")[0];
function accionarCrearCancion() {
    accionarMenu()

  modalCrearCancion.style.display = "block";
  //aqui falta limpiar los campos
}


spanCrearCancion.onclick = function() {
  modalCrearCancion.style.display = "none";
}


/* ---------------- */
let mastilCrearAcorde = document.getElementById('mastilCrearAcorde')
let nombreAcordeCrear = document.getElementById('nombreAcordeCrear')
let primerTrasteCrear = document.getElementById('primerTrasteCrear')
let listaPulsadasAcorde = []
mastilCrearAcorde.addEventListener('click',function(e){
    //hacer que no se multipliquen los obj metidos en listapUSALDAAcordes
    /* console.log(e.target.id); */
    if(nombreAcordeCrear.value != '' && primerTrasteCrear.value != ''){
        document.getElementById(e.target.id).style.backgroundColor = 'blue'
        listaPulsadasAcorde.push(e.target.id.replace('crearAcorde',''))
    }
})


function resetCamposCrearAcorde(){
    listaPulsadasAcorde = []
    nombreAcordeCrear.value = ''
    primerTrasteCrear.value = '1'
    for(let i = 1;i<= 24;i++){
        document.getElementById('crearAcorde'+i).style.backgroundColor = '#cacaca';
    }
}


let btnLimpiarAcorde = document.getElementById('btnLimpiarAcorde')
btnLimpiarAcorde.addEventListener('click',function(){
    resetCamposCrearAcorde()
})


function guardarAcorde(){
    let objAcorde = {
        idacorde:0,
        nombre:nombreAcordeCrear.value,
        primertraste:parseInt(primerTrasteCrear.value),
    }
    /* console.log(objAcorde); */
    fetch('http://localhost:8080/acorde/post',{
                method:'POST',
                body:JSON.stringify(objAcorde),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                  }
            })
            .then(x =>x.json())
            .then(x =>{
               /*  console.log(x) */
                console.log("se creo un nuevo acorde");
                let idAcordeNuevo = x.idacorde
                let listaPulsadasGuardar = []
                listaPulsadasAcorde.forEach(pulsada =>{
                    let objPulsada = {
                        idpulsada:0,
                        pulsada:parseInt(pulsada),
                        idacorde:{
                            idacorde:idAcordeNuevo
                        }
                    }
                    listaPulsadasGuardar.push(objPulsada);
                })
               /*  console.log(listaPulsadasGuardar); */
                fetch('http://localhost:8080/pulsada/post/all',{
                    method:'POST',
                    body:JSON.stringify(listaPulsadasGuardar),
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                      }
                })
                .then(y => y.json())
                .then(res =>{
                    
                    let timerInterval
                    Swal.fire({
                    title: 'Guardando',
                    timer: 800,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                    }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        
                        resetCamposCrearAcorde()
                        explorarAcordeAPintar()
                        traerAcordes()
                        traerCanciones()
                        modalCrearAcorde.style.display = 'none'
                        //aqui actualizar lista acordes
                    }
                    })
                })
                .catch(err => {console.log(err)})

            })
             //aqui falta hacer que pasa si no se envio con exito la cancion
            .catch(err =>{console.error(err)})

}


let btnGuardarAcorde = document.getElementById('btnGuardarAcorde') 
btnGuardarAcorde.addEventListener('click',function(){
   guardarAcorde()
})


var modalCrearAcorde = document.getElementById("myModal-CrearAcorde");
var spanCrearAcorde = document.getElementsByClassName("close3")[0];
function accionarCrearAcorde() {
    accionarMenu()

  modalCrearAcorde.style.display = "block";
  //aqui falta limpiar los campos
}


spanCrearAcorde.onclick = function() {
  modalCrearAcorde.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalCrearAcorde) {
    modalCrearAcorde.style.display = "none";
    modalVerCancion.style.display = "none";
    modalCrearCancion.style.display = "none";

  }
}

function accionarMenu(){
    if(containerMenu.className.includes('mostrarMenu')){
        containerMenu.classList.toggle('ocultarMenu')
    }else{
        containerMenu.classList.toggle('mostrarMenu')
    }
}
let containerMenu = document.getElementById('containerMenu')
let btnMenu = document.getElementById('btnMenu')
btnMenu.addEventListener('click',function(){
    accionarMenu()
})


containerMenu.addEventListener('click',function(x){
  /*   console.log(x.target.childNodes[0].nodeValue); */
    if(x.target.childNodes[0].nodeValue == 'Crear cancion'){
        accionarCrearCancion()
    }
    else if(x.target.childNodes[0].nodeValue == 'Crear acorde'){
        accionarCrearAcorde()
    }
    else if(x.target.childNodes[0].nodeValue == 'Explorar acordes'){
        accionarVerAcorde()
    }
})
///ACCIONAR MODALES
