/* 
console.log(new Date().getDay());
let NumeroDia = new Date().getDay();

switch (NumeroDia) {
    case 1:
        Dia = "Es Lunes"
        break;
    case 2:
        Dia = "Es Martes"
        break;
    case 3:
        Dia = "Es Miercoles"
        break;
    case 4:
        Dia = "Es Jueves"
        break;
    case 5:
        Dia = "Es Viernes"
        break;
    case 6:
        Dia = "Es Sabado"
        break;
    case 7:
        Dia = "Es Domingo"
        break;

}

console.log("Hoy es " + Dia);


let numero = parseFloat (prompt(" Ingrese un numero "))

let esMayorADiez = numero > 10 
let esMenorOIgualADiez = numero <=10 

if(esMayorADiez){
    document.write("El numero es mayor a 10")

}else if(esMenorADiez){
    document.write("El numero es igual o menor a 10")
}
else{
    document.write("El dato ingresado no es un numero")
}


let numero = parseFloat(prompt("Ingrese numero"))

if( numero > 1000 ){
    alert("es mayor a 1000")
}else { 
    alert("es menor a 1000") }

 

    let mensaje = prompt( "Ingrese mensaje")


    if( mensaje === "Hola" || mensaje === "hola"){
        document.write( "Buenos dias")
    }


    let mensaje = prompt( "Ingrese mensaje")

    switch ( mensaje ){
        case "Hola":
        case "hola":
        alert ("Buenos dias")
        break;
    }

    */

    let numero = parseFloat (prompt("Ingrese su numero"))

    if( numero >= 10 && numero<= 50) {
        alert("El numero esta entre 10 y 50")
    }
