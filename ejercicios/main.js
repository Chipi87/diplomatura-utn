/* 


// CLASE 13 ACTIVIDAD 1

FUNCIONES

//Crear una función que reciba el parámetros nombre, apellido y  serie favorita y que devuelva un saludo


function saludar (){
    let nombre=prompt("Ingresa tu nombre")
    let apellido=prompt("Ingresa tu nombre")
    let serie=prompt("Ingresa tu nombre")
    alert("hola "+ nombre +" "+ apellido+"su serie favorita es "+serie)
}

saludar()



//ACTIVIDAD 2

RETURN

//Crear una función que reciba el parámetro nombre y que devuelva el largo de ese nombre. 
//el legnth recordar que muestra la cantidad de caracteres

function nombreLargo (nombre){
    return nombre.length;

}
let resultado = nombreLargo("Ana")

console.log("Ana es igual a " +resultado);



//SCOPE
//VARIABLE LOCAL ( variable dentro de la funcion)

function sumar (a , b){
    let num = 10;
    return (a+b)*num;

}

let resultado = sumar(2,3)
console.log(resultado);

//VARIABLE GLOBAL (variable fuera de la funcion)

let num = 10;

function sumar (a , b){
    return (a+b)*num;
}

let resultado = sumar(2,3)
console.log(resultado);


// ACCEDER AL ENCABEZADO DEL DOM H1 Y H2
//se genera una variable y se llama con el document. querySelector ("h1") 
//tambien se pueden acceder al DOM empleado  por el ID del HTML getElementById(), por la clase del HTML getElementsByClassName(), por el nombre getElementsByTagName()

ACTIVIDA 3

let encabezado = document.querySelector("h1")
console.log(encabezado.innerHTML);

let texto = document.querySelector("h2")
console.log(texto.innerText);

*/