import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import CitiesModal from './CitiesModal';
import Alert from './Alert';
import ShowWeatherBtn from './ShowWeatherBtn';
const Modal = (props) => {

  const [inputCityModal, setInputCity] = useState('');
  const [cities, setCities] = useState([]);
  const [cityWeather, setCityWeather] = useState({});
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null);
  const [showBtn, setShowBtn] = useState(null);


  // Actions when Search button is hit
  const actionSearch = () => {
    if (inputCityModal === '') {
      showAlert()
    } else {
      getCityCoordinates(inputCityModal);
      setShowBtn(null)
    }
  }

  // Get city coordinates based on input
  const getCityCoordinates = async (city) => {
    setLoading(true)
    const latLonRes = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=de9d1625a98a69716b4a02f7b584f2e4`)
    setCities(latLonRes.data);
    console.log(latLonRes.data);
    setLoading(false)
  }

  // Show Alert
  const showAlert = () => {
    setAlert('Alert');
    setTimeout(() => { setAlert(null) }, 2000)
  }

  // Get weather for the selected city
  const getWeather = async (lat, lon) => {
    const cityRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=de9d1625a98a69716b4a02f7b584f2e4`);
    setCityWeather(cityRes.data)
    console.log(cityRes.data);
  }

  // Select city from result by radio button and fetch chosen city data
  const selectCityGetweather = (e) => {
    let _selectedCity;
    if (e.target.checked) {
      _selectedCity = cities[e.target.id];
      console.log(cities[e.target.id]);
      getWeather(_selectedCity.lat, _selectedCity.lon)
      setShowBtn('show')
    }
  }

  return (
    <div className="modal fade" id="locModal" tabIndex="-1" aria-labelledby="locModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="locModalLabel">Choose Location</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="w-form">
              <div className="form-group">
                <label htmlFor="city" className='mb-3'>City</label>
                <input type="text" id="city" className="form-control mb-4" onChange={(e) => {
                  setInputCity(e.target.value);
                }} />
              </div>
            </form>
            <div id="cities-modal" onClick={e => {
              selectCityGetweather(e);
            }}>
              <Alert alert={alert} />
              <CitiesModal
                cities={cities}
                loading={loading}
                inputCityModal={inputCityModal}
                setAlert={setAlert}
              />
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="bg-danger bg-gradient" data-bs-dismiss="modal">Close</button>
            <button onClick={(e) =>
              actionSearch()
            } type="button" className="bg-warning bg-gradient">Search</button>
            <ShowWeatherBtn
              showBtn={showBtn}
              cityWeather={cityWeather}
              fromModal={e => props.fromModal(cityWeather)}
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Modal

