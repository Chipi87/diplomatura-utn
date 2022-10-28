function mostrarHora(){
    let reloj = document.getElementById("reloj")
    let hora = new Date();
    reloj.innerHTML = hora.toLocaleDateString()+hora.toLocaleTimeString();
}

const cronometro = setInterval(mostrarHora,1000);