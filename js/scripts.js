
let pokemonList = [{name: 'Bulbasaur', height: 7, types: ['grass', 'poison']}, 
                {name: 'Golbat', height: 1.6, types: ['ground', 'rock', 'electric', 'ice', 'psychic']},
                {name: 'Shellder', height: 0.3, types: ['grass', 'electric']}];

   for (var i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name);
 }