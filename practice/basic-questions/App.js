import React, { useState } from 'react';

// export default function Testing() {
//   const [counter, setCount] = useState(0);
//   useEffect(() => {
//     if (counter === 5)
//       setTimeout(() => {
//         setCount(0);
//       }, 2000);
//   }, [counter]); // Runs when `counter` changes
//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h1>Counter Game</h1>
//       <h2>{counter}</h2>
//       {counter === 5 && <h2>Game Over</h2>}
//       <button onClick={() => setCount(counter + 1)}>Click me</button>
//     </div>
//   );
// }

// Question 1: Create a React component where clicking a button toggles between "Hello" and "Goodbye".

// export default function Testing() {
//   const [text, setText] = useState('Good Morning');
//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h1>{text}</h1>
//       <button
//         onClick={() => {
//           if (text === 'Good Morning') setText('Good Bye');
//           if (text === 'Good Bye') setText('Good Morning');
//         }}
//       >
//         Toggle
//       </button>
//     </div>
//   );
// }

// Question: Create a React component where clicking a button toggles the visibility of a text message ("Welcome to React!").

// export default function Testing() {
//   const [text, setText] = useState('Welcome to React!');
//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h1>{text}</h1>
//       <button onClick={() => setText(text ? '' : 'Welcome to React!')}>
//         Toggle
//       </button>
//     </div>
//   );
// }

// 4️⃣ Character Counter
// 💡 Question: Create a React component with an input field. Display the number of characters typed in real time.
// export default function Testing() {
//   const [text, setText] = useState('');
//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <input
//         placeholder="type somthing..."
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       ></input>
//       <h1>{text}</h1>
//       <h1>{text.length}</h1>
//     </div>
//   );
// }
