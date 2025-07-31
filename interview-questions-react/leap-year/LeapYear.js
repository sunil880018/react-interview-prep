import React, { useState } from 'react';
import './styles.css';

function isLeapYear(str) {
  const year = parseInt(str.trim(), 10); // Convert string to number
  if (isNaN(year)) return false;

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export default function LeapYear() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    if (!input) setError('Please enter a year');
    if (isLeapYear(input.trim())) {
      setResult(`${input} is Leap Year`);
    } else {
      setResult(`${input} is not Leap Year`);
    }
  };
  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        data-testid="year-input"
        onChange={(e) => setInput(e.target.value)}
      />

      <button data-testid="check-btn" onClick={handleSearch}>
        Check
      </button>
      {error ? error : result}
    </div>
  );
}
