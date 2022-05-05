import React from 'react';
import Card from './Card.jsx';
import styles from "./Cards.module.css"

export default function Cards({ cities, onClose }) {
  console.log(cities.length)
  if (cities.length) {
    return (
      <>
        {cities.map(c => (
          <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={c.id}
          />
        ))}
      </>
    );
  }
  return (<div id={styles.empty}><h1>Sin ciudades</h1></div>)
}