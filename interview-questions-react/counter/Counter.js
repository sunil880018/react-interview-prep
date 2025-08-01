// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increamentCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => increamentCounter()}>Increment</button>
      <button onClick={() => decrementCounter()}>Decrement</button>
      <button onClick={() => resetCounter()}>Reset</button>
    </div>
  );
};

export default Counter;
