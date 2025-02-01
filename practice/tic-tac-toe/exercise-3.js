function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextSquares = squares.slice(); // copy array
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }
  return (
    <>
      {/* /* when user click on Sqaure component then handleClick function call  */}
      {/* flows goes from board to square */}
      {/* Now that your state handling is in the Board component, the parent Board
      component passes props to the child Square components so that they can be
      displayed correctly. When clicking on a Square, the child Square component
      now asks the parent Board component to update the state of the board. When
      the Board’s state changes, both the Board component and every child Square
      re-renders automatically. Keeping the state of all squares in the Board
      component will allow it to determine the winner in the future. */}
      {/* By default, all child components re-render automatically when the state of
      a parent component changes. */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
