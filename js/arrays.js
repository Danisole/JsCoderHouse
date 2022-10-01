//ARRAY

//un array es un tipo de dato que sirve para almacenar valores de una lista

// puede ser una coleccion de objetos strings o listas de listas

//los valores pueden ser distintos y se pueden agregar o quitar en todo momento

//tienen un indice y siempre comienzan en 0

// declarar un array se sugiere comenzar con la palabra const como asi tb a los objetos

// const arrayA = []
// const arrayB = [1,2,3]
// const arrayC = ["c", "B", "A"]
// const arrayD = [true, false, true]
// const arrayE = [1, true, "C"]

// acceso a los arrays

// console.log(arrayC[2])
// let resultadoSuma = arrayB[0] + arrayB[2]
// console.log(resultadoSuma)

//diapo 15

// const listaViaje = ["pasaporte", "medias", "sombrero", "cepillo de dientes", "dinero"]

// console.log(listaViaje)
// console.log("a mi viaje no debo olvidar " + listaViaje[4]+ " tampoco " + listaViaje[0]+ " y "+ listaViaje[3])

// for(let i=0; i<listaViaje.length; i++){
//     console.log(listaViaje[i])// la i actua ciclando como la posicion o index del array asi lo podemos recorrer entero

// }

// console.log("cual es la longitud del array "+ listaViaje.length)

//un array es una estructura dinamica por lo que debe ir cambiando para eso utilizamos la propiedad lenght para saber su longitud

//el metodo push nos permite incorporar nuevos elementos al array al final del mismo

// listaViaje.push("lentes de sol", "ojotas")
// console.log(listaViaje)
// console.log("la longitud del array es "+listaViaje.length)

// metodo unshift agrega un elemento al comiento pueden ser mas de uno

// listaViaje.unshift("espejo", "maquillaje")
// console.log(listaViaje)

//podemos quitar elementos con pop opuesto a push o sea elimina el ultimo elemento y el metodo shift que es el contrario a unshift que quita los primeros

// listaViaje.pop()

// console.log(listaViaje)

// listaViaje.shift()

// console.log(listaViaje)

//metodo splice() se colocan al final siempre los elementos 

// puede eliminar uno o varios elementos en cualquier posicion se le dan dos parametrso el primero es el indice y el segundo la cantidad de elementos desde ese indice que se quiere eliminar
//listaViaje.splice(2, 3)// es el indice 3 es la cantidad

// console.log(listaViaje)

//metodo join ocupa los espacios con lo que le agreguemos

// let nuevaListaViajes = listaViaje.join("\n")
// console.log(nuevaListaViajes)

//concat nos permite unir dos listas 

// const listaAlmacen= ["azucar", "leche", "aceite", "harina"]
// const listaVerduleria=["lechuga", "tomate", "zanahoria"]

// let listaCompras = listaAlmacen.concat(listaVerduleria)

// console.log(listaCompras)

//metodo slice devuelve una copia de una parte del array dentro de un nuevo array el array nuevo no se modificara

// const nuevaLista =listaCompras.slice(0,4)
// console.log(nuevaLista)

//metodo indexOf nos permite obtener el indice del array
//si el elemento no existe nos retornara //-1//---importante---

// const posicionIndex = listaCompras.indexOf("azucar")
// console.log(" azucar se encuentra en la posicion " +posicionIndex)

//const posicionIndex2 = listaCompras.indexOf(prompt("ingrese elemento de supermercado"))
//console.log(" pan se encuentra en la posicion "+posicionIndex2)

// if(posicionIndex2==-1){
//     console.log("este elemento no existe")
// }else{
//     console.log("el elemento buscado se encuentra en la posicion "+ posicionIndex2)
// }

//metodo include nos dice si un elemento existe o no dentro de la lista 

//let estaEnLaLista = listaCompras.includes(prompt("elemento de supermercado"))

//console.log(estaEnLaLista)

//metodo reverse invierte el orden de los elemntos

// let listaAlReves = listaCompras.reverse()

// console.log(listaAlReves)

//combinacion de metodos

// const nombres=["maria", "rita", "sabrina", "berta", "sofia"]

// const eliminar = (nombre)=>{
//     let index = nombres.indexOf(nombre)
//     if(index != -1){
//         nombres.splice(index, 1)
//     }
// }
//eliminar(prompt("ingrese el nombre"))

//console.log(nombres)

//ARRAY DE OBJETOS-----estructura compleja de datos podemos manipularlos de forma precisa y prolija

//pueden usarse para almacenar objetos personalizados podemos usar objetos literales o creados con el constructor
// FOR Of para recorrer array de objetos

// const libros = [
//     {
//         id:1,
//         nombre:"harry potter",
//         genero:"aventura",
//         precio: 180.25
//     },
//     {
//         id:2,
//         nombre:"Js para principiantes",
//         genero:"educacion",
//         precio: 255.56
//     },
//     {
//         id:3,
//         nombre:"Elige tu propia aventura",
//         genero:"aventura",
//         precio: 180.23
//     },
//     {
//         id:4,
//         nombre:"diccionario ingles",
//         genero:"diccionario",
//         precio: 305.28
//     }
// ];

// for( const libro of libros){
//     console.log(libro.precio)

//     console.log(libro.nombre)

// }


//diapo 42

class Producto{
    constructor(nombre, precio){
        this.nombre=nombre.toUpperCase();
        this.precio=parseFloat(precio);
        this.vendido=false;

    }
    sumaIva(){
        this.precio=this.precio*1.21;
    }
}

//declaramos un array de productos para almacenar los objetos

const productos=[]

productos.push(new Producto("arroz", "125"))
productos.push(new Producto("fideos", "290"))
productos.push(new Producto("yerba", "348"))
productos.push(new Producto("azucar", "208"))
productos.push(new Producto("papel higienico", "320"))

console.log(productos)
let cadaProducto = prompt()

for(const producto of productos){
    producto.sumaIva();
    if(producto.nombre==cadaProducto){
        let posicion= productos.indexOf(producto)
        console.log("el productos se encuentra en "+posicion)
        console.log(producto.nombre)
    }else{
        console.log("no es un producto que haya en stock")
    }

}











