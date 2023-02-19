import React, { useState, useEffect } from "react";
import axios from "axios";

function PokemonList({ page, setPage, perPage }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${
          (page - 1) * perPage
        }`
      )
      .then((response) => {
        setPokemonList(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [page, perPage]);

  return (
    <div>
      <h2>Pokemon List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid-container">
          {pokemonList.map((pokemon) => (
            <div key={pokemon.name}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.split("/")[6]
                }.png`}
                alt={pokemon.name}
              />
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      )}
      <div className="button-container">
        <button onClick={() => setPage((page) => Math.max(page - 1, 1))}>
          Previous Page
        </button>
        <button onClick={() => setPage((page) => page + 1)}>Next Page</button>
      </div>
    </div>
  );
}

export default PokemonList;
