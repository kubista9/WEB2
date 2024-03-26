import React, { useState, useEffect } from 'react';

function App() {
 const [pokemons, setPokemons] = useState([]);

 useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      setPokemons(data.results);
    };

    fetchPokemons();
 }, []);

 return (
    <div>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <img src={pokemon.url} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
 );
}

export default App;
