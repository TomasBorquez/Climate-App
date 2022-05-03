import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <div id="zeSearch">
        <SearchBar onSearch={(cities) => alert(cities)}/>
      </div>
      <hr></hr>
      <div id="zeRow">
        <Cards cities={data} class={"zerow"}/>
      </div>
    </div>
  );
}

export default App;
