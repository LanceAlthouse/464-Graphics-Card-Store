import React from 'react';
import Navbar from '../components/Navbar';
import ProductListings from '../components/ProductListings';
import GraphicsCards from '../assets/data/GraphicsCards';

function MainPage({ lightMode, toggleLightMode }) {
  return (
    <div style={{ overflowY: 'auto', padding: '10px', height: '100vh' }}>
      <Navbar lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <div style={{ padding: '20px'}}>
        <h1>Welcome to the Graphics Card Store</h1>
        <ProductListings products={GraphicsCards} />
      </div>
    </div>
  );
}

export default MainPage;
