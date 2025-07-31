import React, { useState } from 'react';
import './styles.css';

function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === 'Tab') && input.trim()) {
      e.preventDefault();
      if (!chips.includes(input.trim())) {
        setChips([...chips, input.trim()]);
      }
      setInput('');
    }
  };

  const removeChip = (indexToRemove) => {
    setChips(chips.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '40px 0',
      }}
    >
      <h2>Chips Input</h2>
      <div className="chip-wrapper">
        <input
          type="text"
          placeholder="Type a chip and press Enter/Tab"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="chip-input"
        />
        {chips.map((chip, index) => (
          <div className="chip" key={index}>
            {chip}
            <span className="close-btn" onClick={() => removeChip(index)}>
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
