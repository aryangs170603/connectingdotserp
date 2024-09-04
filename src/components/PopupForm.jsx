import React, { useState, useEffect } from 'react';
import './PopupForm.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PopupForm = ({ onSubmitData }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false); 
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const hiddenPages = ['/AdminLogin', '/Dashboard'];

    console.log("Current Path:", location.pathname);

    if (hiddenPages.includes(location.pathname)) {
      setIsVisible(false);
      return;
    }

    // Increase the initial appearance timer to 15 seconds
    const showTimer = setTimeout(() => {
      if (!hiddenPages.includes(location.pathname)) {
        setIsVisible(false);
      }
    }, 5001); 

    return () => clearTimeout(showTimer);
  }, [location.pathname]);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('no-scroll'); 
    } else {
      document.body.classList.remove('no-scroll'); 
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name Validation
    if (name.length > 50) {
      alert('Name cannot exceed 50 characters.');
      return;
    }

    // Mobile Number Validation
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      alert('Mobile number must be exactly 10 digits and numeric.');
      return;
    }

    // Email Validation
    const emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Invalid email format. Only lowercase letters, "@" and "." are allowed.');
      return;
    }

    // Course Validation
    if (course.length > 50) {
      alert('Course name cannot exceed 50 characters.');
      return;
    }

    if (!isChecked) {
      alert('Please agree to the terms and conditions and privacy policy.');
      return;
    }

    const formData = {
      name,
      mobile,
      email,
      courseName: course,
      date: new Date().toISOString(),
    };

    try {
      const response = await axios.post('http://localhost:3000/api/submit', formData);

      console.log('Server response:', response.data);
      alert('Registration complete!');
      onSubmitData(formData); 

      // Save the form data to local storage
      const storedLeads = JSON.parse(localStorage.getItem('leads')) || [];
      storedLeads.push(formData);
      localStorage.setItem('leads', JSON.stringify(storedLeads));

      setName('');
      setMobile('');
      setEmail('');
      setCourse('');
      setIsChecked(false);
      setIsVisible(false);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  if (location.pathname === '/Dashboard' || location.pathname === '/AdminLogin') {
    console.log("Popup is hidden on this page.");
    return null;
  }

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
            maxLength="50"
          />
          <input
            type="email"
            placeholder="E-mail*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="[a-z]+[a-z0-9._]+@[a-z]+\.[a-z]{2,}$"
            title="Email must be lowercase, contain '@', and end with a valid domain (e.g., .com, .org)."
          />
          <input
            type="tel"
            placeholder="Mobile Number*"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            pattern="[0-9]{10}"
            title="Mobile number must be exactly 10 digits."
          />
          <input
            type="text"
            placeholder="Which course are you looking for?*"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            maxLength="50"
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
              <a href="/privacy" target="_blank" rel="noopener noreferrer"> privacy policy</a> of Connecting Dots ERP.
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
