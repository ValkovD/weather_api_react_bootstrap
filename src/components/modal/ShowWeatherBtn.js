import React from 'react'

const ShowWeatherBtn = (props) => {
  return (
    props.showBtn !== null ?
      <button id="w-change-btn" type="button" className="bg-success bg-gradient" data-bs-dismiss="modal"
        onClick={e => {
          props.fromModal(props.cityWeather)
        }}
      >Show Weather</button> : null
  )
}

export default ShowWeatherBtn
