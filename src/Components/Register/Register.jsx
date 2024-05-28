import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./register.css"

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    profession: 'Select'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => 
  {
    e.preventDefault();

    const { name, email, password, phone } = formData;
    if (!name || !email || !password || !phone) 
    {
      alert('Please fill in all required fields.');
      return;
    }

    const existedData = JSON.parse(localStorage.getItem('registrationData')) || {};
    const emailExists = Object.values(existedData).some(registration => registration.email === email);

    if (emailExists)
    {
      alert('This email is already registered.');
      return;
    }
    const nextIndex = Object.keys(existedData).length;
    existedData[nextIndex] = formData;
    localStorage.setItem('registrationData', JSON.stringify(existedData));
    alert('Registration successful!');
  };

  const handleloginClick=()=>{
    navigate('/login');
  }

  return (
    <div className='register'>
        <h3>Registration</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input
          type="text"
          name="name"
          placeholder='Enter your name'
          value={formData.name}
          onChange={handleChange}
          required
        /><br/><br/>

        <label>Email</label><br/>
        <input
          type="email"
          name="email"
          placeholder='Enter your email'
          value={formData.email}
          onChange={handleChange}
          required
        /><br/><br/>

        <label>Password</label><br/>
        <input
          type="password"
          name="password"
          placeholder='Enter your password'
          value={formData.password}
          onChange={handleChange}
          required
        /><br/><br/>

        <label>Phone</label><br/>
        <input
          type="tel"
          name="phone"
          pattern="[0-9]{10}"
          placeholder='Enter your number'
          value={formData.phone}
          onChange={handleChange}
          required
        /><br/><br/>

        <label>Profession</label>
        <select
          name="profession"
          id="profession"
          value={formData.profession}
          onChange={handleChange}>
          <option value="Select">Select</option>
          <option value="Driver">Driver</option>
          <option value="Doctor">Doctor</option>
          <option value="Police">Police</option>
        </select><br/><br/>

        <input type="submit" value="Register"/>
      </form><br/>

      <button onClick={handleloginClick}>Login</button>
    </div>
  );
};

export default Register;
