import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  const me = require('./img/Alexander_Zeitlhofer300400.jpg')
  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="me-picture-container">
          <img src={me} alt="A picture of me :)" />
        </div>
        
      </div>

    </>
  );
}

export default App;
