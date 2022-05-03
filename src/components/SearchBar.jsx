import React, {useRef} from 'react';

export default function SearchBar(props) {
  // acá va tu código
  const {onSearch} = props
  const city = useRef()
  return (
    <div>
        <input id="input" ref={city} type="text" placeholder="Ciudad..."></input>
        <input className='btn-outline-success' id="add" type="submit" value="Agregar" onClick={() => onSearch(city.current.value)}></input>
    </div>
  )
};