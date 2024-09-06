import React, { useState, useEffect } from 'react';
import './ContactForm.css';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log('Form Submitted:', formValues);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
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
            .filter(field => field.name !== 'message') 
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
          <button type="submit" className="submit-btn-contact">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
