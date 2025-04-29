let debounceTimer;

function searching(value) {
  clearTimeout(debounceTimer); // clear any previous timer, clearTimeout() is used to cancel a timer set by setTimeout() before it executes.

  debounceTimer = setTimeout(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched:', data);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  }, 300); // wait 300ms before firing the API call
}

// Simulating user input calling multiple times
searching('1');
searching('12');
searching('123'); // Only this call will actually go through
