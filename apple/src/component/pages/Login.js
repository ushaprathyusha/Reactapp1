import React, { useState } from 'react';
import './Login.css'
import vc1 from './vc1.mp4';
import {  useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    navigate('/fromData',{state:{submitteddata:formData}});

    setFormData({
      username: '',
    password: '',
    email: '',
    phoneNumber: '',
    });

  };

  return (
    <div>
      <div className='app1'>
        <video autoPlay loop muted >
          <source src={vc1} type="vedio/mp4"/>
        </video>

      </div>
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <h1>LOGIN PAGE</h1>
            <label htmlFor="username">Username:</label>
            <input required
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input required
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input required
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <input type="radio" name="gender" value="female" checked={ formData.gender==="female"}
            onChange={handleInputChange}/>
          </div>
          <button type="submit">Submit</button>
        </form>
        </div>
</div>
    <>
    </>
    </div>
  );
        };

export default LoginPage;
