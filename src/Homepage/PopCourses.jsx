import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import LazyLoad from 'react-lazyload';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PopCourses.css';

// Lazy loading the ContactForm component
const ContactForm = lazy(() => import('./ContactForm'));

// Importing course icons
import img1 from '../Icons/sap (3).png';
import img2 from '../Icons/MnDS.png';
import img3 from '../Icons/online-analytical.png';
import img4 from '../Icons/salesforce.png';
import img5 from '../Icons/HR PR2.png';
import img6 from '../Icons/python-file.png';
import img7 from '../Icons/java.png';
import img8 from '../Icons/business-intelligence.png';
import img9 from '../Icons/cloud-data.png';

// Course data
const courses = [
  { name: 'SAP S/4 HANA Courses', count: 25, icon: img1 },
  { name: 'Masters in Data Science', count: 25, icon: img2 },
  { name: 'Masters in Data Analytics', count: 16, icon: img3 },
  { name: 'Salesforce', count: 30, icon: img4 },
  { name: 'HR Courses', count: 8, icon: img5 },
  { name: 'Full-Stack Python', count: 12, icon: img6 },
  { name: 'Full-Stack Java', count: 17, icon: img7 },
  { name: 'PowerBI', count: 17, icon: img8 },
  { name: 'AWS/Azure/Google Cloud Platform', count: 17, icon: img9 },
];

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showModal]);

  const handleEnrollNowClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <div className="courses-container text-center">
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Popular Courses | Your Website Name</title>
        <meta name="description" content="Explore our most popular courses including SAP, Data Science, Salesforce, and more. Enroll now and secure your seat!" />
        <meta name="keywords" content="SAP courses, Data Science, Salesforce, HR courses, Full-Stack Python, PowerBI, AWS, Azure, Google Cloud" />
      </Helmet>

      <div className="courses-title">
        <h2>OUR POPULAR COURSES</h2>
      </div>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card" onClick={() => handleEnrollNowClick(course.name)}>
            <div className="icon-container">
              <LazyLoad height={100} offset={100}>
                <img src={course.icon} alt={`${course.name} icon`} className="course-icon" />
              </LazyLoad>
            </div>
            <h3>{course.name}</h3>
            <p>{course.count} Seats Left</p>
          </div>
        ))}
      </div>
      <div className="mb-3">
        <Button className="outline-btnn ">Download Brochure</Button>
        <Button className="outline-btnn" onClick={() => handleEnrollNowClick('Book Demo for Free')}>Book Demo</Button>
      </div>
      {/* Lazy loaded ContactForm with fallback */}
      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm onClose={handleCloseModal} course={selectedCourse} />
        </Suspense>
      )}
    </div>
  );
};

export default Courses;
