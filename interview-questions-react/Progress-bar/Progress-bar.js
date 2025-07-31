import React, { useState } from 'react';

function ProgressBar() {
  const [bar, setBar] = useState(10);

  const progressChange = (value) => {
    setBar((prev) => {
      if (value === '-') {
        return Math.max(0, prev - 10);
      } else {
        return Math.min(100, prev + 10);
      }
    });
  };

  // Determine the bar color based on the percentage
  const getBarColor = () => {
    if (bar >= 80) return 'green';
    if (bar >= 40) return 'orange';
    return 'red';
  };

  return (
    <div className="container">
      <h1>Progress Bar</h1>

      <div className="bar-container">
        <div
          className="progress-fill"
          id="testBgColor"
          style={{
            width: `${bar}%`,
            backgroundColor: getBarColor(),
            padding: '5px',
            textAlign: 'center',
            borderRadius: '10px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <span>{bar}%</span>
        </div>
      </div>

      <div className="btn-group" style={{ marginTop: '70px' }}>
        <button className="decrement-btn" onClick={() => progressChange('-')}>
          -10%
        </button>
        <button
          className="increment-btn"
          onClick={() => progressChange('+')}
          style={{ marginLeft: '10px' }}
        >
          +10%
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
