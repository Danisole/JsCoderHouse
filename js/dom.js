// DOM modelo de documentos de objetos

//estructura de objetos generada por el navegador la cual representa la pag HTML actual

//con javascript la empleamos para modificar de forma dinamica los elementos de la interfaz
// cada etiqueta de html es un objeto tb llamado nodo
//la etiquetas anidadas son llamadas hijos de las etiquetas nodo padre que la contiene

// DOCUMENT es el padre de todos 
//cada etiqueta de html se convierte en un noodo elemento

//las especificacion completa del dom define 12 tipos de nodos los mas usados son:
//document del que derivan todos los nodos
//element representa cada una de las etiquetas xhtml puede contener atributos y pueden derivar nodos de el
//attr (atributos) se define para representar cada uno de los atributos de las etiquetas htmluno por cada par atributo valor(atributos en color celeste)
//text nodo que cointiene el texto encerrado por una etiqueta html
//commet representa los comentarios incluidos en la pag html

let seccionSuperior = document.getElementById("principal")
seccionSuperior.style.background="yellow"

let titulo = document.getElementById("titulo")
titulo.style.font="bold 40px monospace"
titulo.innerText="Hoy cambia todo !"

//getElementByTagName
let parrafos=document.getElementsByTagName("p")
console.log(parrafos)
parrafos[0].innerText=new Date().toLocaleString()

//La interfaz HTMLCollection representa una colección genérica (objeto tipo array similar a arguments) de elementos (en orden de documento) y ofrece métodos y propiedades para seleccionarlos de la lista.

//Crear un nodo de tipo elemento con la etiqueta p

let articulo = document.createElement("article")
articulo.innerHTML= "<h2>Hola Coder!<h2>"
// y añadimos el nodo element como hijo de seccionSuperior
seccionSuperior.append(articulo)

//eliminar el segundo parrafo
parrafos[1].remove();

//array de objetos literales 

const productos =[
    {id:1, nombre: "arroz", precio: 250},
    {id:2, nombre: "fideos", precio: 70},
    {id:3, nombre: "pan", precio: 50},
    {id:4, nombre: "flan", precio: 100},
]

//campos de texto
let campoEmpresa = document.getElementById("empresa")
let campoCantidad = document.getElementById("cantidad")
campoEmpresa.value="Mercado Libre"
campoCantidad.value=productos.length;

//array con la informacion a agregar

let ul = document.createElement("ul")
document.body.append(ul)

let personas = ["Homer", "marge", "bart", "lisa", "maggie"]

for(const persona of personas){
    let li = document.createElement("li")
    li.innerHTML= persona;
    ul.appendChild(li)
}

