import React from 'react';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav id="navie">
      <div>
        <SearchBar onSearch={(cities) => alert(cities)}/>
      </div>
    </nav>
      <div id="zeRow">
        <Cards cities={data}/>
      </div>
    </div>
  );
}

export default App;
