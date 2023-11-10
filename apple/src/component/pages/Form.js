// Import necessary modules from the 'react' library
import React, { useState } from 'react';

// Define a functional component called 'Form'
const Form = () => {
  // Initialize a state variable 'formData' using the 'useState' hook
  // This state will store the form data, including first name, last name, and email
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Define a function called 'handleChange' to update the 'formData' state when input fields change
  const handleChange = (e) => {
    // Extract the 'name' and 'value' properties from the input element
    const { name, value } = e.target;

    // Use the spread operator to create a new object with the updated form data
    // Update the specific field identified by 'name' with the new 'value'
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Define a function called 'handleSubmit' to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior, which would cause a page reload
    e.preventDefault();

    // Log the form data to the console
    console.log('Form Data:', formData);

    // Clear the form fields by resetting the 'formData' state to empty values
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
    });
  };

  // Render the form component
  return (
    <div>
      <h1>React Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input required
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName} // Bind the 'value' of the input to the 'firstName' field in 'formData'
            onChange={handleChange} // Call 'handleChange' function when the input value changes
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input required
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName} // Bind the 'value' of the input to the 'lastName' field in 'formData'
            onChange={handleChange} // Call 'handleChange' function when the input value changes
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input required
            type="email"
            id="email"
            name="email"
            value={formData.email} // Bind the 'value' of the input to the 'email' field in 'formData'
            onChange={handleChange} // Call 'handleChange' function when the input value changes
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Export the 'Form' component to make it available for use in other parts of the application
export default Form;