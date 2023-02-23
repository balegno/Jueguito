// DOM
let cartaas = document.getElementById("card")


function verPoke (array){
    array.forEach(pokemones => {
        console.log(pokemones.id, pokemones.nombre, pokemones.tipo)
    });
}
// CardPokemon 

function cartasPokemon(array){
    cartaas.innerHTML=""

    for(let poke of array){
        let todasCards = document.createElement("div")
        todasCards.innerHTML =
        `<div id="${poke.id}">
        <img src="img/${poke.img}" alt="${poke.nombre}">
        <h4 class="nomPoke">${poke.nombre}</h4>
        <p>${poke.tipo}</p>
        </div>`
        cartaas.appendChild(todasCards)

    }
}
cartasPokemon()