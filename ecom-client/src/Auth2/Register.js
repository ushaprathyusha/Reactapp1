import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';


const Register = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isNameValid = name.trim() !== '';
  const isPhoneNumberValid = /^[0-9]{10}$/.test(phoneNumber);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const passwordValidation = (pass) => {
    const hasUppercase = /[A-Z]/.test(pass);
    const hasLowercase = /[a-z]/.test(pass);
    const hasDigit = /\d/.test(pass);
    const hasSpecialChar = /[!@#$%^&*]/.test(pass);

    const requirements = [];
    if (!hasUppercase) requirements.push('an uppercase letter');
    if (!hasLowercase) requirements.push('a lowercase letter');
    if (!hasDigit) requirements.push('a digit');
    if (!hasSpecialChar) requirements.push('a special character');

    return {
      isValid: hasUppercase && hasLowercase && hasDigit && hasSpecialChar,
      requirements,
    };
  };

  const isPasswordValid = passwordValidation(password);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmailValid) {
      setErrorMessage('Invalid email address');
    } else if (!isNameValid) {
      setErrorMessage('Please enter your name');
    } else if (!isPhoneNumberValid) {
      setErrorMessage('Invalid phone number');
    } else if (!isPasswordValid.isValid) {
      setErrorMessage(`Password must include ${isPasswordValid.requirements.join(', ')}`);
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    }  else {
      try {
        const response = await axios.post('http://localhost:5020/register', {
          username: name,
          email,
          contact: phoneNumber,
          password,
        });
        if (response.status === 201) {
          setErrorMessage('Registration successful');
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);
          navigate('/login');
        } else {
          setErrorMessage('Unknown error occurred');
        }
      } catch (error) {
        setErrorMessage('User already exists');
      }
    }
  };

  return (
    <div className="bgcontainer1">
      <form className="container1 forms1" onSubmit={handleSubmit}>
        <div className="form1 register">
          <div className="form-content1">
            <header className="Headername1">Register Now</header>
            <div className="field1 input-field1">
              <input
                type="text"
                placeholder="Name"
                className={`input1 ${!isNameValid ? 'invalid' : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field1 input-field1">
              <input
                type="text"
                placeholder="Phone Number"
                className={`input1 ${!isPhoneNumberValid ? 'invalid' : ''}`}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="field1 input-field1">
              <input
                type="email"
                placeholder="Email"
                className={`input1 ${!isEmailValid ? 'invalid' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field1 input-field1">
              <input
                type="password"
                placeholder="Password"
                className={`password1 ${!isPasswordValid.isValid ? 'invalid' : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="field1 input-field1">
              <input
                type="password"
                placeholder="Confirm Password"
                className="confirmpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div className="field1 button-field1">
              <button type="submit-register">Register</button>
            </div>
            <div className="form-link1">
              <span>
                <strong>
                  Already have an account?{' '}
                  <Link className="span1" to="/login">
                    Login
                  </Link>
                </strong>
              </span>
            </div>
          </div>
          <div className="line11">
            <div className="section3"></div>
            <p className="para1">Or</p>
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
      </form>
    </div>
  );
};

export default Register;
