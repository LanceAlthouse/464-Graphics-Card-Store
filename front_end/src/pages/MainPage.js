import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
//Components
import Navbar from '../components/Navbar';
import ProductListings from '../components/ProductListings';
import Cart from '../components/Cart';
//Data
import GraphicsCards from '../assets/data/GraphicsCards';
import AccountSettings from '../components/AccountSettings';


function MainPage({ lightMode, toggleLightMode }) {
  return (
    <RecoilRoot>
    <Router>
      <div style={{ padding: '10px', minHeight: '100vh'}}>
        <Navbar lightMode={lightMode} toggleLightMode={toggleLightMode} />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/products" element={<ProductListings products={GraphicsCards} />}></Route>
            <Route path="/account" element={<AccountSettings />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    </RecoilRoot>
  );
}

export default MainPage;
