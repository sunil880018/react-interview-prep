import React, { useState } from 'react';

// Star Component for individual star icon
const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => (
  <span
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
      fontSize: '30px',
      cursor: 'pointer',
      color: filled ? '#FFD700' : '#ccc', // Gold for filled, gray for empty
    }}
  >
    ★
  </span>
);

const StarRating = () => {
  const [rating, setRating] = useState(0); // Selected rating
  const [hoverRating, setHoverRating] = useState(0); // Hover rating to highlight stars on hover

  const handleClick = (index) => {
    setRating(index); // Set rating when star is clicked
  };

  const handleMouseEnter = (index) => {
    setHoverRating(index); // Highlight stars on hover
  };

  const handleMouseLeave = () => {
    setHoverRating(0); // Remove highlight when mouse leaves
  };

  return (
    <div>
      <h2>Star Rating Component</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {Array.from({ length: 5 }, (_, index) => {
          const starIndex = index + 1;
          return (
            <Star
              key={starIndex}
              filled={starIndex <= (hoverRating || rating)} // Highlight stars on hover or selection
              onClick={() => handleClick(starIndex)}
              onMouseEnter={() => handleMouseEnter(starIndex)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p>
          Your Rating: {rating} {rating === 1 ? 'star' : 'stars'}
        </p>
      </div>
    </div>
  );
};

export default StarRating;
