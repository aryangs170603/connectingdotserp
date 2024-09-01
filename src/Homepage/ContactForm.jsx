import React, { useState, useEffect } from 'react';

const ContactForm = ({ course, onClose }) => {
  const [formData, setFormData] = useState(null);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Jsonfolder/formData.json'); // Ensure the correct path
        const data = await response.json();
        const selectedFormData = data.forms[course] || data.forms.default;

        console.log('Fetched Form Data:', selectedFormData); // Debug: Check fetched form data

        // Initialize form values based on the fields
        const initialFormValues = {};
        selectedFormData.fields.forEach(field => {
          initialFormValues[field.name] = '';
        });

        setFormValues(initialFormValues);
        setFormData(selectedFormData);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, [course]);

  if (!formData) {
    return <div>Loading form...</div>; // Show a loading state
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log('Form Submitted:', formValues);
      // Add your form submission logic here (e.g., send data to the server)
      onClose(); // Close modal after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, show an error message to the user
    }
  };

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
    </div>
  );
};

export default ContactForm;
