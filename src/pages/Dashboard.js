import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('https://paisarap-backend.onrender.com/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(res.data);
      } catch (err) {
        alert('Session expired. Please login again.');
        window.location.href = '/';
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <h2>Welcome, {user.name} 🎉</h2>
      <p>Email: {user.email}</p>
      <p>Balance: ₹{user.balance}</p>
    </div>
  );
};

export default Dashboard;
