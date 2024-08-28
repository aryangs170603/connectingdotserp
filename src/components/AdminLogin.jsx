import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {  // Add the onLogin prop
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Access the environment variable using Vite
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
  console.log('Admin Password from env:', ADMIN_PASSWORD); // Debugging line

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onLogin(); // Set the user as authenticated
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <section className="admin-login-section">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <h2>Admin Log-In</h2>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input 
              type="password" 
              name="password" 
              id="loginPassword" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <label htmlFor="loginPassword">Password</label>
          </div>
          <button type="submit" className="adminbtn">Log In</button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
