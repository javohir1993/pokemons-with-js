var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};

var getSmallYouTubeThumbnail = function (youtubeId) {
  return `http://i3.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
};

var getBigYouTubeThumbnail = function (youtubeId) {
  return `http://i3.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
};



var elFilterList = $_('.js-pokemons-filter__list');
var elFilterItem = $_('.js-pokemons-filter__item');
var elFilterLink = $_('.js-pokemons-filter__link');


var elPokemonList = $_('.js-pokemon-list');
var elPokemonTemplate = $_('.js-pocemon__template').content;
var elPokemonFragment = document.createDocumentFragment();


var elModalDialog = $_('.js-modal-dialog');
var elModalTemplate = $_('.js-modal__template').content;
var elModalFragment = document.createDocumentFragment();

var elForm = $_('.js-site-header__form');
var elInput = $_('.js-site-header__input');




var pokemonItems = pokemons.filter(function (pokemon) {
  return pokemon.name;
});


var test = pokemons.filter(function (pokemon) {
  return pokemon.name;
});

// elPokemonList.innerHTML = '';
test.forEach(function (pokemon) {
    var pokemonItem = elPokemonTemplate.cloneNode(true);

    $_('.js-pocemon__title', pokemonItem).textContent = pokemon.name;
    $_('.js-pocemon__img', pokemonItem).src = pokemon.img;
    $_('.js-pocemon__img', pokemonItem).alt = pokemon.name;
    $_('.js-pokemon__height', pokemonItem).textContent = pokemon.height;
    $_('.js-pokemon__kg', pokemonItem).textContent = pokemon.weight;
    $_('.js-pokemon__type', pokemonItem).textContent = pokemon.type.join(' ');
    $_('.js-pocemon__item', pokemonItem).dataset.pokemonId = pokemon.num;

    elPokemonFragment.appendChild(pokemonItem);
  });
  elPokemonList.appendChild(elPokemonFragment);

pokemonItems.forEach(function (modal) {
  var modalItem = elModalTemplate.cloneNode(true);

    $_('.js-modal__pokemon-img', modalItem).src = modal.img;
    $_('.js-modal__pokemon-img', modalItem).alt = modal.name;
    $_('.js-modal__pokemon-name', modalItem).textContent = modal.name;
    $_('.js-modal__pokemon-type', modalItem).textContent = modal.type.join(' ');
    $_('.js-modal__pokemon-hight', modalItem).textContent = modal.height;
    $_('.js-modal__pokemon-weight', modalItem).textContent = modal.weight;
    $_('.js-modal__pokemon-egg', modalItem).textContent = modal.egg;
    $_('.js-modal__pokemon-multipliers', modalItem).textContent = modal.multipliers;

  elModalFragment.appendChild(modalItem);
});
elModalDialog.appendChild(elModalFragment);


elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var regExp = new RegExp(elInput.value, 'gi');

  var pokemonItems = pokemons.filter(function (pokemon) {
    return pokemon.name.match(regExp);
  });

  elPokemonList.innerHTML = '';
  pokemonItems.forEach(function (pokemon) {
    var pokemonItem = elPokemonTemplate.cloneNode(true);

    $_('.js-pocemon__title', pokemonItem).textContent = pokemon.name;
    $_('.js-pocemon__img', pokemonItem).src = pokemon.img;
    $_('.js-pocemon__img', pokemonItem).alt = pokemon.name;
    $_('.js-pokemon__height', pokemonItem).textContent = pokemon.height;
    $_('.js-pokemon__kg', pokemonItem).textContent = pokemon.weight;
    $_('.js-pokemon__type', pokemonItem).textContent = pokemon.type.join(' ');
    $_('.js-pocemon__item', pokemonItem).dataset.pokemonId = pokemon.num;

    elPokemonFragment.appendChild(pokemonItem);
  });
  elPokemonList.appendChild(elPokemonFragment);
});