let carrito=[]

if(localStorage.getItem(carrito)){
    carrito=JSON.parse(localStorage.getItem("carrito"))
}
let lista = document.getElementById("milista")

//llamado a renderizar las cards
renderizarProductos()

function renderizarProductos(){

    for(const producto of productos){

        lista.innerHTML+=`
        <li class="col-sm-3 list-group-item">
        <h3> ID: ${producto.id}</h3>
        <p> Producto: ${producto.nombre}</p>
        <img src=${producto.foto} width="250" height="250">
        <p><strong> $ ${producto.precio}</strong></p>
        <button class="btn btn-danger" id="btn${producto.id}"> Comprar </button>
        </li> 
        `
    }
    //eventos boton //forEach para cada producto

    productos.forEach(producto =>{
        //evento individual para cada boton//plantilla literal ${}
        document.getElementById(`btn${producto.id}`).addEventListener("click", function(){
            agregarAlCarrito(producto)
        });

    });
}

function agregarAlCarrito(producto){

    carrito.push(producto);
    console.log(carrito)
    alert(`Producto: ${producto.nombre} agregado al carrito`)
    document.getElementById("tablabody").innerHTML+=`
    <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
    </tr>
    `
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

