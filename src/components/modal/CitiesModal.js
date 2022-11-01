import React from 'react'
import CityItem from './CityItem'
import Loading from '../Loading'

const CitiesModal = (props) => {
  if (props.loading) {
    return <Loading />
  }
  else {
    return (
      <div>
        {props.cities.map((city, index) => <CityItem key={index} index={index} cities={props.cities} />)}
      </div>
    )
  }

}

export default CitiesModal
