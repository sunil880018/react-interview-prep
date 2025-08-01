import React, { useState } from 'react';
import './styles.css';

function DarkModeToggle() {
  const [mode, setMode] = useState(false);

  const toggleTheme = () => {
    setMode(!mode);
  };

  return (
    <div
      className={`container ${mode ? 'dark-mode' : 'light-mode'}`}
      style={{ backgroundColor: mode ? 'black' : 'white' }}
    >
      <h1 style={{ color: mode ? 'white' : 'black' }}>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <span className={`mode-text ${mode ? 'dark-mode' : 'light-mode'}`}>
          <h2 style={{ color: mode ? 'white' : 'black' }}>
            {mode ? 'Dark Mode' : 'Light Mode'}
          </h2>
        </span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
