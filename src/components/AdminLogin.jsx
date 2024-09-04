import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Access the environment variables using Vite
  const ADMIN_EMAILS = import.meta.env.VITE_ADMIN_EMAILS.split(",");
  const ADMIN_PASSWORDS = import.meta.env.VITE_ADMIN_PASSWORDS.split(",");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password match any of the allowed users
    const userIndex = ADMIN_EMAILS.indexOf(email);

    if (userIndex !== -1 && ADMIN_PASSWORDS[userIndex] === password) {
      onLogin(); // Set the user as authenticated
      navigate("/dashboard"); // Redirect to dashboard on successful login
    } else {
      alert("Incorrect email or password!");
    }
  };

  return (
    <section className="admin-login-section">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <h2>Admin Log-In</h2>
          <div className="inputbox">
            <ion-icon name="person-outline"></ion-icon>
            <input
              type="email"
              name="Email"
              id="EmailId"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="EmailId">Email Address</label>
          </div>

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
          <button type="submit" className="adminbtn">
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
