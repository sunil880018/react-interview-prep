import React, { useState } from 'react';
import './styles.css';

function DragDrop() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Grapes']);
  const [dropFruits, setDropFruits] = useState([]);

  const resetLists = () => {
    setDropFruits([]);
    setFruits(['Apple', 'Banana', 'Grapes']);
  };

  const handleDragStart = (e, fruit) => {
    e.dataTransfer.setData('text/plain', fruit);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const fruit = e.dataTransfer.getData('text/plain');

    if (fruit && !dropFruits.includes(fruit)) {
      setDropFruits((prev) => [...prev, fruit]);
      setFruits((prev) => prev.filter((f) => f !== fruit));
    }
  };

  return (
    <div className="app-wrapper">
      <header>
        <h1>Drag & Drop Fruits</h1>
        <button
          data-testid="reset-button"
          onClick={resetLists}
          className="reset-btn"
        >
          Reset Lists
        </button>
      </header>

      <div className="container">
        {/* Available Fruits */}
        <div className="column">
          <h2 data-testid="available-column">Available Fruits</h2>
          {fruits.length === 0 ? (
            <p className="empty">No fruits here</p>
          ) : (
            <div>
              {fruits.map((fruit) => (
                <p
                  key={fruit}
                  className="item"
                  draggable
                  onDragStart={(e) => handleDragStart(e, fruit)}
                >
                  {fruit}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Drop Zone */}
        <div
          className="column drop-zone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h2>Dropped Fruits</h2>
          {dropFruits.length === 0 ? (
            <p className="empty">Drop fruits here</p>
          ) : (
            <div>
              {dropFruits.map((fruit) => (
                <p key={fruit} className="item">
                  {fruit}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DragDrop;

// | Event | When it Fires |
// | ------------- | ------------------------------------------------------------------------- |
// | `onDragStart` | When dragging starts |
// | `onDrag` | While dragging is happening |
// | `onDragEnd` | When dragging stops |
// | `onDragEnter` | When dragged element enters a drop target |
// | `onDragOver` | While dragging over a drop target(must`preventDefault()` to allow drop) |
// | `onDragLeave` | When dragged element leaves a drop target |
// | `onDrop` | When dragged element is dropped on a target |
