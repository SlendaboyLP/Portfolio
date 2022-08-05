import React from 'react'
import './Navbar.css'

function Navbar() {
  return (

      <div className="nav-container">
        
        <div className="navbar">
          <button className="glow-on-hover">Home</button>
          <button className="glow-on-hover">Projekte</button>
          <button className="glow-on-hover">Kontakt</button>
          <button className="glow-on-hover">About</button>
        </div>

        <div className="nav-bar-spacer"/>

      </div>

  )
}
export default Navbar; 