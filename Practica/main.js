/*  

// FUNCIONES

function sumar (a,b){
    return a+ b
}

let resultado=sumar(2,6)
console.log(resultado)




// OBJETOS

// OBJETO LITERAL

const producto1 = {
    ID: 1,
    nombre: " Tallarines",
    Precio: 80.5,
}

console.log(producto1.nombre);
console.log(producto1.ID);
console.log(producto1.Precio);

//producto1["nombre"] = "Tirabuzon";

//console.log(producto1.nombre);

alert(
    "El producto ID: " + producto1.ID +
    "\nNombre " + producto1.nombre +
    "\nPrecio: " + producto1.Precio
    );



// CONSTRUCTORES

let Cuotas = function (cuota, interes, cft){
    
    this.cuota = cuota;
    this.interes = interes;
    this.cft = cft;
}

const resultado = new Cuotas(1,2,3);
const resultado2 = new Cuotas(2,3,4);


console.log(resultado);
console.log(resultado2);


// nombrar composicion de array y cuanto caracteres tiene cada uno

const nombres = ["Matias", "Nacho" , "Fran" , "Chipi"];

function llamarNombre (){
    let i = 0;
    for(nombre of nombres){
        console.log(nombre+" Tiene "+nombre.length+" caracteres" );
    }
}
llamarNombre()


//BUCLEO FOR
// dentro de los parantesis van la 3 declaraciones(la primera se una con una variable i=0 ); la segunda la condicion para que se
//ejecute el bucle y por tercer lugar la accion que queremos que haga, en este caso aumente
for(let i = 0; i < 5; i++ ){
    // codigo a repetir

}

//BUCLE WHILE
// la variable va a afuera del bucle

let i = 0
while (i < 5){
    //codigo a repetir
    i++;
}


//foreach
const nombres = ["Matias", "Nacho" , "Fran" , "Chipi"];

nombres.forEach(nombre => {
    console.log(nombre);
});


//for of
const nombres = ["Matias", "Nacho" , "Fran" , "Chipi"];

for( nombre of nombres){
    console.log(nombre);
}


//FOR
const nombres = ["Matias", "Nacho" , "Fran" , "Chipi"];

for( let i = 0 ; i<nombres.length; i++){
    console.log(nombres[i]);
}


//EJERCICIOS MATI

*/

let primerNumero = parseInt(prompt("Ingrese primer numero") )
let segundoNumero = parseInt(prompt("Ingrese segundo numero") )

if(primerNumero>segundoNumero){
    alert("El primero es mayor")
    }
    else{
        if(primerNumero===segundoNumero){
            alert("IGuales")
        }
        else{
            alert(" El segundo es mayor")
        }
    }


