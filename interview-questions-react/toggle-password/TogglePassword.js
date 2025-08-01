import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './styles.css';

function TogglePassword() {
  const [input, setInput] = useState('');
  const [visible, setVisible] = useState(false);
  const handlePassword = () => {
    setVisible(!visible);
  };
  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={visible ? 'text' : 'password'}
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <span
          className="icon"
          data-testid="toggle-icon"
          onClick={handlePassword}
        >
          <EyeOff size={18} />
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        Password {visible ? 'Visible' : 'Hidden'}
      </span>
    </div>
  );
}

export default TogglePassword;
