


    let pokemonRepository = (function () {
        let pokemonList = [{name: 'Bulbasaur', height: 7, types: ['grass', 'poison']}, 
        {name: 'Golbat', height: 1.6, types: ['ground', 'rock', 'electric', 'ice', 'psychic']},
        {name: 'Shellder', height: 0.3, types: ['grass', 'electric']}];
   
        function getAll() {
            return pokemonList; 
        }

        function add(pokemon) {
            pokemonList.push(pokemon);
        }

        return {
            getAll: getAll,
            add: add
        };

        function addListItem() {

        }

    })();
    
        pokemonRepository.getAll().forEach(function(pokemon) {
   
            let pokemonList = document.querySelector('.pokemon-list');
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = "placeholder";
            button.classList.add('pokemonButton');
            listItem.appendChild(button);
            pokemonList.appendChild(listItem);
        });

