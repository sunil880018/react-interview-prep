import React, { useState } from 'react';
import './styles.css';

function Calculator() {
  const [input, setInput] = useState('');

  const backSpaceFunc = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const numberFunc = (e) => {
    const value = e.target.value;

    if (input === 'Error') {
      setInput('');
      return;
    }

    if (
      input.length === 0 &&
      ['+', '-', '×', '÷', '.', '√', ')', '%'].includes(value)
    ) {
      setInput('Error');
      return;
    }

    setInput((prev) => prev + value);
  };

  const resultFunc = () => {
    try {
      let expression = input
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)') // √9 → Math.sqrt(9)
        .replace(/%/g, '*0.01'); // percent

      // If there's a hanging √ symbol like "√(9+16)"
      expression = expression.replace(/√/g, 'Math.sqrt');

      const result = eval(expression);
      setInput(result.toString());
    } catch (err) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="title">Simple Calculator</h1>
      <input
        className="display"
        readOnly
        value={input}
        placeholder="Enter Expression"
      />

      <div className="button-grid">
        <button className="clear-btn" onClick={() => setInput('')}>
          <span className="icon-clear">Delete</span>
        </button>
        <button>
          <span className="icon-sqrt" onClick={numberFunc} value="√">
            √
          </span>
        </button>
        <button onClick={numberFunc} value="%">
          <span className="icon-percent">%</span>
        </button>
        <button onClick={numberFunc} value="÷">
          <span className="icon-divide">÷</span>
        </button>

        <button onClick={numberFunc} value="7">
          7
        </button>
        <button onClick={numberFunc} value="8">
          8
        </button>
        <button onClick={numberFunc} value="9">
          9
        </button>
        <button onClick={numberFunc} value="×">
          <span className="icon-multiply">×</span>
        </button>

        <button onClick={numberFunc} value="4">
          4
        </button>
        <button onClick={numberFunc} value="5">
          5
        </button>
        <button onClick={numberFunc} value="6">
          6
        </button>
        <button onClick={numberFunc} value="-">
          <span className="icon-minus">-</span>
        </button>

        <button onClick={numberFunc} value="1">
          1
        </button>
        <button onClick={numberFunc} value="2">
          2
        </button>
        <button onClick={numberFunc} value="3">
          3
        </button>
        <button onClick={numberFunc} value="+">
          <span className="icon-plus">+</span>
        </button>

        <button onClick={numberFunc} value="0">
          0
        </button>
        <button onClick={numberFunc} value=".">
          .
        </button>
        <button onClick={numberFunc} value="(">
          (
        </button>
        <button onClick={numberFunc} value=")">
          )
        </button>

        <button className="back-btn" onClick={backSpaceFunc}>
          <span className="icon-backspace">X</span>
        </button>
        <button className="equal-btn" onClick={resultFunc}>
          <span className="icon-equal">=</span>
        </button>
      </div>
    </div>
  );
}

export default Calculator;
