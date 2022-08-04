import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  const me = require('./img/Alexander_Zeitlhofer300400.jpg')
  return (
    <>
      <Navbar></Navbar>
      <img src={me} alt="A picture of me :)" />
    </>
  );
}

export default App;
