import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
     
      <main className="mt-12  flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;