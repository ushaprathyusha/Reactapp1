import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginform.css'

const Loginform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.[a-zA-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      setError('Password must contain at least one letter, one number, one special character, and 8 values.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate first name
    if (!formData.firstName.trim() || formData.firstName.trim()[0] !== formData.firstName.trim()[0].toUpperCase()) {
      setError('First name must start with an uppercase letter.');
      return;
    }

    // Validate last name
    if (!formData.lastName.trim() || formData.lastName.trim()[0] !== formData.lastName.trim()[0].toUpperCase()) {
      setError('Last name must start with an uppercase letter.');
      return;
    }

    // Validate password
    if (!validatePassword()) {
      return;
    }

    // If all validations pass, proceed to navigate and setSubmitted
    setError('');
    navigate('/Login', { state: { submitteddata: formData } });
    setSubmitted(true);

    // Reset the form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
    });
  };
 
  return (
      <div className='main-page'>  
        <div className='main-div' id='registration'>
          <h1 className='login-heading'>Registration Form</h1>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className='form-div'>
                <label htmlFor="firstName" className='name'> First Name: </label><br />
                <input className='first-input'
                  type="text"
                  required
                  placeholder='Enter your First Name'
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              
              {setError && <p style={{ color: 'white',fontWeight:'bold' ,textAlign:'center'}}>{setError}</p>}
              <div className='form-div'>
                <label htmlFor="lastName" className='name'> Last Name: </label><br />
                <input className='first-input'
                  type="text"
                  id="lastName"
                  required
                  placeholder='Enter your Last Name'
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {setError && <p style={{ color: 'white',fontWeight:'bold' ,textAlign:'center'}}>{setError}</p>}
              
              </div>
              
              <div className='form-div'>
                <label htmlFor="email" className='name'> Email: </label><br />
                <input className='first-input'
                  type="email"
                  id="email"
                  required
                  placeholder='Enter your Email'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className='form-div'>
                <label htmlFor="password" className='name'> Password: </label><br />
                <input className='first-input'
                  type="password"
                  id="password"
                  required
                  placeholder='Enter your Password'
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                
              </div>
              <div className='input-gender'>
              <input type='radio' name="gender" value='male' checked={formData.gender === 'male'} onChange={handleChange} />Male
              <input type='radio' name="gender" value='female' checked={formData.gender === 'female'} onChange={handleChange}/>Female
              </div>
              <div className='button-div'>
                <button type="submit" className='submit'> Submit</button>
              </div>
              
              {error && <p style={{ color: 'black', fontWeight:'bold', textAlign:'center'}}>{error}</p>}
            </form>
          ) : (
            <div id='Login'>
              <h1>Details</h1>
              <p className='paragraph'>
                First Name: {formData.firstName} <br />
                Last Name: {formData.lastName} <br/>
                Email: {formData.email} <br />
                Password: {formData.password}
              </p>
            </div>
          )}
        </div>
    </div>
  );
};

export default Loginform;