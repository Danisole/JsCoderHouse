//son la manera que tiene Javascript de controlar las acciones de los usuarios y definir un comportamiento de la pag o aplicacion se produzcan

//JS pormite asignar una funcion a cada uno de los eventos
//manejadores de eventos o event handler asi JS asigna o ejecuta la funcion asosicada al mismo
//JSlo que nos perite hacer es escuchar eventos sobre elementos seleccionados
//cuando escuchamos el evento seleccionado se ejecuta la funcion en respuesta a esta escucha la denominamos EVENT LISTENER

//el metodo addEventListener() permite definir un evento escuchar sobre cualquier elemento sellecionado
//el primer parametro corresponde al nombre del evento y el segundo a la funcion de respuesta

//HOISTING escribas donde escribas el codigo JS lo primero que lee son todas las funciones declaradas 
//una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.

//Evento DOM 

const carrito=[]

const yerbaMate={
    id:1,
    imagen:"../assets/yerbaMate.webp",
    nombre: "Yerba Mate",
    descripcion: "Yerba con palo",
    precio: 899.0
}

let tarjetas= document.getElementById("tarjetas")
tarjetas.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src=${yerbaMate.imagen} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${yerbaMate.nombre}</h5>
        <p class="card-text">${yerbaMate.descripcion}</p>
        <p class="card-text">${yerbaMate.precio}</p>
        <button href="#" id="miBoton" class="btn btn-primary">Comprar</button>
    </div>
    </div>
`

let miBoton = document.getElementById("miBoton")

//opcion1

// miBoton.addEventListener("click", interactuar);

// function interactuar(){
//     alert("agregaste la yerba al carrito")
// }

//opcion 2

miBoton.onclick=(e)=>{
    e.preventDefault()
    console.log("agregaste la yerba al carrito")
    carrito.push(yerbaMate)
    console.table(carrito) //muestra el contenido dentro de la funcion 

}
//eventos del mousse

//Mousedown/mousseup oprime o suelta el boton
//mousseOver/mousseOut el puntero esta sobre o sale del evento
//mousseMove movimiento del mousse activa el evento
//click al hacer click se activa el evento

miBoton.onmouseover=()=>{
    console.log("queres comprar yerba bro")
    miBoton.className="btn btn-danger"
}

miBoton.onmouseout=()=>{
    miBoton.className="btn btn-primary"
}

//Eventos del tecado

let campoNombre=document.getElementById("nombre")
let campoEdad = document.getElementById("edad")

campoEdad.onkeydown=()=>{
    console.log("presionaste una tecle")
}

campoNombre.onkeyup=()=>{
    console.log("soltaste una tecla")
}

//evento change

//cuando pones el foco en un imput al cambiar el foto detecta q algo cambio

campoEdad.onchange=()=>{

    console.log("cambio el contenido del campo edad")
    console.log("contenido actualizado " + campoEdad.value +" veces")
}
 //change se activa cuando se detecta un cambio en el valor del elemento EJ cuando se escribe no hay cambio pero cuando se pasa a otra seccion de la aplicacion ocurre el mismo

campoNombre.oninput=()=>{
    if(isNaN(campoNombre.value)){ //es un no numero no es un numero
        campoNombre.style.color="black"
    }else{
        campoNombre.style.color="red"
    }
}

//evento SUBMIT

//se activa cuando el formulario es enviado
//se usa para validar el formulario antes de ser enviado al servidor o bien para abortar el envio
 //el objeto event tiene un metodo propio q es preventDefault 

 let formulario = document.getElementById("formulario")
 formulario.addEventListener("submit", validarFormulario)

 function validarFormulario(e){
    
    if(campoNombre.value ==""){
        e.preventDefault()
        alert("campo vacio")
    }else if(campoEdad.value < 1){
        alert("ingrese edad valida")
    }else if(!isNaN(campoNombre.value)){
        alert("no puede ser un numero")
    }
    
 }
//segun el navegador podes usar la propíedad keycode o which
function capturarEnter(e){
    if(e.keycode==13 || e.which==13){
        alert("presionaste la tecla enter")
    }
}

//Evento de clipboar
//cuando una persona copia un texto de un blog x ej
let texto = document.getElementsByClassName("textoP")
//textos es un array si o si
texto[0].addEventListener("copy", imprimirAlertaDeCopia)

function imprimirAlertaDeCopia(){
    alert("texto copiado con exito usalo para el bien!")
}

