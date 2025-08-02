import React from 'react';

const Login = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Login to Paisarap</h2>
      <form>
        <input type="text" placeholder="Email" className="form-control mb-2" />
        <input type="password" placeholder="Password" className="form-control mb-2" />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
