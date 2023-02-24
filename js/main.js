// DOM
let cartaas = document.getElementById("card")


// CardPokemon 


    for(let poke of pokeCard){
        console.log(poke)
        let todasCards = document.createElement("div")
        todasCards.innerHTML =
        `<div id="card">
        <img style= "height: 120px" src="img/${poke.imagen}" alt="${poke.nombre}">
        <h4 class="nomPoke">${poke.nombre}</h4>
        <p>${poke.tipo}</p>
        </div>`
        cartaas.appendChild(todasCards)

    }


