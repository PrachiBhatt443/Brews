// src/App.jsx

import React from 'react';
import { Route, Routes } from "react-router-dom";
import MainContainer from './components/MainContainer';
import CreateContainer from './components/CreateContainer';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/createItem" element={<CreateContainer />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
