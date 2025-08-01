// StarRating.js

import React, { useState } from 'react';

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1); // index is 0-based
  };

  const reset = () => {
    setRating(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Star Rating</h1>
      <h3>by NamasteDev</h3>

      {/* Step 2: Render 5 stars */}
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleRating(index)}
          style={{
            color: index < rating ? 'gold' : 'gray',
            fontSize: '50px',
            padding: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ★
        </button>
      ))}

      {/* Step 5: Display current rating */}
      <h2>Current Rating: {rating}</h2>

      {/* Step 6: Reset */}
      <button onClick={reset}>Reset Rating</button>
    </div>
  );
}

export default StarRating;
