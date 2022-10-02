//storage es el espacio de almacenamiento en el navegador

//localStorage se almacena en el navegador de forma indefinida
//para almacenar la informacion se utiliza setItem dupla clave valor el primero es el nombre con el cual lo vamos a almacenar y el otro el dato
//localStorage.setItem("bienvenida", "hola coders")
//localStorage.setItem("esValido", true)
//localStorage.setItem("unNumero", 23)

localStorage.setItem("usuario", "Neo2022");
localStorage.setItem("envio", true)

let usuarioActual=localStorage.getItem("usuario")
console.log(usuarioActual)
let esEnvioADomicilio=localStorage.getItem("envio")
console.log(esEnvioADomicilio)
console.log(typeof(esEnvioADomicilio))


//sesionStorage igual que el localStorage con la diferencia de la persistencia en el navegador de los datos hasta que el usuario cierra la ventana 
//otra pestaña con el mismo contenido tendra diferente sesion

sessionStorage.setItem("color", "negro")//agrega un elemento con clave valor
let color = sessionStorage.getItem("color", "negro")//lo trae de vuelta a la consola
sessionStorage.removeItem("color")//remueve un item especifico
sessionStorage.clear() //limpia toda la consola de sesion
console.log(color)

//diapo 22
//ciclo para recorrer claves almacenadas en el objeto localStorage

for(let i=0; i<localStorage.length; i++){//ciclo for itera dentro de todos los elemetos del localStorage y KEY accede a los valores
    let clave = localStorage.key(i)
    console.log("clave " + clave)
    console.log("valor " + localStorage.getItem(clave))

}
//solicitar al usuario 3 precios calculamos la suma de los mismos
//aplicamos 10% de descuento y guardamos el resultado en el localStorage
//con la clave efectivo

// function sumaConIva(){
//     let suma=0;

//     for (let i=0; i<3;i++){
//     let precio= parseInt(prompt("ingrese un precio"));
//     suma+=precio
//     console.log(suma)
//     let laSuma= (suma * 1.21).toFixed(2)

//     localStorage.setItem("efectivo", laSuma)
//     }
// }
// sumaConIva()


// let num1=parseInt(prompt("ingrese numero"))
// let num2=parseInt(prompt("ingrese numero"))
// let num3=parseInt(prompt("ingrese numero"))

// let suma= num1+num2+num3

// sumaConIva=(suma*1.21).toFixed(2)
// localStorage.setItem("efectivo", sumaConIva)

//si queremos almacenar objetos en el storage hay que tener en cuenta que tanto clave como valor se almacenan como string no como objetos
//no podemos guardar un objeto literal hay que transformarlo a traves de Json

//JSON javascript Objet Notation 
//para guardar objetos

//para almacenar un objeto liteal es necesario pasarlo a Jason 
//a traves de stringify o "cadenizar" los datos lo que hace es pasar el objerto a una cadena necesario para poder almacenarlo sino salta objet = objet


const objero1 = {id:1, nombre:"casa"}

const enJson= JSON.stringify(objero1)
localStorage.setItem("objeto1", enJson)

//como podemos traer un objeto que esta en json en forma de string
//a traves del metodo parse convierte de string a objeto para que puedan ser usadas sus propiedades


const traidoDelStorage = localStorage.getItem("objeto1")
console.log(traidoDelStorage)
console.log(typeof(traidoDelStorage))

const deJason = JSON.parse(traidoDelStorage)
console.log(deJason)

//Diapo 37
const productos = [
    {id: 1, producto:"arroz", precio:200},
    {id: 2, producto:"fideo", precio:140},
    {id: 3, producto:"pan", precio:120},
    {id: 4, producto:"flan", precio:450},
]

const guardarLocal = (clave, valor)=>{localStorage.setItem(clave, valor)}

//opcion 1 guardar los productos con un ciclo for para poder individualizarlos 
//se guarda uno x uno con la clave del ID

// for(const producto of productos){
//     guardarLocal(producto.id, JSON.stringify(producto))
// }

//opcion 2 guarda tod el array completo
// guardarLocal("listaProductos", JSON.stringify(productos))

//usamos los datos almacenados en el local para crear un objeto con un constructor 

// class Producto {
//     constructor(obj){
//         this.nombre= obj.producto.toUpperCase();
//         this.precio= parseFloat(obj.precio)
//     }
//     sumaIva(){
//         this.precio = this.precio * 1.21;
//     }
// }

//obtenemos el listado de los productos almacenados 
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
// const productos2=[];

// console.log(almacenados)
//iteramos almacenados con for.. of para trasformar todos sus objetos en tipo producto
// for(const objeto of almacenados)
//     productos2.push(new Producto(objeto))

// console.log(productos2)
//ahora tenemos objetos productos y podemos usar sus metodos
// for(const producto of productos2)
//     producto.sumaIva()

//puede usarse para recuperar datos del local relacionados a la navegacion del usuario ej ultima sesion de login o estado del carrito de compras
//para esto pensamos en inicializar las variables de nuestra app consultando el storage al momento del inicio


//modo oscuro o claro
let modo;
if(localStorage.getItem("modo")){
    modo=localStorage.getItem("modo")
    
}else{
    modo="light"
    
}

let principal=document.getElementById("principal")
let boton = document.getElementById("mode")

//*¨****

document.body.className=modo;
principal.className="position-relative overflow-hidden p3 p-md-5 m-md-5 text-center "+modo
localStorage.setItem("modo", modo)
boton.innerText= modo + " MODE";

boton.onclick=()=>{
    if(modo == "light"){
        document.body.className="dark";
        boton.innerText="Light MODE";
        modo="dark"
        principal.className="position-relative overflow-hidden p3 p-md-5 m-md-5 text-center dark "
    }else{
        document.body.className="light";
        boton.innerText="Dark MODE";
        modo="light"
        principal.className="position-relative overflow-hidden p3 p-md-5 m-md-5 text-center light "
    }
    localStorage.setItem("modo", modo)

}
//los datos en formato JSON se pueden almacenar en archivos .json externos
//es solo un formato de datos
//una coma o un punto mal ubicado puede producri que un archivo json no funcione
//javascript las propiedades del objeto pueden no estar entre comillas en json solos las cadenas entre comillas pueden ser utilizadas como propiedades
 




