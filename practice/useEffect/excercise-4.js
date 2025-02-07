// Cleanup Effect (Component Unmount)

useEffect(() => {
  const timer = setInterval(() => console.log('Running...'), 1000);
  return () => clearInterval(timer); // Cleanup
}, []);

// Runs when the component unmounts.
// Useful for clearing intervals, event listeners, or API subscriptions.
