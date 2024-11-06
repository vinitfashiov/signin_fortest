import { useState } from 'react';

export default function AccountCreation({ onNext }) {
  const [phone, setPhone] = useState('');

  return (
    <div className="container">
      <div className="card">
        <h1>Logto</h1>
        <h2>Create your account</h2>
        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input"
        />
        <div className="checkbox-container">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            I have read and agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
          </label>
        </div>
        <button onClick={onNext} className="button">Create account</button>
        <p>Already have an account? <a href="#">Sign in</a></p>
        <div className="social-buttons">
          <button className="social-button google">Continue with Google</button>
          <button className="social-button github">Continue with GitHub</button>
        </div>
      </div>
    </div>
  );
}
