import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {Route, Routes} from 'react-router-dom'

import Home from './home/Home'
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import About from './about/About';




function App() {
  return (
    <>
      <Navbar />
      {/* <Content /> */}

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/Projects' element={<Projects></Projects>}/>
        <Route path='/Contact' element={<Contact></Contact>}/>
        <Route path='/About' element={<About></About>}/>
      </Routes>
    </>
  );
}

export default App;