import React, { useState } from 'react';
import './App.css';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);
  }

  return (
    <div className="login-container">
      <h2 className="login-header">Login Page</h2>
      <form className="login-form" onSubmit={handleLogin}>

        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
        <label>Password:</label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
