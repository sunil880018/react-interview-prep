// When to Use useEffect
// Fetching posts, users, products
// WebSocket, document event listeners
// setTimeout, setInterval
// Unsubscribing from events

import { useEffect, useState } from 'react';
import axios from 'axios';

// ✅ Runs once when the component mounts.
// ✅ Fetches posts from API.
// ✅ Uses an empty dependency array [] to avoid re-fetching.

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response.data.slice(0, 5)))
      .catch((error) => console.error(error));
  }, []); // Empty array → Runs only once when the component mounts

  return (
    <div>
      <h2>API Data</h2>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

// ✅ Updates the document title whenever count changes.
// ✅ Uses [count] as a dependency to control re-execution.

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]); // Runs whenever count changes

  return (
    <button onClick={() => setCount(count + 1)}>Click Me ({count})</button>
  );
}

export { TitleUpdater, FetchData };
