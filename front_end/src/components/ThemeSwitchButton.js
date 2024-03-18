import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ThemeSwitchButton({ lightMode, toggleLightMode }) {
  return (
    <FontAwesomeIcon
      icon={lightMode ? faMoon : faSun} // Render moon icon for light mode, sun icon for dark mode
      style={{ paddingRight: '5px', cursor: 'pointer' }}
      onClick={() => toggleLightMode(!lightMode)}
    />
  );
}

export default ThemeSwitchButton;
