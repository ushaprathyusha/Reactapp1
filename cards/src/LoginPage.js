import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import your CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulating a login request (replace with actual authentication logic)
    if (username === 'prathu0715@gmail.com' && password === '123456') {
      setMessage('Login successful!');
      // Navigate to the desired page after successful login
      navigate('/dashboard'); // Change '/dashboard' to the desired route
    } else {
      setMessage('Invalid username or password.');
    }
  };

  useEffect(() => {
    // Clear the message after 3 seconds
    const timeoutId = setTimeout(() => {
      setMessage('');
    }, 3000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, [message]);

  return (
    <div className="center-box">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>

        {message && <div className="console">{message}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
