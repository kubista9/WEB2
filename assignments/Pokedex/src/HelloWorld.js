import React, { useState, useEffect } from 'react';

function PokemonDetails() {
 const [pokemon, setPokemon] = useState([]);

 useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        // Map over the results to fetch details for each Pokémon
        return Promise.all(data.results.map(pokemon => fetch(pokemon.url).then(res => res.json())));
      })
      .then(pokemonDataArray => {
        // Process the array of Pokémon data
        const pokemonDetails = pokemonDataArray.map(pokemonData => ({
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

 return (
    <div>
      {pokemon.map((pokemon, index) => (
        <div key={index}>
          <div>{pokemon.name}</div>
          <div>{pokemon.id}</div>
          <div>{pokemon.type}</div>
          <div>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        </div>
      ))}
    </div>
 );
}

export default PokemonDetails;
