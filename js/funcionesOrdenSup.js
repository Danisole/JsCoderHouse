//son funciones que reciben o retornan otra funcion permite abtraerse sobre funciones no solo sobre valores
//puede ingresar otra funcion o retornar

// function esMayorQue(n){
//     return (m) => m > n
// }

// let mayorDeEdad = esMayorQue(18);

// let edad = parseInt(prompt("ingrese la edad"))

// console.log(mayorDeEdad(edad))

//funcion que recibe por parametro otra funcion sirve x ejemplo para recorrer un array y hacer algo con cada elemento

// const preciosProductos = [1045.55, 540.56,899.34, 1000, 306.54]

// let total=0;
// function sumarTotal(precio){
//     total+=precio
// }

// function realizar(operacion, lista)

//parametros con arrow

// const listaDeBandas=["daft punk", "beatles", "cldplay", "pink floyd"];

// function porCadaUno(arr, fn){
//     for(const elemento of arr){
//         fn(elemento)
//     }
// }

// const aMayusculas=[]

// porCadaUno(listaDeBandas, (banda)=>aMayusculas.push(banda.toUpperCase()))
// console.log(aMayusculas)

//FOREACH() es un metodo de arrays significa por cada uno

// const libros = [
//     {
//         id:1,
//         nombre:"Harry potter",
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
//         nombre:"Diccionario ingles",
//         genero:"diccionario",
//         precio: 305.28
//     }
// ];


//imprimo el titulo de cada uno

//el forEach itera!!!!!!

// libros.forEach((libro)=>{

//     const elLibro = libros.find((libro)=>libro.id ==2 )
// console.log(elLibro)
// })


//let el = parseInt(prompt("ingrese id"))
//solo busca
//const elLibro = libros.find((libro)=>libro.id == 4 )


// libros.find(libro.id == 2)
//         console.log(libro.nombre)

// if(elLibro != undefined){
//     console.log("el libro se encuentra en stock")
//     console.log(elLibro.nombre)
// }else{
//     console.log(("no se encuentra en stock"))
// }

//filter() filtra 

// const baratos = libros.filter((libro)=>libro.precio < 300)//va a filtrar ese libro (libro) tal que=> ese libro libro.precio sea menor q, mayor q
// console.log(baratos)

// if (baratos != []){
//     console.log("los libros se encuentran en stock")
// }else{
//     console.log("no hay libros en ese rango de precio")
// }

//metodo SOME

// const existe = libros.some((libro)=>libro.genero == "diccionario")
// console.log(existe)

//metodo MAP crea un nuevo array con todos los elementos del original transformados segun la operacion de la funcion tiene los mismos elementos pero los almacenados son el return de la funcion

// const siHay = libros.map((libro)=>libro.id)
// console.log(siHay)

// const librosConIva = libros.map((libro)=>{
//     return{
//         id:libro.id,

//         precio:parseFloat((libro.precio*1.21).toFixed(2))
//     }
// })
// console.table(librosConIva)

//REDUCE resume al array a un unico valor tras iterar sobre el array
//posee dos parametros el primer parametro ordena que queremos resumir y el segundo el valor inicial

// const numeros =[1,2,3,4,5,6]

// const total = numeros.reduce((acumulador, elemento)=> acumulador + elemento, 0)
// console.log(total)
//tenemos dos parametros en la funcion flecha que llega hasta la coma el 0 es desde donde queremos comenzar

// const totalPrecios = librosConIva.reduce((acumulador, libro)=>acumulador + libro.precio, 0)
// console.log(totalPrecios.toFixed(2))
// metodo sort nos permite reordenar un array segun un critero q elijamos
//compara dos parametros y es un metodo destructivo cambia el array

//const numeros1=[40, 1,5,200]

//numeros1.sort((a,b)=>a-b);//a adelante seria orden ascendente
//el  menor tiene q estar adelante del mayor
//console.log(numeros1)
//numeros1.sort((a,b)=>b-a);//mientras que b adelante seria orden descendente
//b adelante es q tiene q estgar el mayor adelante
// console.log(numeros1)

// const nuevoArrayLibros = libros.sort((a,b)=>a.precio-b.precio)
// console.log(nuevoArrayLibros)

// const nuevoArrayLibros2 = libros.sort((a,b)=>a.nombre-b.nombre)
// console.log(nuevoArrayLibros2)

// //otro metodo de comparacion para strings

// const nuevoArrayLibros3 = libros.sort((a,b)=>a.nombre.localeCompare(b.nombre))
// console.table(nuevoArrayLibros3)

//objeto MATH contenedor de herramientas y metodos para realizar operaciones complejas

// for(let i=1; i<=3; i++ ){
//     let resultado= Math.round(Math.random()*5+1)//al multiplicarlo x 5 da numeros entre 1 y 5 y al sumar uno llega hasta el 6
//     console.log(`dado ${i} = ${resultado}`)//math round redondea al entero mas cercano
// }

// //clase date
// let ahora=new Date()
// console.log(ahora)

// console.log(ahora.toLocaleString())

//---------After funciones orden superior------------//

class Jugador{
    constructor(nombre, camiseta, edad, lesionado){
        this.nombre= nombre;
        this.camiseta=camiseta;
        this.edad=edad;
        this.lesionado=lesionado
    }
}

const jugadores = []//array vacio donde voy a guardar todo lo pusheado 

jugadores.push(new Jugador("BART",15,12,false ));
jugadores.push(new Jugador("NELSON",2,18,false ));
jugadores.push(new Jugador("MILHOUSE",68,12,true ));
jugadores.push(new Jugador("MARTIN",10,11,false ));
jugadores.push(new Jugador("ROD",98,12,false ));

console.log(jugadores)
console.table(jugadores)

//-------buscar jugadores por nombre hacer tres busquedas--------------//

// function buscarJugador(equipo, jugador){

//     const jugadorEncontrado = equipo.find((elemento)=>elemento.nombre==jugador)
//     return jugadorEncontrado

// }//planteamos la funcion donde se va a hacer la busqueda para luego iterar x el array y hacer los tres pedidos


// for(let i=1; i<=3; i++){

//     let ingreseJugador=prompt("ingrese nombre jugador").toUpperCase()
//     const encontrado = buscarJugador(jugadores, ingreseJugador) //encontrado es lo que retorna la funcion jugador encontrado
//     if(encontrado != undefined){//se sugiere q los objetos se declaren con constS
//         console.log(encontrado)
//     }else{
//         console.log("jugador no encontrado")
//     }
// }

//---------------buscar jugadores q coincidan con la edad hacer 5 busquedas------///

function filtroJugadores(equipo, edad){

    const jugadoresFiltrados = equipo.filter((elemento)=>elemento.edad <= edad)
    return jugadoresFiltrados
}

for(let i=1; i<=5; i++){
    const ingreseEdad= parseInt(prompt("ingrese la edad buscada"))

    const edadEcontrada = filtroJugadores(jugadores, ingreseEdad)
    // if(edadEcontrada != ""){
    //     console.table(edadEcontrada)
    // }else{
    //   console.log("no hay jugadores con esta edad")
    // }
    
    //otra opcion 
    if(edadEcontrada.length != 0){ 
            console.table(edadEcontrada)
        }else{
          console.log("no hay jugadores con esta edad")
        }
}

//------NUevo array que solo tenga el nombre del jugador y si esta lesionado--//

const jugadoresYLesiones =jugadores.map((jug)=>{
    return{
        nombre:jug.nombre.toLowerCase(), //aca podemos hacer una transformacion 
        lesion:jug.lesionado
    }
})

console.table(jugadoresYLesiones)





