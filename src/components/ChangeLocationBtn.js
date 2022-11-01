import React from 'react'

const ChangeLocationBtn = (props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary mt-5 bg-secondary" data-bs-toggle="modal" data-bs-target="#locModal">
        Change Location
      </button>
    </div>
  )
}

export default ChangeLocationBtn
