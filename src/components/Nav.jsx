import React from "react";
import stylesS from './Nav.module.css';
import SearchBar from './SearchBar.jsx';

function Nav({ onSearch }) {
  // acá va tu código
  return (
    <div id={stylesS.navy}>
      <h1 id={stylesS.tittlePage}>Climate App</h1>
      <div id={stylesS.theSearch}>
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  );
}

export default Nav;
