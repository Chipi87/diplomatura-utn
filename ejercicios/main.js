/* 


// CLASE 13 ACTIVIDAD 1

FUNCIONES

//Crear una función que reciba el parámetros nombre, apellido y  serie favorita y que devuelva un saludo


function saludar (){
    let nombre=prompt("Ingresa tu nombre")
    let apellido=prompt("Ingresa tu apellido")
    let serie=prompt("Ingresa tu serie favorita")
    alert("hola "+ nombre +" "+ apellido+"su serie favorita es "+serie)
}

saludar()



//ACTIVIDAD 2

RETURN

//Crear una función que reciba el parámetro nombre y que devuelva el largo de ese nombre. EJ nombre ANA
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



//FUNCIONES

const persona = {
    nombre : "Marcos",
    edad : 35,
    profesion: "estudiante",
};

//agregar dato a la funcion literal

persona.nombre="Adrian"
persona.edad=38;

console.log(persona);

//CLASE 14

//CONSTRUCTORES

function cuotas (cuota, interes, cft){
    this.cuota= cuota;
    this.interes=interes;
    this.cft=cft;

}

console.log("cuota", 1, "Interes" , 10, "CFT", 60);


//METODOS PERSONALIZADOS
// es un objeto pero se ingresa para personalizarlo

function Cuotas (cuota, interes, cft){
    this.cuota= cuota;
    this.interes=interes;
    this.cft=cft;
    this.hablar = function(){ console.log("Tu cuota es en "+ this.cuota+" Interes "+ interes+ " CFT "+ cft )}
}
 //se establece dentro de la funcion y se llama solamente a la funcionn
const ahoraDoce = new Cuotas (12, 40, 70 );

ahoraDoce.hablar()



//CLASES

class autos {
    constructor(marca, modelo, año){
    this.marca=marca;
    this.modelo= modelo;
    this.año= año;
}
}

const auto1 =new autos("Fiat", "cronos", 2021);

console.log(auto1);



//Crear al menos un objeto relacionado con tu app.
//Incorporar sus propiedades y su constructor.
//Invocar a ese objeto en algún momento donde el usuario realice alguna acción.
//Utilizar sus métodos.

class bebidas {
    constructor(nombre,estilo, graduacion){
        this.nombre= nombre;
        this.estilo=estilo;
        this.graduacion=graduacion;
}
}

const bebida1 = new bebidas("Jack Daniels","Whisky",10)
const bebida2= new bebidas("Tres Plumas"," Licor", 10)

console.log(bebida1);
console.log(bebida2);


//Creá una función que muestre la hora, el día...
//El reloj debe mostrarse por pantalla.
//Creá el css y la estructura html necesaria.

// paso 1 : crear la funcion y llamar al id del html en una variable
// paso 2 :  otra variable con el new Date
// paso 3 : Ingresamos al html dentro de su contenido 
// paso 4 : crea una constante llamada cronometro donde = setinteval llamando a la funcion + los segundos

function  mostrarhora(){
    let reloj = document.getElementById("reloj")
    let hora = new Date();
    reloj.innerHTML = hora.toLocaleTimeString();

}

const cronometro = setInterval(mostrarhora,1000);




// paso 1 : creamos un array donde van a entrar las categorias
// paso 2: vamos a utilizar un while (bucle) . si la entrada es distinta a ESC cargar una categoria  (!= significa distinto)


const categorias = [];

let entrada = prompt("Ingrese categoria  \n(Escribir ESC para salir)")

// mientras entrada sea distinto a ESC
while(entrada.toUpperCase() != "ESC"){
    //incluir la categoria al array
    categorias.push(entrada.toUpperCase());
    // solicitar una nueva categoria, repetimos prompt inicial
    entrada = prompt("Ingrese categoria  \n(Escribir ESC para salir)")
}

console.log(categorias);

//pasar a pantalla

let miSelect = document.getElementById("select")
console.log(miSelect);
//creamos un bucle  y vamos a dentro del texto de select, usamos el operador para ir incrementando += y lo ponemos en una estructura html va dentro de un opcion

for(const categoria of categorias){
    miSelect.innerHTML += "<option>" + categoria + "</option>";
}


// CREAR UN NODO APPENDCHILD
//El método appendChild() inserta un nuevo nodo dentro de la estructura DOM de un documento,


let titulo1 = document.createElement("h2")
titulo1.innerHTML = "Soy desde JS";

document.body.appendChild(titulo1);
*/
//PLANTILLAS LITERALES
// creacion dinamica de nodos

class Producto {
    constructor(ID, nombre, precio){
        this.ID = parseInt(ID);
        this.nombre = nombre;
        this.precio=parseFloat(precio);
    }
}

const productos = [];
productos.push(new Producto (1,yerba, 100));
productos.push(new Producto (2,azucar, 80));
productos.push(new Producto (3,te, 120));

//recorro el array pára crear um nodo en el array

for(const producto of productos){
    let divProducto = document.createElement("div");
    divProducto.innerHTML = <h3> Nombre: ${producto,nombre} </h3>
                            <h4> Precio: ${producto,nombre} </h4>
}

document.body.appendChild(divProducto)

