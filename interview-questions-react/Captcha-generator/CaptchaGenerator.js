import React, { useEffect, useState } from 'react';

//TODO 1: Write a function that returns a random string of letters and numbers
//TODO 2: When the component loads, generate a new captcha and store input
//TODO 3: Compare user input with the captcha when form is submitted
//TODO 4: When "Regenerate" button is clicked, create a new captcha

const generateCaptcha = (length = 5) => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < length; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

//Helper function to style each character with a random rotation and skew
const getCharStyle = () => {
  const rotation = Math.floor(Math.random() * 31) - 15;
  const skew = Math.floor(Math.random() * 11) - 5;

  return {
    display: 'inline-block',
    transform: `rotate(${rotation}deg) skew(${skew}deg)`,
    margin: '0 2px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
    textShadow: '1px 1px #ccc',
  };
};

export default function CaptchaGenerator() {
  const [captcha, setCaptcha] = useState('');
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // generate and set captcha here
    const captcha = generateCaptcha();
    setCaptcha(captcha);
  }, []);

  const handleSubmit = (e) => {
    // write validation logic here
    e.preventDefault();
    if (input === captcha) {
      setMessage('Correct');
    } else {
      setMessage('Incorrect');
    }
  };

  const resetCaptcha = () => {
    // regenerate the captcha here
    setCaptcha(generateCaptcha());
    setInput('');
    setMessage('');
  };

  return (
    <div className="container" style={{ fontFamily: 'monospace' }}>
      <h2>Captcha Generator</h2>

      <div className="captcha-box">
        {captcha.split('').map((char, i) => (
          <span key={i} style={getCharStyle()}>
            {char}
          </span>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter captcha"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={resetCaptcha}>
          Regenerate
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
