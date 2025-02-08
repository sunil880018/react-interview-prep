import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h2>Redux Counter App</h2>
      <Counter />
    </div>
  );
}

export default App;

// How it Works:
// The store manages the application's state.
// The reducer updates the state when INCREMENT or DECREMENT actions are dispatched.
// The Counter component:
// Uses useSelector to get the count from the store.
// Uses useDispatch to send actions to update the state.
