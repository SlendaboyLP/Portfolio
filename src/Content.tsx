import React from 'react'
import './Content.css'

function Content() {
  const me = require('./img/pic.jpg')
  return (
    <div className="content-container">
      <div className="me-picture-container">
          <img src={me} alt="A picture of me :)" />
       </div>  
    </div>
  )
}

export default Content;
