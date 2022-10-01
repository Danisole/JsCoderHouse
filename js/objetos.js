//clase objetos

//objetos literales

//coleccion de datos relacionados como una entidad

//poseen una clave y valor KEY VALUE agrupados duplas 

//se crea en una sola estructuradentro de llaves 

const miMousse={
    color: "rojo",
    marca: "logitech",
    wireless: true,
    modelo: "m190"
}

console.log(miMousse)
//por consola se ordenan las propiedades en ordenn alfabetico

console.log(miMousse.marca)
miMousse.color="verde" //para modificacion de la propiedad lo hacemos con el igual
console.log(miMousse.color)

console.log(miMousse)

//al redefinir la propiedad el objeto cambia

//funcion constructora para crear objetos en serie 

function Automoviles(marca, modelo, año, color){// la funcion constructora siempre empieza la constante con mayuscula
    this.marca = marca;
    this.modelo= modelo;// estes=this se refiere a las propiedades de este objeto que estoy creando 
    this.año=año;//this esta enlazado al nuevo objeto creado necesario para asegurarse q se emplean las propiedades del objeto actual
    this.color=color
    this.encender=()=>(alert("el automovil "+this.marca+ " se acaba de encender"))

}

const auto1 = new Automoviles("fiat", "uno", 2021, "verde")// para crear el nuevo objeto utilizo la propiedad new + nombre (Automoviles)
const auto2 = new Automoviles("ford", "focus", 2022, "azul")
const auto3 = new Automoviles("ford", "fiesta", undefined, "azul")

auto2.encender()
auto1.encender()


auto3.año=2019//si falta alguna caracteristica del medio se puede colocar como indefinida para luego agregarla
console.log(auto1)
console.log(auto2)// en la salida de consola los autos creados por constructor dice el nombre del movil(automoviles)

//puede utilizarse un objeto literal como parametro y ahi se va desmenuzando para crear el objeto a traves del constructor

function Persona (literal){
    this.nombre = literal.nombre;
    this.edad =literal.edad;

}

const persona1 = new Persona ({nombre: "santiago", edad:12})

console.log(persona1)

//metodos de string

//los metodos de los objetos tb son funciones solo que se limitan a ser ejecutados en el mismo objeto
 let frase ="perro que LADRA no muerde"

 console.log("la longitud del string en caracteres es " + frase.length)

 console.log(frase.toLocaleUpperCase())//vuelve todos los caracteres en mayuscula
 console.log(frase.toLocaleLowerCase())//vuelve todos los caracteres en minusculas

//agregar a una funcion constructora un  metodo

//FOR IN---------

let tieneMarca = "marca" in auto2
console.log("tiene una propiedad llamada marca " +tieneMarca)

let tienePatente = "patente" in auto2
console.log("tiene una propiedad llamada marca " +tienePatente)

for (const prop in miMousse){
    // console.log("propiedad "+prop )
    // console.log("valor " +miMousse[prop])
    console.log(prop, miMousse[prop])

}

//fabricar objetos con CLASES

//provee una sintaxis mucho mas clara equivalente al empleo de una funcion constructora y perite definit distintos tipos de metodos

class Bicicletas{
    constructor(marca, rodado, color, condicion){
        this.marca = marca;
        this.rodado= rodado;
        this.color=color;
        this.condicion=condicion
    }

    mostrarBicicleta(){
        alert("marca "+this.marca+ "rodado "+this.rodado+ " color "+this.color+"condicion " +this.condicion)
    }
}

const bici1= new Bicicletas("olmo", 26, "rojo", "nueva")
console.log(bici1)

bici1.color="verde"
console.log(bici1.color)
bici1.color="amarillo"
console.log(bici1.color)
console.log(bici1)

//los objetos tienen propiedades y metodos 
//metodo constructor sirve para crear un objeto y asignarle propiedades y se le aplican metodos(lenght,uppercase LowerCase)

//son de acceso globaly los metodos los metodos para los objetos que lo contienen

//clases son otra forma de cear objetos

// function tomarCerveza(){
//     let marca = prompt("que marca de cerveza quiere tomar santi")
//     let precio = parseInt(prompt("ingrese el precio"))
//    alert("santi quiere tomar " + marca + " que cuesta " + precio)
// }
// tomarCerveza()



