import React, { useState } from 'react';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={lightMode ? 'light-mode' : 'dark-mode'}>
      <MainPage lightMode={lightMode} toggleLightMode={setLightMode} />
    </div>
  );
}

export default App;
