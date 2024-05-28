import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const existingRegistrations = JSON.parse(localStorage.getItem('registrationData')) || {};
    const user = Object.values(existingRegistrations).find(registration => 
      registration.email === email && registration.password === password
    );

    if (!user) {
      if (!existingRegistrations[email])
      {
        alert('Invalid email.');
      } 
      else 
      {
        alert('Incorrect password.'); 
      }
      return;
    }
    alert('Login successful!');
    navigate('/home'); 
  };

  return (
    <div className='login'>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>Email</label><br/>
        <input 
          type='email' 
          placeholder='Enter your email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/><br/>

        <label>Password</label><br/>
        <input 
          type='password' 
          placeholder='Enter your password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/><br/>

        <input type='submit' value="Login"/>
      </form>
    </div>
  );
}

export default Login;
