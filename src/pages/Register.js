import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Register = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2 className="text-center">Register to Paisarap</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" placeholder="Full Name" />
          </div>
          <div className="form-group mt-2">
            <label>Email:</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group mt-2">
            <label>Password:</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-success w-100 mt-3">Register</button>
        </form>
        <p className="mt-3 text-center">Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
