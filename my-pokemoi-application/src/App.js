import React, { useState } from 'react';
import PokemonList from './components/PokemonList.jsx';
import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  return (
    <div className="container">
      <h1>Pokemon App</h1>
      <PokemonList page={page} setPage={setPage} perPage={perPage} />
      <label className= "button-container">
        Items per page:
        <input type="number" value={perPage} onChange={event => setPerPage(Number(event.target.value))} />
      </label>
    </div>
  );
}

export default App;




