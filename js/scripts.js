


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

