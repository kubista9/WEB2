import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination'

//useState -> hook 
//the hook takes an initial state value as an argument and returns an updated state value, whenever the setter function is called 
function PokemonDetails() {
const [pokemon, setPokemon] = useState([]);
const [activePage, setActivePage] = useState(1);
const [itemsCountPerPage, setItemsCountPerPage] = useState(20);

useEffect( () => {
  const fetchPokemon = async () => {
    const offset = (activePage - 1) * itemsCountPerPage;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${itemsCountPerPage}&offset=${offset}`);
    const data = await response.json();
    const pokemonDataArray = await Promise.all(data.results.map(pokemon => 
      fetch(pokemon.url).then(response => response.json())
      ));
    const pokemonDetails = pokemonDataArray.map(pokemonData => ({
      name: pokemonData.name,
      id: pokemonData.id,
      type: pokemonData.types[0].type.name,
      image: pokemonData.sprites.frontDefault
    }));  
    setPokemon(pokemonDetails);
  };
  fetchPokemon();
 }, [activePage, itemsCountPerPage]);

 const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
 };

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
    <Pagination
    activePage={activePage}
    itemsCountPerPage={itemsCountPerPage}
    totalItemsCount={pokemon.length}
    pageRangeDisplayed={5}
    onChange={handlePageChange}
    />
  </div>
);
}

export default PokemonDetails;