import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const ContactForm = () => {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSubmitted(false);
    // Set a timer to reopen the modal after 5 minutes (300000 milliseconds)
    setTimeout(() => {
      setShow(true);
    }, 3000000);
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    // Set a timer to show the modal 10 seconds after the component mounts
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
    setSubmitted(true);
    // Uncomment the following line if you want to close the modal after form submission
    // handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact Us
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitted && <Alert variant="success">Form submitted successfully!</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your mobile number" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email ID</Form.Label>
              <Form.Control type="email" placeholder="Enter your email id" required />
            </Form.Group>

            {/* <Form.Group controlId="formCourses">
              <Form.Label>Courses</Form.Label>
              <Form.Control as="select" required>
                <option>SAP</option>
                <option>IT Courses</option>
                <option>Data Visualisation</option>
                <option>Digital Marketing</option>
                <option>HR Courses</option>
              </Form.Control>
            </Form.Group> */}

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        @media (max-width: 576px) {
          .modal-content {
            margin: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactForm;
