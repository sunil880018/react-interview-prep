// useEffect is a React Hook that allows you to perform side effects in function components.
// It runs after the component renders and is useful for tasks like fetching data, updating the DOM,
// setting up subscriptions, and managing timers.

import { useEffect } from 'react';

useEffect(() => {
  // Code to run after render
  console.log('Component mounted or updated!');

  return () => {
    // Cleanup function (optional)
    console.log('Component unmounted!');
  };
}, [dependencies]); // Dependency array
