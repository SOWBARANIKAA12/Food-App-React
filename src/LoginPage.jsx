import React, { useState } from 'react';
import './LoginPage.css';

// 1. Accept the new 'onLoginSuccess' prop alongside 'onSwitch'
const LoginPage = ({ onSwitch, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // In a real application, you would make an API call to your backend here.
    // You would check if the login was valid before proceeding.
    console.log('Attempting to log in with:');
    console.log('Email:', email);
    console.log('Password:', password);

    // 2. Call the onLoginSuccess function passed down from the App component.
    // This tells the parent component that the login was "successful" and it should now navigate.
    onLoginSuccess();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
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
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="switch-container">
          <p>
            Don't have an account?{' '}
            <button onClick={onSwitch} className="switch-button">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;