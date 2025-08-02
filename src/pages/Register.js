import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    referralCode: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://paisarap-backend.onrender.com/api/auth/register', userData);
      alert('Registration successful!');
      navigate('/');
    } catch (err) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register - Paisarap</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Referral Code (optional):</label>
          <input type="text" name="referralCode" className="form-control" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">Register</button>
        <p className="mt-3">Already have an account? <a href="/">Login</a></p>
      </form>
    </div>
  );
};

export default Register;
