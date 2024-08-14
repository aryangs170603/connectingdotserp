import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeedbackandReviews.css";
import premImage1 from "../Logos/FeedbacksandReviews/review image 1.png";
import premImage2 from "../Logos/FeedbacksandReviews/review image 2.png";
import premImage3 from "../Logos/FeedbacksandReviews/review image 3.jpg";
import premImage4 from "../Logos/FeedbacksandReviews/review image 4.png";
import premImage5 from "../Logos/FeedbacksandReviews/review image 5.png";
import googleLogo from "../Logos/FeedbacksandReviews/google-logo.png"; // Update with the correct path to your Google logo

const reviews = [
  {
    name: "Niveath P",
    review:
      "I completed the SAP HCM course at Connecting Dots ERP in Mumbai, where expert instructors guided me through SAP complexities with clarity. The comprehensive, well-designed course covered all essential modules.",
    image: premImage3,
  },
  {
    name: "Shweta Udainiya",
    review:
      "Connecting Dots Advancements offers top SAP training in Mumbai with expert coaches, flexible learning, and strong job support. I completed my SAP SD Course here, highly recommending it for a successful SAP career.",
    image: premImage1,
  },
  {
    name: "Seshu Tamma",
    review:
      "In my opinion, Connecting Dots is Mumbai's best SAP training center, offering top-notch SAP Aruba courses with a comprehensive curriculum, expert instructors, and excellent placement assistance.",
    image: premImage2,
  },
  {
    name: "Shreyansh Gupta",
    review:
      "Connecting Dots Advancements offers top SAP training in Mumbai with expert coaches, flexible learning, and strong job support. I completed my SAP SD Course here, highly recommending it for a successful SAP career.",
    image: premImage4,
  },
  {
    name: "Sai Srujan",
    review:
      "I completed the SAP HCM course at Connecting Dots ERP in Mumbai, where expert instructors guided me through SAP complexities with clarity. The comprehensive, well-designed course covered all essential modules.",
    image: premImage5,
  },
  {
    name: "Seshu Tamma",
    review:
      "In my opinion, Connecting Dots is Mumbai's best SAP training center, offering top-notch SAP Aruba courses with a comprehensive curriculum, expert instructors, and excellent placement assistance.",
    image: premImage2,
  },
];

const FeedbackAndReviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const containerRef = useRef(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setExpandedIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setSelectedIndex(selectedIndex);
  };

  return (
    <Container fluid className="feedback-section text-center" ref={containerRef}>
      <h3 className="section-subtitle">FEEDBACKS & REVIEWS</h3>
      <Carousel
        activeIndex={selectedIndex}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
      >
        {isMobile
          ? reviews.map((review, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  <Col xs={12} className="d-flex justify-content-center mb-4">
                    <Card
                      className={`feedback-card shadow ${
                        expandedIndex === index ? "expanded" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(index);
                      }}
                    >
                      <div className="card-body-wrapper d-flex">
                        <div className="img-container">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="review-image"
                          />
                          <img
                            src={googleLogo}
                            alt="Google Logo"
                            className="google-logo"
                          />
                        </div>
                        <Card.Body>
                          <i className="fa fa-quote-left icon"></i>
                          <Card.Title className="review-name">{review.name}</Card.Title>
                          <Card.Text className="review-text">
                            {expandedIndex === index
                              ? review.review
                              : `${review.review.substring(0, 80)}...`}
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            ))
          : reviews.reduce((acc, review, index) => {
              if (index % 3 === 0) {
                acc.push(
                  <Carousel.Item key={index}>
                    <Row className="justify-content-center">
                      {[index, index + 1, index + 2].map((i) => (
                        <Col key={i} md={4} xs={12} className="d-flex justify-content-center mb-4">
                          {reviews[i] && (
                            <Card
                              className={`feedback-card shadow ${
                                expandedIndex === i ? "expanded" : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(i);
                              }}
                            >
                              <div className="card-body-wrapper d-flex">
                                <div className="img-container">
                                  <img
                                    src={reviews[i].image}
                                    alt={reviews[i].name}
                                    className="review-image"
                                  />
                                  <img
                                    src={googleLogo}
                                    alt="Google Logo"
                                    className="google-logo"
                                  />
                                </div>
                                <Card.Body>
                                  <i className="fa fa-quote-left icon"></i>
                                  <Card.Title className="review-name">{reviews[i].name}</Card.Title>
                                  <Card.Text className="review-text">
                                    {expandedIndex === i
                                      ? reviews[i].review
                                      : `${reviews[i].review.substring(0, 80)}...`}
                                  </Card.Text>
                                </Card.Body>
                              </div>
                            </Card>
                          )}
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                );
              }
              return acc;
            }, [])}
      </Carousel>
      {!isMobile && (
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              name="review-set"
              checked={selectedIndex === 0}
              onChange={() => handleSelect(0)}
            />
          </label>
          <label>
            <input
              type="radio"
              name="review-set"
              checked={selectedIndex === 1}
              onChange={() => handleSelect(1)}
            />
          </label>
        </div>
      )}
    </Container>
  );
};

export default FeedbackAndReviews;
