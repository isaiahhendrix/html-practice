class Pokemon {
    constructor(name, attackPower, type) {
        this.name = name;
        this.attackPower = attackPower;
        this.type = type;
    }
}

var charmander = new Pokemon('charmander', 100, 'fire');
var charmeleon = new Pokemon('charmeleon', 200, 'water');
var charizard = new Pokemon('charizard', 300, 'grass');
var squirtle = new Pokemon('squirtle', 120, 'water');
var wartortle = new Pokemon('wartortle', 220, 'water');
var blastoise = new Pokemon('blastoise', 320, 'water');
var bulbasaur = new Pokemon('bulbasaur', 130, 'water');
var ivysaur = new Pokemon('ivysaur', 230, 'water');
var venusaur = new Pokemon('venusaur', 330, 'water');





function doBattle(Pokemon1, Pokemon2) {
    if (Pokemon1.attackPower > Pokemon2.attackPower) {
        alert(Pokemon1.name + ' wins!');
    }
    else {
        alert(Pokemon2.name + ' wins!');
    }
}
function getPokemonAndDoBattle() {
    var pokemonName1 = document.getElementById("Pokemon1").value;
    var pokemonName2 = document.getElementById("Pokemon2").value;

    var firstPokemon = mapPokemon(pokemonName1);
    var secondPokemon = mapPokemon(pokemonName2);



    doBattle(firstPokemon, secondPokemon);
}

function mapPokemon(pokemonName) {
    switch (pokemonName) {
        case "charmander":
            var pokemon = charmander;
            break;
        case "charmeleon":
            var pokemon = charmeleon;
            break;
        case "charizard":
            var pokemon = charizard;
            break;
        case "squirtle":
            var pokemon = squirtle;
            break;
        case "wartortle":
            var pokemon = wartortle;
            break;
        case "blastoise":
            var pokemon = blastoise;
            break;
        case "bulbasaur":
            var pokemon = bulbasaur;
            break;
        case "ivysaur":
            var pokemon = ivysaur;
            break;
        case "venusaur":
            var pokemon = venusaur;
            break;

        default:
            alert("please enter a valid pokemon");
    }
    return pokemon;
}