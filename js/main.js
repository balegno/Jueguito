// DOM
let cartaas = document.getElementById("carta")


// CardPokemon 


    for(let poke of pokeCard){
        console.log(poke)
        let todasCards = document.createElement("div")
        todasCards.innerHTML =
        `
            <div id="card">
                <img style= "height: 120px" class="d-block mx-auto" src="img/${poke.imagen}" alt="${poke.nombre}">
                <h4 class="nomPoke">${poke.nombre}</h4>
                <p>${poke.tipo}</p>
            </div>`
        cartaas.appendChild(todasCards)

    }


