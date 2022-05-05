import React from "react";
import stylesS from './Nav.module.css';
import SearchBar from './SearchBar.jsx';

function Nav({ onSearch }) {
  // acá va tu código
  return (
    <div id={stylesS.navy}>
      <div id={stylesS.n}>
        <img id={stylesS.icon} src="https://cdn.discordapp.com/attachments/706958964126122014/971864972487442442/temperature_icon.png" alt=""></img>
        <h1 id={stylesS.tittlePage}>Climate App</h1>  
      </div>
      <div id={stylesS.theSearch}>
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  );
}

export default Nav;
