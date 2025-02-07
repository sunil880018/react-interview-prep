// Run When a State/Prop Changes
useEffect(() => {
  console.log(`Value updated: ${count}`);
}, [count]); // Runs when `count` changes

// Runs when count changes.
// Useful for listening to state changes.
