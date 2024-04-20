import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';

function PokemonDetails() {
    const [pokemonList, setPokemonList] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(20);
    const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  
    useEffect(() => {
      const fetchPokemon = async () => {
        try {
          const offset = (activePage - 1) * itemsCountPerPage;
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${itemsCountPerPage}&offset=${offset}`
          );
          const data = await response.json();
  
          const pokemonDataArray = await Promise.all(
            data.results.map((pokemon) =>
              fetch(pokemon.url).then((response) => response.json())
            )
          );
  
          setPokemonList(pokemonDataArray);
          setTotalPokemonCount(data.count);
        } catch (error) {
          console.error('Error fetching Pokémon:', error);
        }
      };
  
      fetchPokemon();
    }, [activePage, itemsCountPerPage]);
  
    const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
    };
  
    const handlePokemonClick = (pokemon) => {
      const additionalInfo = `Type(s): ${pokemon.types.map((type) => type.type.name).join(', ')}\n`
        + `Stats:\n`
        + `${pokemon.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join('\n')}\n`
        + `Abilities: ${pokemon.abilities.map((ability) => ability.ability.name).join(', ')}\n`
        + `Height: ${pokemon.height / 10} m\n`
        + `Weight: ${pokemon.weight / 10} kg`;
  
      alert(additionalInfo);
    };

    return (
        <div className='home-page'>
              <div id="pokemons">
              {pokemonList.map((pokemon, index) => (
                <div key={index} className="pokemon-card" onClick={() => handlePokemonClick(pokemon)}>
                  <p>{pokemon.name}</p>
                  <p>{pokemon.id}</p>
                  <p>{pokemon.types.map((type) => type.type.name)}</p>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
              ))}
            </div>
  
            <div id="pagination-container">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={totalPokemonCount}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass="pagination-item"
                linkClass="pagination-link"
              />
              </div>
        </div>
    );
}

export default PokemonDetails;