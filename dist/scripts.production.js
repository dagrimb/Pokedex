let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=150";function o(e){t.push(e)}function n(t){let e=$("<p>Close Profile</p>"),o=$("close"),n=$(".modal-body"),a=$("<h2>name: "+t.name+"</h2>"),i=$("<h4>height: "+t.height+"</h4>"),l=$('<img class="modal-img" style="width:50%">');l.attr("src",t.imageUrl),n.empty(),l.empty(),e.empty(),$("modal").addClass("position-absolute");let r=$(".modal-header");r.append(e),r.append(o),n.append(a),n.append(i),n.append(l)}return $(document).ready(function(){$("#searchInput").on("keyup",function(){var t=$(this).val().toLowerCase();$(".card-title").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(t)>-1)})})}),{getAll:function(){return t},add:o,addListItem:function(t){pokemonRepository.loadDetails(t).then(function(){$("body").addClass("p-3 mb-2 bg-warning"),$(".row").addClass("p-3 mb-2 bg-primary");let e=$(".pokemon-list");e.addClass("list-group list-unstyled col-12 card pt-4 mb-2 bg-warning");let o=$('<div class="group-list-item card-body d-flex justify-content-center p-3.5"></div>'),a=$('<h3 class="card-title text-primary front-weight-bold text-uppercase text-center">'+t.name+"</>"),i=$('<button type="button" class="btn btn-primary list-group-item list-group-item-action text-center p-3 mb-2 bg-primary text-white" data-toggle="modal" data-target="#exampleModal" >'+t.name+" info</button>");e.append(a),a.append(o),a.append(i),i.on("click",function(){var e;e=t,pokemonRepository.loadDetails(e).then(function(){console.log(e),n(e)})})})},loadList:function(){return $.ajax(e).then(function(t){t.results.forEach(function(t){o({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:function(t){let e=t.detailsUrl;return $.ajax(e).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=e.types}).catch(function(t){console.error(t)})},showModal:n}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});