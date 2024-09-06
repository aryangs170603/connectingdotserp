import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PopCourses.css';

import ContactForm from './ContactForm';

import img1 from '../Icons/sap (3).png';
import img2 from '../Icons/MnDS.png';
import img3 from '../Icons/online-analytical.png';
import img4 from '../Icons/salesforce.png';
import img5 from '../Icons/HR PR2.png';
import img6 from '../Icons/python-file.png';
import img7 from '../Icons/java.png';
import img8 from '../Icons/business-intelligence.png';
import img9 from '../Icons/cloud-data.png';

const courses = [
  { id: 'SAP HANA Course', name: 'SAP S/4 HANA Courses', count: 25, icon: img1 },
  { id: 'Data Science Course', name: 'Masters in Data Science', count: 25, icon: img2 },
  { id: 'Data Analytics Course', name: 'Masters in Data Analytics', count: 16, icon: img3 },
  { id: 'Salesforce Course', name: 'Salesforce', count: 30, icon: img4 },
  { id: 'HR courses', name: 'HR Courses', count: 8, icon: img5 },
  { id: 'Full stack Python Course', name: 'Full-Stack Python', count: 12, icon: img6 },
  { id: 'Full stack Java Course', name: 'Full-Stack Java', count: 17, icon: img7 },
  { id: 'Power BI Course', name: 'PowerBI', count: 17, icon: img8 },
  { id: 'AWS/Azure/GCP Courses', name: 'AWS/Azure/Google Cloud Platform', count: 17, icon: img9 },
];

const Courses = () => {
  const [showPopupForm, setShowPopupForm] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (showPopupForm) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showPopupForm]);

  useEffect(() => {
    // Prefetch the brochure file
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'https://drive.google.com/uc?export=download&id=1MNNq4w8dcw88Q9fSIh5Y4s-UmTonmCsc';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleEnrollNowClick = async (courseId) => {
    await fetchFormData(courseId);
    setSelectedCourseId(courseId);
    setShowPopupForm(true);
  };

  const fetchFormData = async (courseId) => {
    try {
      const response = await fetch('Jsonfolder/formData.json');
      const data = await response.json();
      setFormData(data.forms[courseId] || data.forms['default']);
    } catch (error) {
      console.error('Error fetching form data:', error);
    }
  };

  const handleClosePopupForm = () => {
    setShowPopupForm(false);
    setSelectedCourseId(null);
  };

  const handleDownloadBrochure = () => {
    // Start download immediately
    window.location.href = 'https://drive.google.com/uc?export=download&id=1MNNq4w8dcw88Q9fSIh5Y4s-UmTonmCsc';
  };

  return (
    <div className="courses-container text-center">
      <Helmet>
        <title>Connecting Dots</title>
        <meta name="description" content="Explore our most popular courses including SAP, Data Science, Salesforce, and more. Enroll now and secure your seat!" />
        <meta name="keywords" content="SAP courses, Data Science, Salesforce, HR courses, Full-Stack Python, PowerBI, AWS, Azure, Google Cloud" />
      </Helmet>

      <div className="courses-title">
        <h2>OUR POPULAR COURSES</h2>
      </div>
      <div className="courses-grid">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card"
            onClick={() => handleEnrollNowClick(course.id)}
            data-aos="fade-up"
          >
            <div className="icon-container">
              <img src={course.icon} alt={`${course.name} icon`} className="course-icon" />
            </div>
            <h3>{course.name}</h3>
            <p>{course.count} Seats Left</p>
          </div>
        ))}
      </div>
      <div className="mb-3">
        <Button 
          className="outline-btnn" 
          onClick={handleDownloadBrochure}
        >
          Download Brochure
        </Button>
        <Button className="outline-btnn" onClick={() => handleEnrollNowClick('demo')}>Book a Free Demo</Button>
      </div>
      {showPopupForm && formData && (
        <ContactForm course={selectedCourseId} formData={formData} onClose={handleClosePopupForm} />
      )}
    </div>
  );
};

export default Courses;
