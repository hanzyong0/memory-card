import React from 'react'
import pokemon from '../assets/pokemon.png'

function Header() {
  return (
    <div className='header'>
      <img className='logo' src={pokemon} alt="logo"></img>
    </div>
  )
}

export default Header
