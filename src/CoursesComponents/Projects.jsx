import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

const Induspro = ({ pageId, pageType }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [indusproData, setIndusproData] = useState(null);
  

  useEffect(() => {
    fetch('public/Jsonfolder/indusprodata.json')  // Path to your JSON file
      .then((response) => response.json())
      .then((data) => {
        // Fetch data based on pageType and pageId
        const pageData = data[pageType]?.[pageId];
        setIndusproData(pageData);
      })
      .catch((error) => console.error('Error fetching the data:', error));
  }, [pageId, pageType]);

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  if (!indusproData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="induspro-container text-center">
      <div className="induspro-title">
        <h2>{indusproData.title}</h2>
      </div>
      <Carousel
        activeIndex={carouselIndex}
        onSelect={handleSelect}
        interval={3000} // 3 seconds interval for automatic sliding
        indicators={false}
        controls={false}
        pause="hover" // Pause the carousel on hover
      >
        <Carousel.Item>
          <div className="induspro-grid">
            {indusproData.projects.slice(0, 5).map((project, index) => (
              <div key={index} className="induspro-card">
                <div className="induspro-container">
                  <img src={project.icon} alt={`${project.name} icon`} className="induspro-icon" />
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="induspro-grid">
            {indusproData.projects.slice(5, 10).map((project, index) => (
              <div key={index} className="induspro-card">
                <div className="induspro-container">
                  <img src={project.icon} alt={`${project.name} icon`} className="induspro-icon" />
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="induspro-radio-buttons">
        <label>
          <input
            type="radio"
            name="carousel-radio"
            checked={carouselIndex === 0}
            onChange={() => handleSelect(0)}
          />
        </label>
        <label>
          <input
            type="radio"
            name="carousel-radio"
            checked={carouselIndex === 1}
            onChange={() => handleSelect(1)}
          />
        </label>
      </div>
    </div>
  );
};

export default Induspro;
