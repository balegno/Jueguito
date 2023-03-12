// DOM
let cartaas = document.getElementById("carta")


// CardPokemon 


    for(let poke of pokeCard){
        let todasCards = document.createElement("div")
        todasCards.innerHTML =
        `
            <div id="card">
                <div class="face front"></div>
                <div class="face back">
                    <img style= "height: 120px" class="d-block mx-auto" src="img/${poke.imagen}" alt="${poke.nombre}">
                    <h4 class="nomPoke">${poke.nombre}</h4>
                    <p>${poke.tipo}</p>
                </div>
            </div>`

            
            cartaas.appendChild(todasCards)

        }
    
const numbers=[2, 4, 6, 8,]
numbers.sort(()=>Math.random()-0.5)
console.log(numbers)