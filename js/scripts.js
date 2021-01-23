


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
            pokemonRepository.loadDetails(pokemon).then(function () {
                let pokemonList = $('.pokemon-list');
                pokemonList.addClass('list-group list-unstyled col-sm-6 card');    
                let listItem = $('<li class="group-list-item card-body"></li');
                let cardTitle = $("<h5 class='card-title>" + pokemon.name + "</h5>");
                let button = $("<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal' >" + pokemon.name + "</button>"); 
                
                listItem.append(button);
                listItem.append(cardTitle);
                pokemonList.append(listItem);
            })
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

                let modalContainer = $('.modal fade');
                $(modalContainer).html('');

                let modal = $('.modal-content');

                let modalHeader = $('.modal-header');
        
                // Add the new modal content
                let closeButtonElement = $('close');
                $( "closeButtonElement" ).text('Close');

                let titleElement = $('.modal-title');
                $( "titleElement" ).text(title);


                let modalBody = $('.modal-body');

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
 
