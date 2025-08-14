import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import HomePage from './components/Pages/home/HomePage';
import About from './components/ui/about/About';
import Layout from './components/Pages/layout/Layout';
import Services from './components/ui/service/Services';
import Blog from './components/ui/blog/Blog';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
