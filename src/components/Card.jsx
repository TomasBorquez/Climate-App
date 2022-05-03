import React from 'react';

export default function Card(props) {
  // acá va tu código
  const {img, max, min, onClose, name} = props
  return (
    <div className="card">
      <div id="button">
        <button id="close" onClick={onClose}>x</button>
      </div>
      <h2>{name}</h2>
      <ul>
        <li>Max: {max}</li>
        <li>Min: {min}</li>
        <li><img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="algo"/></li>
      </ul>
    </div>
  )};