import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RelatedCourses.css';
import ContactForm from '../Homepage/ContactForm';

const CoursesRelated = () => {
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('public/Jsonfolder/relateddata.json')  // Path to your JSON file
      .then(response => response.json())
      .then(data => setRelatedCourses(data.DSrelcourses.items))
      .catch(error => console.error('Error fetching related courses data:', error));
  }, []);

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

  const handleEnrollNowClick = (relcourse) => {
    setSelectedCourse(relcourse);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="related-courses-container text-center">
      <div className="related-courses-title">
        <h2>RELATED COURSES</h2>
      </div>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={3000} // 3 seconds interval for automatic sliding
        indicators={false}
        controls={false}
        pause="hover" // Pause the carousel on hover
      >
        <Carousel.Item>
          <div className="related-courses-grid">
            {relatedCourses.slice(0, 5).map((relcourse, index) => (
              <div key={index} className="related-course-card" onClick={() => handleEnrollNowClick(relcourse.name)}>
                <div className="related-icon-container">
                  <img src={relcourse.icon} alt={relcourse.alt} className="related-course-icon" />
                </div>
                <h3>{relcourse.name}</h3>
                <p>{relcourse.description}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="related-courses-grid">
            {relatedCourses.slice(5, 10).map((relcourse, index) => (
              <div key={index} className="related-course-card" onClick={() => handleEnrollNowClick(relcourse.name)}>
                <div className="related-icon-container">
                  <img src={relcourse.icon} alt={relcourse.alt} className="related-course-icon" />
                </div>
                <h3>{relcourse.name}</h3>
                <p>{relcourse.description}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="related-carousel-radio-buttons">
        <input
          type="radio"
          name="carousel-radio"
          checked={activeIndex === 0}
          onChange={() => handleSelect(0)}
        />
        <input
          type="radio"
          name="carousel-radio"
          checked={activeIndex === 1}
          onChange={() => handleSelect(1)}
        />
      </div>

      {showModal && <ContactForm onClose={handleCloseModal} course={selectedCourse} />}
    </div>
  );
};

export default CoursesRelated;
