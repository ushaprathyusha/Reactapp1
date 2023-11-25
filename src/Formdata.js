import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./Formdata.css";
import image from "./img2.jpg"

const Formdata = () => {
  const navigate = useNavigate();
  const data = useLocation().state.Submitteddata;
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.email === loginData.email && data.password === loginData.password) {
      navigate('/Dashboard', { state: { Submitteddata: loginData } });
    } else {
      navigate('/');
    }
  }

  return (
    <div>
      <div className="sig">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name='email'
            value={loginData.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name='password'
            value={loginData.password}
            onChange={handleChange}
          />
          <div className='for'><a href="/Signup">Forget Password ? </a></div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div>
     <img src={image} alt='img' className='img1'></img>
      </div>
    </div>
  );
}

export default Formdata;