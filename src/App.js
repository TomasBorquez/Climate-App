import React, { useState } from 'react';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import './App.css';


function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${"f7f89a383d33ca281bb1996ac2e91ad3"}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if (recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        var checkCities = (cities, cuC) => cities.filter(c => c.name === cuC.name);
        // now check
        if (checkCities(cities, ciudad).length) return alert("Esta ciudad ya existe")
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className="App">
      <nav id="navie">
        <Nav onSearch={onSearch}/>
      </nav>
      <div id="zeRow">
        <Cards cities={cities} onClose={onClose}/>
      </div>
    </div>
  );
}


export default App;
