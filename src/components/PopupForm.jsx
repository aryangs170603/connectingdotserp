import React, { useState, useEffect } from 'react';
import './PopupForm.css';
import { useLocation } from 'react-router-dom';

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
    if (hiddenPages.includes(location.pathname)) {
      setIsVisible(false);
      return;
    }

    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(showTimer);
  }, [location.pathname]);

  useEffect(() => {
    if (!isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(true);
      }, 300000); // 5 minutes

      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

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

    if (!isChecked) {
      alert('Please agree to the terms and conditions and privacy policy.');
      return;
    }

    const formData = {
      name,
      mobile,
      email,
      courseName: course,
      date: new Date().toISOString(),  // Add timestamp for tracking
    };

    // Save the form data to local storage
    const storedLeads = JSON.parse(localStorage.getItem('leads')) || [];
    storedLeads.push(formData);
    localStorage.setItem('leads', JSON.stringify(storedLeads));

    alert('Registration complete!');
    onSubmitData(formData); // Trigger refresh in Dashboard

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
