import React from 'react'
import logo from '../logo/Original_Logo.png'
const PdeItLogo = () => {


  return (
    <div style={{
      width: '8rem',
      height: '6rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '5px'
    }} >
      <p style={{
        textAlign: 'center',
        marginBottom: '0.5rem',
        marginTop: '0.5rem',
        fontFamily: 'Orbitron, sans-serif'
      }}>pDe.(IT)</p>
      <a href="https://www.pdeit.com" target="_blank" rel='noreferrer'>
        <img
          src={logo}
          style={{
            width: '100%', height: '100%', marginLeft: 'auto',
            marginRight: 'auto'
          }} alt="logo">
        </img></a>
      <p style={{
        textAlign: 'center',
        marginBottom: '0.5rem',
        marginTop: '0.5rem',
      }}>Deyan Valkov</p>
      <p style={{
        textAlign: 'center',
        marginBottom: '0.5rem',
        marginTop: '0.5rem',
      }}>2022</p>
    </div>
  )
}

export default PdeItLogo
