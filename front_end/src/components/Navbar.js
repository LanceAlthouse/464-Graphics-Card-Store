import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faUser, faBoxOpen, faBars } from '@fortawesome/free-solid-svg-icons';
import ThemeSwitchButton from './ThemeSwitchButton';
import siteLogo from '../assets/images/siteLogo.png';
import './Navbar.css';

function Navbar({ lightMode, toggleLightMode }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src={siteLogo} alt="site logo" className='logo-image'/>
          <h1>Graphics Card Store</h1>
        </div>
        <ul className="nav-links">
          <li>
            <button className="nav-button" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', width: '100%' }}>
              <ThemeSwitchButton lightMode={lightMode} toggleLightMode={toggleLightMode} />
            </button>
          </li>
          <li>
            <button className="nav-button" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', width: '100%' }}>
              <a href="/" className='nav-list-item'> <FontAwesomeIcon icon={faHome} /> Home</a>
            </button>
          </li>
          <li>
            <button className="nav-button" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', width: '100%' }}>
              <a href="/products" className='nav-list-item'><FontAwesomeIcon icon={faBoxOpen} /> Products</a>
            </button>
          </li>
          <li>
            <button className="nav-button" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', width: '100%' }}>
              <a href="/account" className='nav-list-item'><FontAwesomeIcon icon={faUser} /> Account</a>
            </button>
          </li>
          <li>
            <button className="nav-button" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', width: '100%' }}>
              <a href="/cart" className='nav-list-item'> <FontAwesomeIcon icon={faShoppingCart} /> Cart</a>
            </button>
          </li>
          <li className="dropdown-toggle" >
            <button className="dropdown-menu-button" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', width: '100%' }} onClick={handleDropdownToggle}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>
        </ul>
      </nav>
      {showDropdown && (
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-button">
              <a href="/" className='nav-list-item'><FontAwesomeIcon icon={faHome} /> Home</a>
            </button>
          </li>
          <li>
            <button className="dropdown-button">
              <a href="/products" className='nav-list-item'><FontAwesomeIcon icon={faBoxOpen} /> Products</a>
            </button>
          </li>
          <li>
            <button className="dropdown-button">
              <a href="/account" className='nav-list-item'><FontAwesomeIcon icon={faUser} /> Account</a>
            </button>
          </li>
          <li>
            <button className="dropdown-button">
              <a href="/cart" className='nav-list-item'><FontAwesomeIcon icon={faShoppingCart} /> Cart</a>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
