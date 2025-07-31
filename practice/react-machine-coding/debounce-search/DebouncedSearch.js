import React, { useState, useEffect } from 'react';

const DebouncedSearch = () => {
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState('');

  // Debounce logic: updates `debounced` 500ms after typing stops
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(query);
    }, 500);

    return () => {
      clearTimeout(handler); // Clear previous timeout if query changes
    };
  }, [query]);

  useEffect(() => {
    if (debounced) {
      // Trigger API/search call here
      console.log('Searching for:', debounced);
    }
  }, [debounced]);

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h3>🔍 Debounced Search</h3>
      <input
        style={{ padding: 8, width: '100%' }}
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default DebouncedSearch;
