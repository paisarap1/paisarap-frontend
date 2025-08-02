import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2 className="text-center">Login to Paisarap</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group mt-2">
            <label>Password:</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
        </form>
        <p className="mt-3 text-center">No account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
