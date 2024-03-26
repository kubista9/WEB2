import React, { useState, useEffect } from 'react';

//useState -> hook 
//the hook takes an initial state value as an argument and returns an updated state value, whenever the setter function is called 
function PokemonDetails() {
const [pokemon, setPokemon] = useState([]);

 useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
  .then(response => response.json())
      .then(data => {
        return Promise.all(data.results.map(pokemon => 
          fetch(pokemon.url)
          .then(response => response.json())
          ))
      })
      .then(pokemonDataArray => {
        const pokemonDetails = pokemonDataArray.map( pokemonData => ({
          name: pokemonData.name,
          id: pokemonData.id,
          type: pokemonData.types[0].type.name,
          image: pokemonData.sprites.front_default
        }));
        setPokemon(pokemonDetails);
      })
      .catch(error => {
        console.error("There was a problem with your fetch operation", error);
      });
 }, []);
// the empty array is to tell react that effect does not depend on any values fomr prps therefore the callback function is only called once

return (
  <div id='paginator'>
    {pokemon.map((pokemon, index) => (
      <div key={index}>
        <p>{pokemon.name}</p>
        <p>{pokemon.id}</p>
        <p>{pokemon.type}</p>
        <div>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      </div>
    ))}
  </div>
);
}

export default PokemonDetails;