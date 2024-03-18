import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './ThemeSwitchButton.css';


function ThemeSwitchButton({ lightMode, toggleLightMode }) {
  return (
      <button className='nav-button' onClick={() => toggleLightMode(!lightMode)}>
        <FontAwesomeIcon
          icon={lightMode ? faMoon : faSun}
          style={{ paddingRight: '5px', cursor: 'pointer' }}
        />
      </button>
  );
}

export default ThemeSwitchButton;
