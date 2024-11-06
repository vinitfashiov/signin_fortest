import { useState } from 'react';

export default function VerificationCode({ onComplete }) {
  const [code, setCode] = useState(new Array(6).fill(''));

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  return (
    <div className="container">
      <div className="card">
        <button className="back-button" onClick={() => onComplete(false)}>Back</button>
        <h2>Enter verification code</h2>
        <p>The verification code has been sent to +1 6508765432</p>
        <div className="code-inputs">
          {code.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              className="code-input"
            />
          ))}
        </div>
        <p>Not received yet? <a href="#">Resend after 59 seconds</a></p>
        <button onClick={onComplete} className="button">Create account successfully</button>
      </div>
    </div>
  );
}
