import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Pages/navbar/Navbar';
import HomePage from './components/Pages/home/HomePage';
import Footer from './components/Pages/footer/Footer';
import About from './components/ui/about/About';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<About />} />
    
      </Routes>

      <Footer />
    </>
  );
}

export default App;
