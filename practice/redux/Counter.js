import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// useDispatch() gets the dispatch function from Redux.
// When the button is clicked, dispatch({ type: "INCREMENT" }) sends an action to Redux.

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
};

export default Counter;
