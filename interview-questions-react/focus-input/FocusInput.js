import React, { useRef } from 'react';

function InputFocus() {
  // initialValue → the starting value you want to store.
  // Returns a ref object with a .current property.
  // Changing .current does not trigger re-render.

  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus(); // Directly access the DOM element
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here"
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button onClick={focusInput} style={{ padding: '8px 12px' }}>
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
