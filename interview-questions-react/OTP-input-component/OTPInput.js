import React, { useRef, useState } from 'react';
import '../styles.css';
// useRef returns a mutable object with a .current property.
function OTPInput({ onChangeOTP }) {
  const length = 4; // Total number of OTP input boxes
  const [otp, setOTP] = useState(Array(length).fill('')); // State to store each digit
  const inputsRef = useRef([]); // Array of input refs to control focus

  const focusInput = (index) => {
    // TODO: Focus the input element at the specified index
    inputsRef.current[index]?.focus();
  };

  const handleChange = (e, index) => {
    // TODO: Implement value validation, state update, auto-focus, and OTP completion check
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // If complete, send the joined otp
    if (newOTP.every((digit) => digit !== '')) {
      onChangeOTP(newOTP.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    // TODO: Handle backspace behavior for navigation
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    // TODO: Extract numeric values from pasted string and update inputs accordingly
    e.preventDefault();
    const pasted = e.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, length);
    if (pasted.length === 0) return;

    const newOTP = [...otp];

    for (let i = 0; i < pasted.length; i++) {
      newOTP[i] = pasted[i];
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = pasted[i];
      }
    }

    setOTP(newOTP);

    if (newOTP.every((digit) => digit !== '')) {
      onChangeOTP(newOTP.join(''));
    }

    const nextIndex = Math.min(pasted.length, length - 1);
    inputsRef.current[index].focus();
    focusInput(nextIndex);
  };

  // Render the OTP input fields
  return (
    <div onPaste={handlePaste}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)} // Save input ref for focus management
          type="text" // Use text input for better control over formatting
          maxLength="1" // Limit to 1 character per input
          inputMode="numeric" // Show numeric keyboard on mobile devices
          value={digit} // Controlled input tied to state
          onChange={(e) => handleChange(e, index)} // Handle typing
          onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace
          style={{
            width: '40px',
            height: '40px',
            fontSize: '20px',
            textAlign: 'center',
            marginRight: '10px',
          }}
        />
      ))}
    </div>
  );
}

export default OTPInput;
