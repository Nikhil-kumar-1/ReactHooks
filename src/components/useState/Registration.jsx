import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for form submission or data handling here
    console.log(formData); // Display form data in console (you can process or send it to an API)

    // Clear form fields after submission if needed
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <h1>{`My name is ${formData.username} Kumar and my email id is ${formData.email} `}</h1>
        <div className='child'>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            id='name'
            name='username'
            value={formData.username}
            placeholder='Name'
            onChange={handleInput}
            autoComplete='name'
          />

          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleInput}
            autoComplete='email'
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleInput}
            autoComplete='password'
          />

          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            placeholder='Confirm Password'
            onChange={handleInput}
            value={formData.confirmPassword}
            autoComplete='confirmPassword'
          />

          <button type='submit' className='submit-button'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Registration;
