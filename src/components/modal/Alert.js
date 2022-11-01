import React from 'react'

const Alert = ({ alert }) => {
  return (
    alert !== null ? (
      <div className="alert alert-danger mt-3" role="alert">
        Type City Name !!!
      </div>) : null
  )
}

export default Alert
