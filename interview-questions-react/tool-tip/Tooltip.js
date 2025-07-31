import React, { useState } from 'react';
import './styles.css';

function Tooltip() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const icons = [
    { emoji: '🏠', label: 'Home' },
    { emoji: '📧', label: 'Email' },
    { emoji: '⚙️', label: 'Settings' },
  ];

  return (
    <div className="tooltip-container">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="tooltip-item"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span>{icon.emoji}</span>
          {hoveredIndex === index && (
            <div className="tooltip-text">{icon.label}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Tooltip;
