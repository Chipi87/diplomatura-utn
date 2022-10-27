/* 
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(respuesta => respuesta.json())
.then(respuestaEnFormatoJs => console.log (respuestaEnFormatoJs))

*/
//1ro armar array vacio para que ingrese ahi
const pokemon = []
// aramamos constante con la dir API
const URLPOK = "https://pokeapi.co/api/v2/pokemon/ditto"

//fetch donde indica la promesa
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(respuesta => respuesta.json())
.then(respuestaJS  => {
    pokemon.push(respuestaJS.results)                  //pushiamos a pokemon sobre las respuestaJS. results , despues generamos un bucle foreach sobre respuestaJS.results donde va estar incluido todo lo pushiado
    respuestaJS.results.forEach((pokemon) =>pokemon.push(pokemon))
})
