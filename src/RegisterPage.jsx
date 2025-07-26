import React, { useState } from 'react';
import './RegisterPage.css';

// 1. Accept the onSwitch function as a prop
const RegisterPage = ({ onSwitch }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    console.log('Registering with the following details:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <form onSubmit={handleRegister} className="register-form">
          <h2>Create Account</h2>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
              required
            />
          </div>
          <button type="submit" className="register-button">
            Sign Up
          </button>
        </form>
        {/* 2. Add the section to switch back to the login page */}
        <div className="switch-container">
          <p>
            Already have an account?{' '}
            <button onClick={onSwitch} className="switch-button">
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;