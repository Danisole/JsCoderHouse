//ciclo es una estructura que permite repetir el codigo
//for of no se coloca numero de vueltas ni incremento

//cuando utilizamos un for in agarramos el indice del array mas indicado para recorrer objetos
//mientras que for of conseguimos el vcalor del la posicion

//for(let variable/nosotros le ponemos el nombre/ of estructura /array u objeto/)

//for(let variable of estructura){
//    codigo a ejecutar
//}

let names = ["paco", "jose", "paula", "maria"]

for(let name of names){
    console.log(name) //devuelve los nombres
}

for(let name in names){
    console.log(name)// devuelve el index
}

//break cuando la condicion se cumple rompe el bucle

for(let i=0; i<names.length; i++){
    if(names[i] == "paula"){
        break
    }
    console.log(names[i])
}

//continue cuando queremos saltarnos ese elemento

for(let i=0; i<names.length; i++){
    if(names[i] == "paula"){
        continue //muestra todos menos paula
    }
    console.log(names[i])
}