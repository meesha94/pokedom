
import pokemonArray from "./data/pokemon.js";

const pokemons = (pokemon) => {
  return `
    <div class = "card">
    <img class="card__image" src="${pokemon.sprite}" alt="${pokemon.name}"></img>
    <div class ="card__content">
    <p class="card__heading">${pokemon.name}</p>
    <p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types.join(" and ")} type pokemon.</p>
    </div>
    </div>
`;
};
const container = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
  container.innerHTML += pokemons(pokemon);
});

//filter by available types
//so far this diaplays all fire types below all pokemon cards 
//added a button so cards of a certain type are only displayed when clicked

let button = document.getElementsByTagName("button")[0];

const fireType = pokemonArray.filter(pokemon => {
    return pokemon.types.includes("fire")
});

 
button.addEventListener("click", () => {
    const pokemonTypes = (pokemon) => {
        return `
          <div class = "card">
          <img class="card__image" src="${pokemon.sprite}" alt="${pokemon.name}"></img>
          <div class ="card__content">
          <p class="card__heading">${pokemon.name}</p>
          <p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types.join(" and ")} type pokemon.</p>
          </div>
          </div>
      `;
      };

      const container2 = document.querySelector(".card-container");
  
      fireType.forEach((pokemon) => {
        container2.innerHTML += pokemonTypes(pokemon);
      });
})





