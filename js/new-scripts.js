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


var displayResults = function (forRun = pokemons) {

  elResultsList.innerHTML = '';
  var elForBasicTemplateFragment = document.createDocumentFragment();

  forRun.forEach(function (pokemon) {
    var elBasicTemplateClone = elBasicTemplate.cloneNode(true);

    elResultsList.innerHTML = '';
    $_('.js-pocemon__link', elBasicTemplateClone).dataset.id = pokemon.id;
    $_('.js-pocemon__title', elBasicTemplateClone).textContent = pokemon.name;
    $_('.js-pocemon__img', elBasicTemplateClone).src = pokemon.img;
    $_('.js-pocemon__img', elBasicTemplateClone).alt = pokemon.name;
    $_('.js-pocemon__img', elBasicTemplateClone).dataset.id = pokemon.id;
    $_('.js-pokemon__height', elBasicTemplateClone).textContent = pokemon.height;
    $_('.js-pokemon__genus', elBasicTemplateClone).textContent = pokemon.name;
    $_('.js-pokemon__kg', elBasicTemplateClone).textContent = pokemon.weight;
    $_('.js-pokemon__type', elBasicTemplateClone).textContent = pokemon.type.join(' | ');

    elForBasicTemplateFragment.appendChild(elBasicTemplateClone);
  });

  elResultsList.appendChild(elForBasicTemplateFragment);
};

var elResultsList = $_('.js-pokemon-list');
var elBasicTemplate = $_('.js-pocemon__template').content;

var elForm = $_('.js-site-header__form');
var elFormInput = $_('.js-site-header__input');

var pokemonTypeList = $_('.js-pokemons-filter__list');


displayResults();


elForm.addEventListener('submit', function (evt){
  evt.preventDefault();
})


elFormInput.addEventListener('input', function(){

  var inputRegExp = new RegExp (elFormInput.value, 'gi');

  var searchResult = pokemons.filter(function (pokemon) {
    return pokemon.name.match(inputRegExp);
  });

  displayResults(searchResult);
});


var pokemonsTypeArray = [];

pokemons.forEach(function (pokemon){
  pokemon.type.forEach(function (typeItem){
    if (!pokemonsTypeArray.includes(typeItem)){
      pokemonsTypeArray.push(typeItem);
    };
  });
});


var typeFragment = document.createDocumentFragment();

pokemonsTypeArray.forEach(function (pokemonType){

  var elTypeItem = createElement('li', 'js-pokemons-filter__item pokemons-filter__item list-group shadow mb-2');
  var elTypeItemLink = createElement('a', 'js-pokemons-filter__link btn rounded font-weight-bold text-black-50', pokemonType);
  elTypeItemLink.dataset.id = pokemonType;

  elTypeItem.appendChild(elTypeItemLink);
  typeFragment.appendChild(elTypeItem);
});

pokemonTypeList.appendChild(typeFragment);

pokemonTypeList.addEventListener('click', function (evt) {
  // console.log(evt.target)

  if (evt.target.matches('.js-pokemons-filter__link')) {
    // console.log(evt.target.dataset.id);
    var pokemonTypeItem = pokemons.filter(function (pokemon) {
      var matchCategory = evt.target.dataset.id === "all" || pokemon.type.includes(evt.target.dataset.id);
      return matchCategory;
    })
    // console.log(pokemonTypeItem);

    displayResults(pokemonTypeItem);
  }
});


elResultsList.addEventListener('click', function(evt){
  // console.log(evt.target)

  if (evt.target.matches('.js-pocemon__link') || evt.target.matches('img')){
    // console.log(evt.target.dataset.id);
    var pokemonIdItem = pokemons.find(function (pokemon) {
      return Number(evt.target.dataset.id) === pokemon.id;
    })
    // console.log(pokemonIdItem);

    $_('.js-modal__pokemon-img').src = pokemonIdItem.img;
    $_('.js-modal__pokemon-img').alt = pokemonIdItem.name;
    $_('.js-modal__pokemon-name').textContent = pokemonIdItem.name;
    $_('.js-modal__pokemon-type').textContent = pokemonIdItem.type.join(' |  ');
    $_('.js-modal__pokemon-hight').textContent = pokemonIdItem.height;
    $_('.js-modal__pokemon-weight').textContent = pokemonIdItem.weight;
    $_('.js-modal__pokemon-egg').textContent = pokemonIdItem.egg;
    $_('.js-modal__pokemon-multipliers').textContent = pokemonIdItem.multipliers;
  }
});