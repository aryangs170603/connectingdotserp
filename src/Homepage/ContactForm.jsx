import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = ({ onClose, course }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.send(
      'service_mbz2yyi', // Replace with EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with EmailJS template ID
      {
        course,
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        to_email: 'manishshinde19996@gmail.com', // email address to send the form data to
      },
      'YOUR_USER_ID' // Replace with EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      onClose(); 
    }).catch((err) => {
      console.error('FAILED...', err);
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2 className='headinn'>Enroll in {course}</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-btn">Enroll</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
