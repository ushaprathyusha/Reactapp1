import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import useAuth from './useAuth'; // Import the useAuth hook

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from useAuth

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5022/login', { email, password });
      if (response.status === 200) {
        setMessage('Login successful');
        login(response.data.user); // Set the user data using the login function
        setTimeout(() => {
          setMessage('');
          navigate('/Profile'); // Navigate to Home page after successful login
        }, 3000);
      } else {
        setMessage('Invalid credentials'); // Display "Invalid credentials" for non-200 response status
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setMessage(error.response.data.error); // Display the specific error message from the server
      } else {
        setMessage('An error occurred'); // Display a more generic message for any other errors
        console.log(error); // Log the error object to the console for debugging
      }
    }
  };

  return (
    <div className="loginbgcontainer1">
      <section className="logincontainer1 loginforms1">
        <div className="loginform1 register">
          <div className="loginform-content1">
            <header className="loginHeadername1">Login</header>
            <form onSubmit={handleSubmit}>
              {/* Input fields for email and password */}
              <div className="loginfield1 logininput-field1">
                <input
                  type="email"
                  name="email" // Add name attribute for form submission
                  placeholder="Email"
                  className="input1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="loginfield1 logininput-field1">
                <input
                  type="password"
                  name="password" // Add name attribute for form submission
                  placeholder="Password"
                  className="loginpassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Forgot password link */}
              <div className="loginform-link">
                <Link to="/forgot" className="loginforgot-pass">
                  Forgot password?
                </Link>
              </div>

              {/* Display error message */}
              {message && <p className="login-error-message">{message}</p>}

              {/* Login button */}
              <div className="loginfield1 loginbutton-field1">
                <button type="submit">Login</button>
              </div>
            </form>
            
            {/* Link to register page */}
            <div className="loginform-link1">
              <span>
                <strong>
                  Don't have an account?{' '}
                  <Link className="loginspan1" to="/register">
                    Signup
                  </Link>
                </strong>
              </span>
            </div>
          </div>
          
          {/* Google login */}
          <div className="loginline11">
            <div className="section3"></div>
            <p className="loginpara1">Or</p>
            <div className="section4"></div>
          </div>
          <div className="log-google google-login-container">
            <GoogleOAuthProvider clientId="476717558763-pbbvpjdugi7ium3eprbclkqn8f61hllf.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const details = jwt_decode(credentialResponse.credential);
                  console.log(details);
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
