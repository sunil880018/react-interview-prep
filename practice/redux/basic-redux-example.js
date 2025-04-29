const { createStore } = require('redux');

// 1️ Initial State
const initialState = {
  count: 0,
};

// 2️ Reducer function
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

// 3️ Create Redux Store
const store = createStore(counterReducer);

// 4️ Subscribe to store (optional)
store.subscribe(() => {
  console.log('State updated:', store.getState());
});

// 5 Dispatch actions
store.dispatch({ type: 'INCREMENT' }); // count = 1
store.dispatch({ type: 'INCREMENT' }); // count = 2
store.dispatch({ type: 'DECREMENT' }); // count = 1

// 1.initialState	Defines the starting value for the Redux store
// 2.counterReducer	A function that tells Redux how to update the state based on action type
// 3.createStore()	Initializes the store with the reducer
// 4.store.dispatch()	Sends actions to update the state
// 5.store.subscribe()	Logs the state every time it updates

// where we can use Redux

// Use Redux, Zustand, Recoil, or Context API for:

// 1.Authentication

// 2.Cart data

// 3.Theme toggling
