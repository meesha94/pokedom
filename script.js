console.log("working");
import pokemonArray from "./data/pokemon.js";

const pokemons = (pokemon) => {
  return `
    <div class = "card">
    <img class="card__image" src="${pokemon.sprite}" alt="${pokemon.name}"></img>
    <div class ="card__content">
    <p class="card__heading">${pokemon.name}</p>
    <p class="card__text">${pokemon.types}</p>
    </div>
    </div>
`;
};
const container = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
  container.innerHTML += pokemons(pokemon);
});
