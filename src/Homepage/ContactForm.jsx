import React, { useState, useEffect } from 'react';
import './ContactForm.css'; // Ensure this file includes necessary styling

const ContactForm = ({ course, formData, onClose }) => {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    // Initialize form values based on the fields
    if (formData && formData.fields) {
      const initialFormValues = {};
      formData.fields.forEach(field => {
        initialFormValues[field.name] = ''; // Initialize with an empty string
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
      onClose(); // Close modal after submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!formData) return null; // Prevent rendering if formData is not yet available

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={onClose}>&times;</span>
          <h2 className="headinn">{formData.title} {course}</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            {formData.fields.map((field, index) => (
              <div className="form-group" key={index}>
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formValues[field.name] || ''} // Default to an empty string
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <button type="submit" className="submit-btn">{formData.submitButton}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
