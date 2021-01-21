


    let pokemonRepository =(function () {
        let pokemonList = [];

        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

        //Returns array of all pokemon
        function getAll() {
            return pokemonList; 
        }
        
        //Adds pokemon to array
        function add(pokemon) {
            pokemonList.push(pokemon);
        }

        //Logs details of pokemon to the modal and console
        function showDetails(pokemon) {
            loadDetails(pokemon).then(function () {
                console.log(pokemon);
                showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
            });
        }
        
        //Create loading message
        function showLoadingMessage() {
            let loadingMessage = console.log("Loading...");
        };            
        
        //Hide loading message
        function hideLoadingMessage() {
            let loadingMessage = null;
        }

        //Show details of pokemon in he JS console when pokemon is clicked in the UI
        function addListener(button, pokemon) {
            $('button').on("click", function (event) {
            showDetails(pokemon);
            });
        }

        //Create button
        function addListItem(pokemon) {
            let pokemonList = $('.pokemon-list');
            let listItem = $('<li class="group-list-item"></li');
            let button = $('<button class="btn btn-primary"></button>'); 
            button.innerText = pokemon.name;
            button.addClass('pokemonButton');
            listItem.append(button);
            pokemonList.append(listItem);
            addListener(button, pokemon);
            }

        //Fetch data from pokemon API
        function loadList() {
            showLoadingMessage();
            return fetch(apiUrl).then(function (response) {
                return response.json();
            }).then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                        add(pokemon);
                        hideLoadingMessage();
                    });
                    }).catch(function (e) {
                        console.error(e);
                        hideLoadingMessage();
                })
            }
            
            function loadDetails (item) {
                showLoadingMessage();
                let url = item.detailsUrl;
                return fetch(url).then(function (response) {
                    return response.json();
                }).then(function (details) {
                    //add pokemon details to the item
                    item.imageUrl = details.sprites.front_default;
                    item.height = details.height;
                    item.types = details.types;
                    hideLoadingMessage();
                }).catch(function (e) {
                    console.error(e);
                    hideLoadingMessage();
                });
            }

            //Create the modal
            function showModal(title, text, image) {
                let modalBody = $(".modal-body");
                let modalTitle = $(".modal-title");
                let modalHeader = $(".modal-header");
                
                //Empty modal's title and body to make sure it clears each time that you open it
                modalTitle.empty();
                modalBody.empty();

                //define element for modal's name
                let nameElement = $("<h1>" + item.name + "</h1");

                //define element for modal's image
                let imageElementFront = $('<img class="modal-img" style="width:50%">');
                imageElementFront.attr("src", item.imageUrlFront);
                let imageElementBack = $('<img class="modal-img" style="width:50%">');
                imageElementBack.attr("src", item.imageUrlBack);

                //define element for modal's height
                let heightElement = $("<p>" + "height : " + item.height + "<p>");

                //define element for modal's weight
                let weightElement = $("<p>" + "weight : " + item.weight + "</p>");

                //define element for modal's types
                let typesElement = $("<p>" + "types : " + item.types + "</p>");

                //define element for modal's abilities
                let abilitiesElement = $("<p>" + "abilities : " + item.abilities + "</p>");

                //append name element to modal title and other elements to modal's body
                modalTitle.append(nameElement);
                modalBody.append(imageElementFront);
                modalBody.append(imageElementBack);
                modalBody.append(heightElement);
                modalBody.append(weightElement);
                modalBody.append(typesElement);
                modalBody.append(abilitiesElement);

                let modalContainer = document.querySelector('#modal-container');
                modalContainer.innerHTML = '';

                let modal = document.createElement('div');
                modal.classList.add('modal');
        
                // Add the new modal content
                let closeButtonElement = document.createElement('button');
                closeButtonElement.classList.add('modal-close');
                closeButtonElement.innerText = 'Close';
                closeButtonElement.addEventListener('click', hideModal);

                let titleElement = document.createElement('h1');
                titleElement.innerText = title;

                let contentElement = document.createElement('p');
                contentElement.innerText = text;

                let imageElement = document.createElement('img');
                imageElement.src = image;
       
                modal.appendChild(closeButtonElement);
                modal.appendChild(titleElement);
                modal.appendChild(contentElement);
                modal.appendChild(imageElement);
                modalContainer.appendChild(modal);

                modalContainer.classList.add('is-visible');
            };

                //Hide Modal
                function hideModal() {
                    let modalContainer = document.querySelector('#modal-container');
                    modalContainer.classList.remove('is-visible');
                }

                //Hide Modal when esc key is clicked
                window.addEventListener('keydown', (e) => {
                    let modalContainer = document.querySelector('#modal-container');
                    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                        hideModal();
                    }
                }); 

                /*modalContainer.addEventListener('click', (e) => {
                    let target = e.target;
                    if (target === modalContainer) {
                        hideModal();
                    }   
                });*/
        
       
            return {
                getAll: getAll,
                add: add,
                addListItem: addListItem,
                loadList: loadList,
                loadDetails: loadDetails,
                addListener: addListener,
                showModal: showModal
            };
        })();

       pokemonRepository.loadList().then(function() {
            //fetches data from the API and adds each Pokemon in the fetched data to array via add()
        
            pokemonRepository.getAll().forEach(function(pokemon) {
                pokemonRepository.addListItem(pokemon);
            });
        });
 
