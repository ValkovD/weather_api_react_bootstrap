import React from 'react'

const CityItem = ({ index, cities }) => {

  return (
    <div>
      <div className="card card-body mb-2" id={index}>
        <div className="row">
          <div className="col-md-6">
            <input type="radio" className="form-check-input" name="optionsRadios" id={index} />
            <h4>{cities[index].name}</h4>
          </div>
          <div className="col-md-6">
            <h5><span className="badge bg-dark">Contry: {cities[index].country}</span></h5>
            <h5><span className="badge bg-dark">State: {cities[index].state}</span></h5>
            <span className="badge bg-success">Lat {cities[index].lat}</span>
            <span className="badge bg-success">Lon {cities[index].lon}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityItem
