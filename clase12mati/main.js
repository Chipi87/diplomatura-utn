/*
//ejecicio 1 clase 10 ( Variables en la consola)
let Nombre="Marcos"
console.log(Nombre)
let Edad=17
console.log(Edad)
let mascota = "true"
console.log(mascota)

//ejecicio 2 clase 10
(Prompt y alerta con if / else para definir si es menor o mayor de edad)

let edad=prompt("Que edad tienes?")
if( edad<= 18 ){
    alert("es menor de edad");
}else(edad>18);{
    alert("Es mayor de edad");
}

clase 11 ejercicio 1 
(array)

const superMercado = ["yerba","azucar","fideos","cafe","arroz","manteca","leche"];

let articulo=prompt("que articulo desea agregar?")

if ( superMercado.includes(articulo)){
    alert(articulo+" ya se encuentra");
} else (
    superMercado.push(articulo));{
        alert("La lista es "+superMercado)
    }


//ejecicio 1 clase 10 ( Variables en la consola)


let nombre="marcos"
console.log(nombre)


let edad=35
console.log(edad)


let apellido="Gauto"
console.log(apellido)



//ejecicio 2 clase 10
(Prompt y alerta con if / else para definir si es menor o mayor de edad)



let edad=prompt("Que edad tienes?")
if( edad<= 18 ){
    alert("es menor de edad");
}else(edad>18);{
    alert("Es mayor de edad");
}

clase 11 ejercicio 1 
(array)


const lista=["fideos","pure","milanesa","cafe","Azucar","yerba"]

articulo = prompt("Ingrese articulo para agregar a la lista:")

if(lista.includes(articulo) ){
    alert(" Ya se encuentra Incluido ")
}else(lista.push(articulo));{
    alert(lista+articulo)
}

clase 11 ejercicio 2 
(switch)




let numeroDia = new Date().getDay();

switch (numeroDia) {
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miércoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
        case 6:
        dia = "Sábado";
        break;

    default:
        dia = "Domingo";
}

console.log("hoy es " + dia);

clase 11 ejercicio 3
(and, or. not)

Se envio a mati por slack

let numero=1000
prompt("Ingrese numero")
if(numero == 1000 && numero > 0){
    alert("Estas dentro de los parametros normales")
}else (numero>1010);{
    alert("Te pasaste de los valores asignados")
}

Ver con matia
prompt("Ingrese mascota")
let mascota = "Caballo";
if (mascota == "Perro" || mascota == "Gato") {
    alert("Tu mascota será bienvenida al alojamiento.");
} else {
alert("Lo sentimos, solo recibimos perros o gatos");
} 



Clase 12 
Bucles



let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
];


for( let i = 0; i<frutas.length;i++){
    fruta=frutas[i];
    console.log (fruta + " tiene " + fruta.length + " caracteres")
}



let precio=[ 100,200,300,400,500]

for(let valor of precio){
    console.log("Precio sin IVA "+ valor)
    valor= valor*1.21
    console.log("Precio con IVA "+ valor)
}



let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
];

for(const fruta of frutas)
console.log(fruta)


Clase 12 ejercicio 1

*/

nombres=["Martinez","Romero","Paredes","Messi","L.Martinez"];
nombres.map(nombres=>{
    return "Nombre"+ nombres
})

const nombresLargos=nombres.filter((nombre) => nombre.length >= 7 );

const nombresCortos = nombres.filter((nombre) => nombre.length < 7)


console.log("Nombres Largos "+ nombresCortos)
console.log("Nombres Largos "+ nombresLargos)
