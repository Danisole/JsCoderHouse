//clase funciones

// for (let i=0; i<6; i++){
//     console.log("hola soy el ciclo " + i)
// }

// diapo 178



// const miBebecito =(elemento)=>{



// for (let i=1; i<11; i++){

//         let resultado = elemento * i;

//     if(resultado%2===0){

//         console.log("bebecito")
//     }else{
//         console.log(`${elemento} x ${i} = ${resultado}`) 
//     }
    
    
// }
// }
// miBebecito(numeroIngresado = parseInt(prompt("ingrese un numero")))


// for (let i=1; i<=4; i++){
//     let ingresarNombre = prompt("ingrese su nombre")

//     console.log(`Turno n° ${i} Nombre ${ingresarNombre}`)
// }

// let vacio = ""

// for (let i=0; i<10;i++){
//     vacio = vacio +i

//     console.log(vacio)
// }

//sentencia break

// let password 

// for(let i=1; i<=3; i++){

//     password=prompt("ingrese su contraseña")

//     if(password=="123coder"){
//         console.log("!bienvenido usuario")
//         break
//     }else{
//         console.log(`clave erronea te quedan ${3-i} intentos`)
//     }
// }

// let oracion = " "

// let palabra = prompt("ingrese otra palabra para formar la oracion s para salir")

// while(palabra != "s"){
//     oracion = oracion + "" + palabra
// }

// alert("la oracion formada es "+ oracion)

// producto= prompt("ingrese el producto")

// while(producto != "s"){
    
//     switch(producto){
//         case "azucar":
//             console.log("azucar $100")
//             break
//         case "yerba":
//             console.log("yerba $200")
//             break
//         case "tomate":
//             console.log("tomate $200")    
//             break
//         default:
//             console.log("no existe")    
//             break
//     }

//     producto= prompt("ingrese el producto")
// }

// function solicitarNombre(){

//     for(let i=1; i<4; i++){
//         let nombreIngresado =prompt("ingrese su nombre")
//         console.log("nombre ingresado es "+ nombreIngresado )
//     }
// }
// solicitarNombre()

// function sumar(num1, num2){
//     let resultado = num1 + num2
//     return resultado
// }

// let resultadoSuma = sumar(2,5)

// console.log(resultadoSuma)

// const suma =(num1, num2)=> num1 + num2

// const sumaNum = suma(parseInt(prompt("num1")), parseInt(prompt("num2")))

// console.log(sumaNum)

// const turnosWeb = ()=>{

//     for(let i=1; i<5; i++){

//         let nombre = prompt("ingrese su nombre")
//         console.log(`el turno ${i} pertenece a ${nombre}`)

//     }
// }

// turnosWeb()



// main()

// function main(){
// let estacion = prompt("elija la estacion: \n 1) invierno\n 2)verano")

//     if(estacion==1){

//     elegirRopaInvierno()

//     }else if(estacion ==2){

//         elegirRopaVerano()

//     }else{
//         console.log("no ingreso ningun valor valido")
//     }
// }





// function elegirRopaInvierno (){
//     console.log("campera, guantes, chaleco, buzo")

// }

// function elegirRopaVerano(){

//     console.log("malla, remera, short, ojotas")
// }



function tomarCervez(){

    let marca= prompt("quilmes\n duff\n andes\n patagonia\n salta")
    let hayStock= consultarStock(marca)

    if(hayStock){
        alert("gracias por elegir " +marca)
    }else{
        alert( "no poseemos stock de "+ marca)
    }

}
tomarCervez()

function consultarStock(marca){

    if(marca == "quilmes"){
        return true
    }else if(marca == "duff"){
        return false
    }else if(marca == "andes"){
        return false
    }else if(marca == "patagonia"){
        return false
    }else if(marca == "salta"){
        return true
    }else{
        console.log("no tenemos esa marca")
        tomarCervez()
    }
}



