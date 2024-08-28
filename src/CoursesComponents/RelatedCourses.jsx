import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RelatedCourses.css';
import ContactForm from '../Homepage/ContactForm';
import { CityContext } from '../CityContext'; // Import the CityContext

const CoursesRelated = ({ pageId }) => {
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const city = useContext(CityContext); // Get the city from context
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const cachedData = localStorage.getItem(`relatedCourses_${pageId}`);
        if (cachedData) {
          setRelatedCourses(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const response = await fetch('/Jsonfolder/relateddata.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const pageData = data?.[pageId];
        if (pageData) {
          const updatedCourses = pageData.items.map(course => ({
            ...course,
            name: course.name?.replace(/{city}/g, city),
            description: course.description?.replace(/{city}/g, city),
            icon: course.icon?.replace(/{city}/g, city)
          }));

          localStorage.setItem(`relatedCourses_${pageId}`, JSON.stringify(updatedCourses));
          setRelatedCourses(updatedCourses);
        } else {
          throw new Error('Page data not found');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching related courses data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pageId, city]);

  const handleEnrollNowClick = useCallback((relcourse) => {
    setSelectedCourse(relcourse);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setSelectedCourse(null);
  }, []);

  const handleSelect = useCallback((selectedIndex) => {
    setActiveIndex(selectedIndex);
  }, []);

  const renderRelatedCourses = useMemo(() => {
    if (!relatedCourses.length) return null;

    return relatedCourses.map((relcourse, index) => (
      <div key={index} className="related-course-card" onClick={() => handleEnrollNowClick(relcourse.name)}>
        <div className="related-icon-container">
          <img src={relcourse.icon} alt={relcourse.alt} className="related-course-icon" />
        </div>
        <h3>{relcourse.name}</h3>
        <p>{relcourse.description}</p>
      </div>
    ));
  }, [relatedCourses, handleEnrollNowClick]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

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
            {renderRelatedCourses.slice(0, 5)}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="related-courses-grid">
            {renderRelatedCourses.slice(5, 10)}
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
