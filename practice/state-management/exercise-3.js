import { useState } from 'react';

// preserving state
// State is isolated between components. React keeps track of which state belongs to which component based on their
// place in the UI tree. You can control when to preserve state and when to reset it between re-renders.

export default function App() {
  return (
    <div>
      <Counter />;
      <Counter />;
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  return (
    <div className={className}>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
