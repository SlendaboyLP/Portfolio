import { homedir } from 'os'
import React from 'react'
import './Navbar.css'

import house from './svg/house-solid.svg'
import contact from './svg/message-solid.svg'
import about from './svg/user-solid.svg'
import projects from './svg/wrench-solid.svg'




function Navbar() {

  // const userId = localStorage.getItem('userId')
  // const userName = localStorage.getItem('userName')
  // const userEmail = localStorage.getItem('userEmail')
  // const userImage = localStorage.getItem('userImage')
  // const userRole = localStorage.getItem('userRole')
  
  return (
      <div className="nav-container">
        
        <div className="navbar">
          <button className="glow-on-hover">
            <img src={house} alt="" />
            <span>Home</span>
          </button>
          <button className="glow-on-hover">
            <img src={projects} alt="" />
            <span>Projekte</span>
          </button>
          <button className="glow-on-hover">
            <img src={contact} alt="" />
            <span>Kontakt</span>
          </button>
          <button className="glow-on-hover">
            <img src={about} alt="" />
            <span>About</span>
          </button>
        </div>

        <div className="nav-bar-spacer"/>

      </div>

  )
}
export default Navbar; 