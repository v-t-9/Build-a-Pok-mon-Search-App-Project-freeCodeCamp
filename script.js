const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const imgContainer = document.getElementById("img-container");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");



const fetchData = async () => {
    try {
      const searchInput = document.getElementById("search-input").value.toLowerCase();
      console.log(searchInput)
      const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput}`);
      const data = await res.json();
      types.innerHTML = " ";
      render(data);
      console.log(data)
    } catch (err) {
      alert("Pokémon not found")
      console.log(err);
    }
};

const render = (data) => {
 
    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonId.textContent = `${data.id}`;
    imgContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}"></img>`
    weight.textContent = `${data.weight}`;
    height.textContent = `${data.height}`;
    hp.textContent = `${data.stats[0].base_stat}`;
    attack.textContent = `${data.stats[1].base_stat}`;
    defense.textContent = `${data.stats[2].base_stat}`;
    specialAttack.textContent = `${data.stats[3].base_stat}`;
    specialDefense.textContent = `${data.stats[4].base_stat}`;
    speed.textContent = `${data.stats[5].base_stat}`;
    for(let i=0; i < data.types.length; i++){
        types.innerHTML += `<span>${data.types[i].type.name.toUpperCase()} </span>`;
    }



}


searchBtn.addEventListener("click", e =>{
    e.preventDefault(),
    fetchData()
}) 