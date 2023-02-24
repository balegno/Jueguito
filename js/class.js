class pokemon {
    constructor(id, nombre, tipo, imagen){
        this.id = id,
        this.nombre = nombre,
        this.tipo= tipo,
        this.imagen = imagen
    }
}


const pokemons1 = new pokemon(1, "Bulvasaur", "Planta/veneno", "001.png")

const pokemons2= new pokemon(2, "Ivysaur", "Planta/veneno", "002.png")

const pokemons3 = new pokemon(3, "Venusaur", "Planta/veneno", "003.png")

const pokemons4 = new pokemon(4, "Charmander", "Fuego", "004.png")

const pokemons5 = new pokemon(5, "Charmeleon", "Fuego", "005.png")

const pokemons6 = new pokemon(6, "Chalizard", "Fuego/Volador", "006.png")

const pokemons7 = new pokemon(7, "Squirtle", "Agua", "007.png")

const pokemons8 = new pokemon(8,"Wartortle", "Agua", "008.png")

const pokemons9 = new pokemon(9, "Blastoise", "Agua", "009.png")

const pokemons10 = new pokemon(10,"Nidoran", "Veneno", "029.png")

const pokemons11 = new pokemon(11,"Nidorina", "Veneno", "030.png")

const pokemons12 = new pokemon(12, "Nidoqueen", "Veneno", "031.png")

const pokemons13 = new pokemon(13, "Poliwag", "Agua", "060.png")

const pokemons14 = new pokemon(14,"Poliwhirl", "Agua", "061.png")

const pokemons15 = new pokemon(15,"Poliwharth", "Agua", "062.png")

const pokemons16 = new pokemon(16,"Machop", "Lucha", "066.png")

const pokemons17 = new pokemon(17,"Machoke", "Lucha", "067.png")

const pokemons18 = new pokemon(18, "Machamp", "Lucha", "068.png")

const pokemons19 = new pokemon(19, "Bellsprout", "Planta/Veneno", "069.png")

const pokemons20 = new pokemon(20, "Weepinbell", "Planta/Veneno", "070.png")

const pokemons21 = new pokemon(21, "Victreebel" , "Planta/Veneno", "071.png")

const pokemons22 = new pokemon(22, "Geodude", "Roca/Tierra", "074.png")

const pokemons23 = new pokemon(23, "Graveler", "Roca/Tierra", "075.png")

const pokemons24 = new pokemon(24, "Golem", "Roca/Tierra", "076.png")

const pokemons25 = new pokemon(25, "Gastly", "Fantasma/Veneno", "092.png")

const pokemons26 = new pokemon(26, "Haunter", "Fantasma/Veneno", "093.png")

const pokemons27 = new pokemon(27, "Gengar", "Fantasma/Veneno", "094.png")

const pokemons28 = new pokemon(28, "Dratini", "Dragon", "147.png")

const pokemons29 = new pokemon(29,"Dragonair", "Dragon", "148.png")

const pokemons30 = new pokemon(30,"Dragonite", "Dragon", "149.png")

let pokeCard = []
if(localStorage.getItem("pokeCard")){
    pokeCard = JSON.parse(localStorage.getItem("pokeCard"))
}else{
    pokeCard.push(pokemons1,pokemons2,pokemons3,pokemons3,pokemons5,pokemons6,pokemons7,pokemons8,pokemons9,pokemons10,pokemons11,pokemons12,pokemons13,pokemons14,pokemons15,pokemons16,pokemons17,pokemons18,pokemons19,pokemons20,pokemons21,pokemons22,pokemons23,pokemons24,pokemons25,pokemons26,pokemons27,pokemons28,pokemons29,pokemons30,)
    localStorage.setItem(pokeCard, JSON.stringify(pokeCard))
}