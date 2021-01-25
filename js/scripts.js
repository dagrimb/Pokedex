


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
            pokemonRepository.loadDetails(pokemon).then(function () {
                console.log(pokemon);
                showModal(title, text);
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



        //Create button
        function addListItem(pokemon) {
            pokemonRepository.loadDetails(pokemon).then(function () {
                let bodyStyles = $('body');
                bodyStyles.addClass('p-3 mb-2 bg-warning');
                let row = $('.row');
                row.addClass('p-3 mb-2 bg-primary');
                let pokemonList = $('.pokemon-list');
                pokemonList.addClass('list-group list-unstyled col-6 card pt-4 mb-2 bg-warning');
                let secondCol = $('<ul class="pokemon-list"></>');
                let listItem = $('<li class="group-list-item card-body d-flex justify-content-center p-3.5"></li');
                let cardTitle = $("<h3 class='card-title text-primary front-weight-bold text-uppercase text-center'>" + pokemon.name + "</>");
                let button = $("<button type='button' class='btn btn-primary ' data-toggle='modal' data-target='#exampleModal' >" + pokemon.name + " info</button>");
                
                listItem.append(button);
                pokemonList.append(cardTitle);
                row.append(secondCol);
                pokemonList.append(listItem);

                //Show details of pokemon in he JS console when pokemon is clicked in the UI
                button.on("click", function (event) {
                    showDetails(pokemon);
                });
            });
        };        
            
        

        //Fetch data from pokemon API
        function loadList() {
            showLoadingMessage();
            return $.ajax(apiUrl).then(function (json) {
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
                return $.ajax(url).then(function (details) {
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
            function showModal(title, text) {



                let modal = $('.modal-content');

                let modalHeader = $('.modal-header');
        
                // Add the new modal content
                let closeButtonElement = $('close');
                $( "closeButtonElement" ).text('Close');

                let titleElement = $('.modal-title');
                $( "titleElement" ).text(title);

                let modalBody = $('.modal-body');
                $( "modalBody" ).text(text);
       
                modalHeader.append(closeButtonElement);
                modalHeader.append(titleElement);
                modalBody.append(contentElement);
                modalBody.append(imageElement);
                modalBody.append(pokemonHeight);
                


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
                showModal: showModal
            };
        })();

       pokemonRepository.loadList().then(function() {
            //fetches data from the API and adds each Pokemon in the fetched data to array via add()
        
            pokemonRepository.getAll().forEach(function(pokemon) {
                pokemonRepository.addListItem(pokemon);
            });
        });
 
