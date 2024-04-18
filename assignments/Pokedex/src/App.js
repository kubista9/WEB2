import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';

function PokemonDetails() {
  const [pokemon, setPokemon] = useState([]);
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

        const pokemonDetails = pokemonDataArray.map((pokemonData) => ({
          name: pokemonData.name,
          id: pokemonData.id,
          type: pokemonData.types[0]?.type.name, // Safely access type name
          image: pokemonData.sprites.front_default,
        }));

        setPokemon(pokemonDetails);
        setTotalPokemonCount(data.count); // Set total count of Pokemon
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemon();
  }, [activePage, itemsCountPerPage]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div>
      <div id="pokemons">
        {pokemon.map((pokemonData, index) => (
          <div key={index} className="pokemon-card">
            <p>{pokemonData.name}</p>
            <p>{pokemonData.id}</p>
            <p>{pokemonData.type}</p>
            <img src={pokemonData.image} alt={pokemonData.name} />
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
