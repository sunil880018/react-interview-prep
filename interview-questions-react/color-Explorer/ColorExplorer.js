import React, { useState } from 'react';
import { colorNameToHex } from './colorData';
import './styles.css';

const ColorExplorer = () => {
  const [input, setInput] = useState('');
  const [color, setColor] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const hex = colorNameToHex(input.trim().toLowerCase());
    if (hex) {
      setColor({ name: input, hex });
      setError('');
    } else {
      setColor(null);
      setInput('');
      setError('Sorry, I couldnt recognize that color');
    }
  };
  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          onChange={(e) => setInput(e.target.value)}
        />
        <button data-testid="search-button" onClick={() => handleSearch()}>
          🔍
        </button>
      </div>
      {error ? (
        <p data-testid="error-msg" style={{ color: 'red' }}>
          {error}
        </p>
      ) : (
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            role="presentation"
            data-testid="color-preview"
            style={{ backgroundColor: (color && color.hex) || '#ffffff' }}
          ></div>
          <p data-testid="color-name">
            <strong>Name:{color ? color.name : ''}</strong>
          </p>
          <p data-testid="color-hex">
            <strong>Hex:{color ? color.hex : ''}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ColorExplorer;
