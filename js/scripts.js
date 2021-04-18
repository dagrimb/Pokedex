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
    
    //Search for listed pokemon via the Bootstrap search bar
    $(document).ready(function(){
      $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".card-title").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    //Create button
    function addListItem(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
        let bodyStyles = $('body');
        bodyStyles.addClass('p-3 mb-2 bg-warning');
        let row = $('.row');
        row.addClass('p-3 mb-2 bg-primary');
        let pokemonGroup = $('.pokemon-list');
        /*NEXT: try to 
        
        .pokemon-list (div)
          div
            <h3>NAME (if that doesn't work, try targeting the div with a particular class name)  
              <div class="group-list-item card-body d-flex justify-content-center p-3.5" style=""><button type="button" class="btn btn-primary list-group-item list-group-item-action text-center p-3 mb-2 bg-primary text-white" data-toggle="modal" data-target="#exampleModal">bulbasaur info</button></div>
              <button type="button" class="btn btn-primary list-group-item list-group-item-action text-center p-3 mb-2 bg-primary text-white" data-toggle="modal" data-target="#exampleModal">bulbasaur info</button>
            </h3>
          div
              */
        pokemonGroup.addClass('list-group list-unstyled col-12 card pt-4 mb-2 bg-warning');
        let listItem = $('<div class="group-list-item card-body d-flex justify-content-center p-3.5"></div>');
        let cardTitle = $('<h3 class="card-title text-primary front-weight-bold text-uppercase text-center">' + pokemon.name + '</>');
        let button = $('<button type="button" class="btn btn-primary list-group-item list-group-item-action text-center p-3 mb-2 bg-primary text-white" data-toggle="modal" data-target="#exampleModal" >' + pokemon.name + ' info</button>');
        //you want to append the listItem & button to h3 with the card-title class        
        pokemonGroup.append(cardTitle);
        cardTitle.append(listItem);
        cardTitle.append(button);

            //Show details of pokemon in he JS console when pokemon is clicked in the UI
            button.on('click', function () {
                showDetails(pokemon);
            });
        });
    }        
            
    //Logs details of pokemon to the modal and console
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            console.log(item);
            showModal(item);
        });
    }

    //Fetch data from pokemon API
    function loadList() {
        //showLoadingMessage();
        return $.ajax(apiUrl).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                //hideLoadingMessage();
            });
        }).catch(function (e) {
                console.error(e);
                //hideLoadingMessage();
            })
        }
            
        function loadDetails (item) {
            //showLoadingMessage();
            let url = item.detailsUrl;
            return $.ajax(url).then(function (details) {
                //add pokemon details to the item
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
                //hideLoadingMessage();
            }).catch(function (e) {
                    console.error(e);
                    //hideLoadingMessage();
                });
        }

        //Create the modal
        function showModal(item) {
            let closeOption = $('<p>Close Profile</p>');  
            let closeButtonElement = $('close');
            let modalBody = $('.modal-body');
            let titleElement = $('<h2>' + 'name: ' + item.name + '</h2>');
            let contentElement = $('<h4>' + 'height: ' + item.height + '</h4>');
            let imageElement = $('<img class="modal-img" style="width:50%">');
            imageElement.attr('src', item.imageUrl);

            modalBody.empty();
            imageElement.empty();
            closeOption.empty(); 

            let modalContainer = $('modal');
            modalContainer.addClass('position-absolute');
            let modalHeader = $('.modal-header');

            modalHeader.append(closeOption);
            modalHeader.append(closeButtonElement);
            modalBody.append(titleElement);
            modalBody.append(contentElement);
            modalBody.append(imageElement);
                
        }

        /*Hide Modal
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
        }); */

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
 
