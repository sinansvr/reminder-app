import React from 'react'
import img from "../assets/img/Clarusway.png"

const Header = () => {
  return (
    <header className='container-fluid'>
        <img src={img} alt="logo" />
    </header>
  )
}

export default Header