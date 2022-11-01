import React from 'react'
import Loading from '../components/Loading';

const WeatherData = (props) => {

  const { feels_like, humidity, pressure, temp, temp_max, temp_min } = props.city.main;
  const { speed } = props.city.wind
  const { main, description } = props.city.weather[0];


  if (props.loading) {
    return <Loading></Loading>
  }
  else {
    return <div>

      <header>
        <h1 id="w-location">{props.city.name}</h1>
        <h3 className="text-dark" id="w-desc">{main}</h3>
        <h3 id="w-string">{description}</h3>
      </header>

      <ul id="w-details" className="list-group mt3">
        <li className="list-group-item">{`Temperature ${temp} deg`}</li>
        <li className="list-group-item">{`Feels Like ${feels_like} deg`}</li>
        <li className="list-group-item">{`Humidity ${humidity}`}</li>
        <li className="list-group-item">{`Atmospheric pressure ${pressure} mBar`}</li>
        <li className="list-group-item" id="w-wind">{`Wind speed ${speed} m/s`}</li>
        <li className="list-group-item">{`Min temperature ${temp_min} deg`}</li>
        <li className="list-group-item">{`Max temperature ${temp_max} deg`}</li>
      </ul>
    </div>
  }
}

export default WeatherData
