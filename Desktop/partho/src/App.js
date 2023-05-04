import React from 'react'
import './App.css';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/Navbar/Navbar'
import Home from './Routes/home';
import About from './Routes/about';


function App() {
  return (
    <div className='body'>
      <div className='main-container'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/about" element={<About/> } />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
