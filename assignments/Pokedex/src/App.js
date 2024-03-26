import React, { useState, useEffect } from 'react';

//useState -> hook 
//the hook takes an initial state value as an argument and returns an updated state value, whenever the setter function is called 
function PokemonDetails() {
 const [pokemon, setPokemon] = useState({});

 useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(pokemonData => {
        const pokemonName = pokemonData.name;
        const pokemonId = pokemonData.id;
        const pokemonType = pokemonData.types[0].type.name;
        const pokemonImage = pokemonData.sprites.front_default;

        setPokemon({
          name: pokemonName,
          id: pokemonId,
          type: pokemonType,
          image: pokemonImage
        });
      })
      .catch(error => {
        console.error("There was a problem with your fetch operation", error);
      });
 }, []);
// the empty array is to tell react that effect does not depend on any values fomr prps therefore the callback function is only called once

 return (
    <div>
      <div>{pokemon.name}</div>
      <div>{pokemon.id}</div>
      <div>{pokemon.type}</div>
      <div>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    </div>
 );
}

export default PokemonDetails;