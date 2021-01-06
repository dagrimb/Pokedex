


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

        function addListItem(pokemon) {
            let pokemonList = document.querySelector('.pokemon-list');
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('pokemonButton');
            listItem.appendChild(button);
            pokemonList.appendChild(listItem);
            button.addEventListener('click', function (event) {
                showDetails(pokemon);
            })
        }
        
        function showDetails(pokemon) {
            console.log(pokemon);
        }

        return {
            getAll: getAll,
            add: add,
            addListItem: addListItem
        };

    })();
    
        pokemonRepository.getAll().forEach(function(pokemon) {
            pokemonRepository.addListItem(pokemon);

        });

