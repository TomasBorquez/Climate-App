import React from 'react';
import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {
  if (cities) {
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
  } else {
    return <div>Sin ciudades</div>;
  }
}