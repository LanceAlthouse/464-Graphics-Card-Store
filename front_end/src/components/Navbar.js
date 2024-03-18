import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faBoxOpen, faBars } from '@fortawesome/free-solid-svg-icons';
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
            <ThemeSwitchButton lightMode={lightMode} toggleLightMode={toggleLightMode} />
          </li>
          <li>
            <Link to="/products" className='nav-list-item'><button className="nav-button"><FontAwesomeIcon icon={faBoxOpen} /> Products</button></Link>
          </li>
          <li>
            <Link to="/account" className='nav-list-item'><button className="nav-button"><FontAwesomeIcon icon={faUser} /> Account</button></Link>
          </li>
          <li>
            <Link to="/cart" className='nav-list-item'><button className="nav-button"><FontAwesomeIcon icon={faShoppingCart} /> Cart</button></Link>
          </li>
          <li className="dropdown-toggle" >
            <button className="dropdown-menu-button" onClick={handleDropdownToggle}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>
        </ul>
      </nav>
      {showDropdown && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/products" className='nav-list-item'><button className="dropdown-button"><FontAwesomeIcon icon={faBoxOpen} /> Products</button></Link>
          </li>
          <li>
            <Link to="/account" className='nav-list-item'><button className="dropdown-button"><FontAwesomeIcon icon={faUser} /> Account</button></Link>
          </li>
          <li>
            <Link to="/cart" className='nav-list-item'><button className="dropdown-button"><FontAwesomeIcon icon={faShoppingCart} /> Cart</button></Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
