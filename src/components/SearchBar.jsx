import React from "react";
import stylesS from './SearchBar.module.css';

export default function SearchBar( {onSearch} ) {
  var object = {
    city: ""
  }
  
  var handleChange = (e) => {
    object.city = e.target.value
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      var elToChange = document.getElementById("SearchBar_input__6MjLt");
      elToChange.value = null
      onSearch(object.city);
      }}>
      {/* input bar */}
      <input 
      id={stylesS.input}
      type="text" 
      placeholder="Ciudad..."
      onChange={handleChange}
      />
      {/* this is the add button */}
      <input 
      id={stylesS.add}
      type="submit" 
      value="Agregar"
      />
    </form>
  );
}