
<<<<<<< HEAD
let pokemonList = [{name: 'Bulbasaur', height: 7, types: ['grass', 'poison']}, 
                {name: 'Golbat', height: 1.6, types: ['ground', 'rock', 'electric', 'ice', 'psychic']},
                {name: 'Shellder', height: 0.3, types: ['grass', 'electric']}];

<<<<<<< HEAD

for (let i = 1; i < pokemonList.length; i++ {
    if (pokemonList[i].height === 7 && pokemonList[i].types === 'grass' && 'poison') {
        console.log(pokemonList[i].height + "is Bulbasaur");
=======
    for (var i = 0; i < pokemonList.length; i++) {
        if (pokemonList[i].height > 1.6) {
            document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that\'s big!</p>");
            //This print's Bulbasaur's name and height to the console if the conditions are met//
        } else {
            document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") </p>");
            //This writes Pokemon's height next to it's name//
>>>>>>> main
    }
}
=======


    let pokemonRepository = (function () {
        let pokemonList = [{name: 'Bulbasaur', height: 7, types: ['grass', 'poison']}, 
        {name: 'Golbat', height: 1.6, types: ['ground', 'rock', 'electric', 'ice', 'psychic']},
        {name: 'Shellder', height: 0.3, types: ['grass', 'electric']}];
   //List of all pokemon

        function getAll() {
            return pokemonList; 
        }
        //Returns array of all pokemon

        function add(pokemon) {
            pokemonList.push(pokemon);
        }
        //Adds pokemon to array

        function showDetails(pokemon) {
            console.log(pokemon);
        }
        //Logs details of pokemon to the JS console

        function addListener(button, pokemon) {
            button.addEventListener('click', function (event) {
                showDetails(pokemon);
            })
        }
        //Show details of pokemon in he JS console when pokemon is clicked in the UI

        function addListItem(pokemon) {
            let pokemonList = document.querySelector('.pokemon-list');
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('pokemonButton');
            listItem.appendChild(button);
            pokemonList.appendChild(listItem);
            addListener(button, pokemon);
            }
        //Create button
        
        return {
            getAll: getAll,
            add: add,
            addListItem: addListItem,
        };
    
    })();

        pokemonRepository.getAll().forEach(function(pokemon) {
            pokemonRepository.addListItem(pokemon);

        });
>>>>>>> main

