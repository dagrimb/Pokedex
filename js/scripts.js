


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
    })();
    
        pokemonRepository.getAll().forEach(function(pokemon) {
   
            let unorderedList = document.querySelector('ul');


            if (pokemon.height > 1.6) {
                let listItem = document.createElement('li');
                
            }

        });

