
let pokemonList = [{name: 'Bulbasaur', height: 7, types: ['grass', 'poison']}, 
                {name: 'Golbat', height: 1.6, types: ['ground', 'rock', 'electric', 'ice', 'psychic']},
                {name: 'Shellder', height: 0.3, types: ['grass', 'electric']}];

pokemonList.forEach(function(pokemon) {
    if (pokemon.height > 1.6) {
            document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") - Wow, that\'s big!</p>");
            //This print's Bulbasaur's name and height to the console if the conditions are met//
    } else {
            document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") </p>");
            //This writes Pokemon's height next to it's name//
    }
});


/*    for (var i = 0; i < pokemonList.length; i++) {
        if (pokemonList[i].height > 1.6) {
            document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that\'s big!</p>");
            //This print's Bulbasaur's name and height to the console if the conditions are met//
        } else {
            document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") </p>");
            //This writes Pokemon's height next to it's name//
    }
*/