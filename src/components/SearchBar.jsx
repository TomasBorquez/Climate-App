import React, {useRef} from 'react';
import stylesS from "./SearchBar.module.css"

export default function SearchBar(props) {
  // acá va tu código
  const {onSearch} = props
  const city = useRef()
  return (
    <div id={stylesS.navy}>
        <h1 id={stylesS.tittlePage}>Climate App</h1>
        <div id={stylesS.theSearch}>
          <input id={stylesS.input} ref={city} type="text" placeholder="Ciudad..."></input>
          <input className='btn-outline-success' id={stylesS.add} type="submit" value="Agregar" onClick={() => onSearch(city.current.value)}></input>
        </div>
    </div>
  )
};