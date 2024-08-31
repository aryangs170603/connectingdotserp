import React, { useState, useEffect } from 'react';

const ContactForm = ({ course, onClose }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Jsonfolder/formData.json'); // Ensure the correct path
        const data = await response.json();
        console.log('Fetched Form Data:', data.forms[course] || data.forms.default); // Debug: Check fetched form data
        setFormData(data.forms[course] || data.forms.default);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, [course]);

  if (!formData) {
    return <div>Loading form...</div>; // Show a loading state
  }

  const [formValues, setFormValues] = useState({});
  
  useEffect(() => {
    const initialFormValues = {};
    formData.fields.forEach(field => {
      initialFormValues[field.name] = '';
    });
    setFormValues(initialFormValues);
  }, [formData.fields]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formValues);
    onClose(); // Close modal after submission
  };

  return (
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
                value={formValues[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit" className="submit-btn">{formData.submitButton}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
