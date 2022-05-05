import React from 'react';
import stylesC from "./Card.module.css"

export default function Card( {img, max, min, onClose, name} ) {
  // acá va tu código
  return (
    <div className={stylesC.card}>
      <div className={stylesC.closeBtnPos}>
        <button className={stylesC.closeBtn} onClick={onClose}>x</button>
      </div>
      <h2>{name}</h2>
      <ul>
        <li><img src={"https://openweathermap.org/img/wn/" + img + "@2x.png"} alt=""/></li>
        <li id={stylesC.average}>Avg: {(max + min) / 2}°</li>
        <li>Min: {min}°  Max: {max}°</li>
      </ul>
    </div>
  )
};