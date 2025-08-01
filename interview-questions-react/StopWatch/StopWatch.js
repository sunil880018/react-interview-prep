import React, { useState } from 'react';
import './styles.css';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [stopTimerId, setStopTimerId] = useState(null);
  const startTimer = () => {
    const id = setInterval(() => {
      setSeconds((pre) => pre + 1);
    }, 1000);
    setStopTimerId(id);
  };
  const stopTimer = () => {
    clearInterval(stopTimerId);
    setStopTimerId(null);
  };
  const resetTimer = () => {
    setSeconds(0);
    clearInterval(stopTimerId);
    setStopTimerId(null);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Time: {seconds}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;
