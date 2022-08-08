import { homedir } from 'os'
import React from 'react'
import './Navbar.css'

import house from './svg/house-solid.svg'
import contact from './svg/message-solid.svg'
import about from './svg/user-solid.svg'
import projects from './svg/wrench-solid.svg'

import {Link} from 'react-router-dom'

function Navbar() {

  
  return (
      <div className="nav-container">
      
        <div className="navbar">
          <Link to="/" className="glow-on-hover">
            <img src={house} alt="" />
            <span>Home</span>
          </Link>

          <Link to="/Projects" className="glow-on-hover">
            <img src={projects} alt="" />
            <span>Projekte</span>
          </Link>

          <Link to="/Contact" className="glow-on-hover">
            <img src={contact} alt="" />
            <span>Kontakt</span>
          </Link>

          <Link to="/About" className="glow-on-hover">
            <img src={about} alt="" />
            <span>About</span>
          </Link>
        </div>

        <div className="nav-bar-spacer"/>

      </div>

  )
}
export default Navbar; 