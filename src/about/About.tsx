import React from 'react'
import './About.css'

export default function About() {

  const me = require('../img/pic.jpg')
  return (
    <div className="content-container">
      <div className="me-picture-container">
          <img src={me} alt="A picture of me :)" />
      </div>  
    </div>
  )
  
}