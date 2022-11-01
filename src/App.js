import './App.css';
import WeatherData from './components/WeatherData';
import ChangeLocationBtn from './components/ChangeLocationBtn';
import Modal from './components/modal/Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PdeItLogo from './components/PdeItLogo';

const App = () => {

  const getWeather = async (lat, lon) => {
    setLoading(true)
    const cityRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=de9d1625a98a69716b4a02f7b584f2e4`);
    setCity(cityRes.data)
    setLoading(false)
  }

  // use effect on load immediate state update with real time data from api 
  useEffect(() => { getWeather(25.7742, -80.1936) }, []);

  //Loading set 
  const [loading, setLoading] = useState(false)


  //  default app state for city hard coded so nt crash in the start
  const [city, setCity] = useState({ "coord": { "lon": -80.1936, "lat": 25.7742 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d" }], "base": "stations", "main": { "temp": 28.04, "feels_like": 31.3, "temp_min": 26.68, "temp_max": 29.45, "pressure": 1019, "humidity": 74 }, "visibility": 10000, "wind": { "speed": 3.13, "deg": 40, "gust": 0 }, "clouds": { "all": 40 }, "dt": 1667053560, "sys": { "type": 2, "id": 2009435, "country": "US", "sunrise": 1667042833, "sunset": 1667083294 }, "timezone": -14400, "id": 4164138, "name": "Miami", "cod": 200 });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md6 mx-auto text-center bg-primary mt-5 p-5 rounded">
          <WeatherData loading={loading} city={city} />
          <ChangeLocationBtn />
          <Modal fromModal={(cityWeather) => setCity(cityWeather)} />
        </div>
        <PdeItLogo />
      </div>
    </div>

  );
}

export default App;
