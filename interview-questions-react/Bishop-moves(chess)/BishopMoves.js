import React, { useState } from 'react';
import './styles.css';

const boardSize = 8;

export default function BishopMoves() {
  const [hovered, setHovered] = useState(null); // [row, col] or null

  return (
    <div className="board">
      {Array.from({ length: boardSize }).map((_, row) =>
        Array.from({ length: boardSize }).map((_, col) => {
          const isHovered = hovered && hovered[0] === row && hovered[1] === col; // isHovered is using for cursor color

          const isDiagonalMove =
            hovered &&
            Math.abs(hovered[0] - row) === Math.abs(hovered[1] - col) &&
            !isHovered;

          const isLight = (row + col) % 2 === 0;

          return (
            <div
              key={`${row}-${col}`}
              role="gridcell"
              className={`cell ${isLight ? 'light' : 'dark'} ${
                isHovered ? 'hovered' : ''
              } ${isDiagonalMove ? 'bishop-move' : ''}`}
              onMouseEnter={() => setHovered([row, col])}
              onMouseLeave={() => setHovered(null)}
            />
          );
        })
      )}
    </div>
  );
}

// Suppose we are moving from (2, 3) to (4, 5):

// Math.abs(2 - 4) = 2
// Math.abs(3 - 5) = 2
// 2 === 2 True, so it's a diagonal move.

// This applies to all diagonals:

// Top-left ↘ Bottom-right

// Top-right ↙ Bottom-left

// Bottom-left ↗ Top-right

// Bottom-right ↖ Top-left

// import React, { useState } from "react";

// const boardSize = 8;

// function King() {
//   const [hovered, setHovered] = useState(null); // [row, col] or null

//   // Check if a square is a valid king move from hovered position
//   const isKingMove = (row, col, hovered) => {
//     if (!hovered) return false;
//     const [hRow, hCol] = hovered;
//     const rowDiff = Math.abs(row - hRow);
//     const colDiff = Math.abs(col - hCol);
//     return (
//       (rowDiff <= 1 && colDiff <= 1) &&
//       !(row === hRow && col === hCol)
//     );
//   };

//   const renderBoard = () => {
//     const board = [];

//     for (let row = 0; row < boardSize; row++) {
//       for (let col = 0; col < boardSize; col++) {
//         const isLight = (row + col) % 2 === 0;
//         const kingMove = isKingMove(row, col, hovered);
//         const isHovered = hovered && hovered[0] === row && hovered[1] === col;

//         const cellClasses = `cell ${isLight ? "light" : "dark"} ${kingMove ? "king-move" : ""} ${isHovered ? "hovered" : ""}`;

//         board.push(
//           <div
//             key={`${row}-${col}`}
//             data-testid={`cell-${row}-${col}`}
//             className={cellClasses}
//             onMouseEnter={() => setHovered([row, col])}
//             onMouseLeave={() => setHovered(null)}
//           />
//         );
//       }
//     }

//     return board;
//   };

//   return <div className="board">{renderBoard()}</div>;
// }

// export default King;
