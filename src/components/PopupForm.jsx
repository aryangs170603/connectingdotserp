import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PopupForm.css';
import { useLocation } from 'react-router-dom';

const PopupForm = ({ onSubmitData }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false); // Initially hidden
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (location.pathname === '/AdminLogin' || location.pathname === '/Dashboard') {
      setIsVisible(false);
      return;
    }

    // Show popup after 15 seconds on page load
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(showTimer);
  }, [location.pathname]);

  useEffect(() => {
    // Hide popup and reset the visibility timer
    if (!isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(true);
      }, 180000); // 3 minutes

      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert('Please agree to the terms and conditions and privacy policy.');
      return;
    }

    const formData = {
      name,
      mobile,
      email,
      courseName: course,
    };

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://your-api-endpoint.com/register', formData);
      console.log('Response:', response.data);
      alert('Registration complete!');
      onSubmitData(formData);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }

    setName('');
    setMobile('');
    setEmail('');
    setCourse('');
    setIsChecked(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-form-overlay">
      <div className="popup-form-container">
        <button className="close-button-pf-2" onClick={() => setIsVisible(false)}>×</button>
        <div className="header-container">
          <img src="src/Logos/Navbar/connectingdotslogoppf.png" alt="Logo" className="logo-ppf" />
          <h2>Register now</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number*"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Which course are you looking for?*"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <label htmlFor="terms">
              I hereby accept the <a href="/terms" target="_blank" rel="noopener noreferrer">terms and conditions</a> and 
              <a href="/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a> of Connecting Dots ERP.
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
