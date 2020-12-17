
let pokemonList = [{name: 'Bulbasaur', height: 7, types: ['grass', 'poison']}, 
                {name: 'Golbat', height: 1.6, types: ['ground', 'rock', 'electric', 'ice', 'psychic']},
                {name: 'Shellder', height: 0.3, types: ['grass', 'electric']}];

   for (var i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + '); ');
    //This writes Pokemon's height next to it's name//
 }

 if (height > 1.6) {
    console.log(pokemonList[0].name + ' (height: ' + pokemonList[0].height + ') - Great Caeser\'s ghost...that is big!!!');
    //This print's Bulbasaur's name and height to the console if the conditions are met//
 }