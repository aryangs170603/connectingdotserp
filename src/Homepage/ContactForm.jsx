import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import axios from 'axios'; // Import axios

const ContactForm = ({ course, formData, onClose }) => {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    if (formData && formData.fields) {
      const initialFormValues = {};
      formData.fields.forEach(field => {
        initialFormValues[field.name] = '';
      });
      setFormValues(initialFormValues);
    }
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);  // Check form data before submission
    try {
      // Replace with your backend DevTunnel URL
      const response = await axios.post('https://qhvpqmhj-5001.inc1.devtunnels.ms/api/submit', formValues);
      console.log('Form Submitted:', response.data);
      alert('Form submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  if (!formData) return null;

  // Ensure proper text for the button
  const buttonText = formData.submitButton.includes('Demo') 
    ? formData.submitButton.replace(/Demo\s*Demo/, 'Demo') 
    : formData.submitButton;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn-contact" onClick={onClose}>&times;</span>
        <h2 className="headinn">{formData.title} {course}</h2>
        <div className="line-separator"></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {formData.fields
            .filter(field => field.name !== 'message')  // Filter out unnecessary fields
            .map((field, index) => (
              <div className="contact-form-group" key={index}>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formValues[field.name] || ''}
                  onChange={handleChange}
                  placeholder={field.label}  
                  required
                />
              </div>
            ))}
          
          {/* Ensure the field name matches the server schema */}
          <div className="contact-form-group">
            <input
              type="text"
              id="contact"
              name="contact"
              value={formValues['contact'] || ''}
              onChange={handleChange}
              placeholder="Contact Number"
              required
            />
          </div>
          
          <button type="submit" className="submit-btn-contact">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
