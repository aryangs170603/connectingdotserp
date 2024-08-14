import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlacementSection.css';

import companyLogo from '../Logos/Placementsection/amazon.png';
import faceImage1 from '../Logos/Placementsection/pic1pp.png';
import faceImage2 from '../Logos/Placementsection/pic2pp.png';
import faceImage3 from '../Logos/Placementsection/pic3pp.png';
import faceImage4 from '../Logos/Placementsection/pic4pp.png';
import faceImage5 from '../Logos/Placementsection/pic5pp.png';
import faceImage6 from '../Logos/Placementsection/front9.png';
import faceImage7 from '../Logos/Placementsection/front10.png';
import faceImage8 from '../Logos/Placementsection/front11.png';
import companylogo2 from '../Logos/Placementsection/deloitte1.png';
import companylogo3 from '../Logos/Placementsection/cltech.png';
import companylogo4 from '../Logos/Placementsection/agconsultancy.png';
import companylogo5 from '../Logos/Placementsection/marketlegos.png';

const placementStories = [
  { name: 'Preetesh Pardeshi', salary: '10 LPA', degree: 'Trained on- SAP ABAP', company: 'Placed in', logo: companylogo4, topImage: faceImage1 },
  { name: 'Nikhilesh Landge', salary: '12 LPA', degree: 'Trained on- SAP SD', company: 'Placed in', logo: companylogo3, topImage: faceImage2 },
  { name: 'Shubham Desale', salary: '9 LPA', degree: 'Trained on- SAP MM', company: 'Placed in', logo: companylogo2, topImage: faceImage3 },
  { name: 'Nitesh Kumar', salary: '15 LPA', degree: 'Trained on- SAP FICO', company: 'Placed in', logo: companylogo5, topImage: faceImage4 },
  { name: 'Seshu Tamma', salary: '11 LPA', degree: 'Trained on- SAP Security', company: 'Placed in', logo: companylogo2, topImage: faceImage5 },
  { name: 'Pratham Singh', salary: '18 LPA', degree: 'Trained on- SAP FICO', company: 'Placed in', logo: companyLogo, topImage: faceImage8 },
];

const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, size + i));
  }
  return chunked;
};

const PlacementSection = () => {
  const [index, setIndex] = useState(0);
  const chunkedStoriesDesktop = chunkArray(placementStories, 3);
  const chunkedStoriesMobile = chunkArray(placementStories, 1);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className="placement-section text-center">
      <h2 className="section-titleP">OUR STUDENTS PLACED AT</h2>
      <Carousel 
        indicators={false} 
        controls={true} 
        className="d-none d-md-block"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {chunkedStoriesDesktop.map((storyChunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {storyChunk.map((story, storyIndex) => {
                const cardClassName = `student-placement-card card-${index * 3 + storyIndex}`;
                return (
                  <Col key={storyIndex} md={4} className="p-2">
                    <Card className={cardClassName}>
                      <Card.Img variant="top" src={story.topImage} className="top-image" />
                      <Card.Body>
                        <Card.Title>{story.name}</Card.Title>
                        <div className="dotted-underline"></div>
                        <Card.Text>
                          <p><strong>Salary:</strong> {story.salary}</p>
                          <p>{story.degree}</p>
                          <p>{story.company}</p>
                          <p><img src={story.logo} alt={story.company} className="company-icon" /></p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <Carousel 
        indicators={false} 
        controls={false} 
        interval={3000} 
        className="d-block d-md-none"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {chunkedStoriesMobile.map((storyChunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {storyChunk.map((story, storyIndex) => {
                const cardClassName = `student-placement-card card-${index * 1 + storyIndex}`;
                return (
                  <Col key={storyIndex} xs={12} className="p-2">
                    <Card className={cardClassName}>
                      <Card.Img variant="top" src={story.topImage} className="top-image" />
                      <Card.Body>
                        <Card.Title>{story.name}</Card.Title>
                        <div className="dotted-underline"></div>
                        <Card.Text>
                          <p><strong>Salary:</strong> {story.salary}</p>
                          <p>{story.degree}</p>
                          <p>{story.company}</p>
                          <p><img src={story.logo} alt={story.company} className="company-icon" /></p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="radio-buttons">
        {chunkedStoriesDesktop.map((_, btnIndex) => (
          <input 
            type="radio" 
            name="carousel-btn" 
            key={btnIndex} 
            checked={index === btnIndex} 
            onChange={() => handleSelect(btnIndex)} 
          />
        ))}
      </div>
    </Container>
  );
};

export default PlacementSection;
