// react provider
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
// Provider makes the Redux store available to all components.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Component (useDispatch)  --->  Store (createStore)
//          |                             |
//          |                             |
//       Dispatch Action   ---->     Reducer updates state
//          |                             |
//          |                             |
//    Component Re-Renders  <----   Store Updates

// How useDispatch() Works Internally
// useDispatch() provides access to the dispatch function from Redux.
// When dispatch({ type: "INCREMENT" }) is called:
// The action { type: "INCREMENT" } is sent to the store.
// The store calls the reducer (counterReducer).
// The reducer updates the state (count + 1).
// The new state is saved in the store.
// useSelector((state) => state.count) re-renders the component with the updated value.

// Summary
// useDispatch() sends actions to the store.
// createStore(counterReducer) handles actions in the reducer.
// Redux updates the state, and React re-renders the component using useSelector().
