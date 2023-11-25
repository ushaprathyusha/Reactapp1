import React, { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom';
// import Image from "./images/img1.jpg"

const Form = () => {
  const navigate = useNavigate();
    const [formData , setFormData] = useState({
        firstName:"",
        LastName:"",
        email:"",
        password:"",
        dob:""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
             ...formData,
             [name]: value,
             });
    };
    const handleSubmit = (e) => {e.preventDefault();
        console.log("FormData" ,formData);
        setFormData({firstName:"",
        LastName:"",
        gender: 'other',
 
        email:"",
        password:"",
        dob:""})
        navigate('/Formdata', {state:{ Submitteddata: formData}});
    }


    return (
<div className='back12'>
        <div className="registration-form-container">
            <h2 className='reg'>REGESTRATION FORM</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="name"
            name="firstName"
            value={formData.name}
            onChange={handleChange}
            required placeholder='Enter your First Name'
          />
        </div>
        <div className="form-group">
          <label htmlFor="LastName">Last Name:</label>
          <input
            type="text"
            id="name"
            name="LastName"
            value={formData.name}
            onChange={handleChange}
            required placeholder='Enter your Last Name'
          />
        </div>


        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required placeholder='Enter your email id'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required placeholder='Enter your password'
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required placeholder='Select'
          >
            <option value="other">other</option>
            <option value="female">Female</option>
            <option value="male">male</option>
          </select> 
          {/* <label htmlFor="gender">Gender:</label>
          <div
            id="gender"
            name="gender"
            value={formData.gender}
          
          ></div>
        <label htmlFor="gender">Male:</label><input type="radio" id="gender" name="gender" value="male" checked={formData.gender==="male"} onChange={handleChange}/>
        <label htmlFor="gender">Female:</label><input type="radio" id="gender" name='gender' value="female" checked={formData.gender==="female"} onChange={handleChange}/>
        
        </div> */}
</div>
        <button type="submit">Register</button>
        {/* <div className='col-2'>
          <img src={Image} alt='image'/>
        </div> */}
      </form>
    </div>
    </div>
  );
};

export default Form;