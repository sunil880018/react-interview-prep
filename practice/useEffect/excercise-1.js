// What is useEffect and How Does It Work?
// Definition:
// useEffect is a React Hook that performs side effects in function components. Side effects include:

// Fetching data from an API
// Updating the DOM
// Subscribing to events (e.g., WebSocket, Redux)
// Setting timeouts or intervals

// Basic Syntax:
useEffect(() => {
  // Side effect logic (e.g., API call)
  return () => {
    // Cleanup logic (e.g., remove event listener)
  };
}, [dependencies]);

// First argument: A function that runs the effect (e.g., fetching data).
// Second argument ([dependencies]): Determines when the effect runs.
