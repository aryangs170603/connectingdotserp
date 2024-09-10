import React, { useEffect, useState } from "react";
import { Carousel, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderCarousel.css";
import TextTransition, { presets } from "react-text-transition";
// import slideImage3 from "../Logos/Headercarousel/file02.png";
import logostrip from "../Logos/Headercarousel/logo strip.png";
import SAPmodule1 from "../Logos/Headercarousel/SAP module1.webp";
import DSh from "../Logos/Headercarousel/DSh.webp";
import DGM from "../Logos/Headercarousel/DGM.webp";
import IT from "../Logos/Headercarousel/IT.webp";
import ContactForm from "../Homepage/ContactForm"; 

const TEXTS1 = [  
  "Connect Your Dots with  SAP Expertise",
  "Connect Your Dots with Data Science",
  "Connect Your Dots in IT Excellence",
  "Connect Your Dots in Digital Marketing",
];
const TEXTS2 = [];
const IMAGES = ["https://i.imgur.com/bT4nqQM.png", "https://i.imgur.com/s98ODLR.png", " https://i.imgur.com/THNopek.png" , "https://i.imgur.com/HH4AqB0.png"];

const HeaderCarousel = () => {
  const [index, setIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false); 

  const [question, setQuestion] = useState({
    title: "Welcome to the <span class='highlight'>Quiz!</span>",
    text: "Hover me or click on a question button to see the question here.",
  });

  const questionData = {
    Q1: {
      title:
        "Q.What is the function of an <span class='highlight'>HR Payroll</span> system?",
      text: "The function of an <span class='highlight'>HR payroll system</span> is to automate and manage employee compensation processes, including calculating wages, withholding taxes, and ensuring compliance with labor laws. It streamlines payroll operations, reduces errors, and provides accurate and timely payments to employees.",
    },
    Q2: {
      title:
        "Q.What is the purpose of the <span class='highlight'>CO</span> module in <span class='highlight'>SAP FICO</span>?",
      text: "The <span class='highlight'>CO (Controlling)</span> module in <span class='highlight'>SAP FICO</span> helps manage and monitor internal costs. It supports internal reporting by tracking and analyzing costs and revenues, aiding in budgeting, planning, and controlling operations to ensure effective cost management within an organization.",
    },
    Q3: {
      title:
        "Q.What is the role of <span class='highlight'>Express.js</span> in the <span class='highlight'>MERN</span> stack?",
      text: "<span class='highlight'>Express.js</span> is a lightweight web application framework for Node.js, used in the <span class='highlight'>MERN</span> stack. It simplifies the development of server-side applications by providing robust features for web and mobile applications, such as routing, middleware integration, and handling HTTP requests and responses.",
    },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setIndex((index) => (index + 1) % TEXTS1.length);
        setTextVisible(true);
      }, 500);
    }, 3000); // 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Lato&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleShowContactForm = () => setShowContactForm(true);
  const handleCloseContactForm = () => setShowContactForm(false);

  const FormButtons = ({ text, onClick }) => (
    <button className="custom-btn btn-3" onClick={onClick}>
      <span>{text}</span>
    </button>
  );

  const getImageStyle = (index) => {
    return {
      width: "100%",
      height: "auto",
      
    };
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="carousel-slide">
            <div className="carousel-text">
              <h2>
                Unlock your <span className="highlight">Career</span> potential
              </h2>
              <b></b>
              <h3>
                <span className="highlight">Job</span> Oriented Programs
              </h3>
              <b></b>
              <p>
                Sap Courses | HR Courses | Software Development | Digital
                Marketing | Data Science | Salesforce | Cloud Computing | Full
                Stack
              </p>
              <Col>
                <p>
                  Est. 2012 Trusted by <span className="highlight">10000+</span>{" "}
                  Students
                </p>
              </Col>
              <div>
                <FormButtons
                  text="Freshers"
                  onClick={handleShowContactForm}
                />
              </div>
              <div className="logostrip">
                <img src={logostrip} alt="companies" />
              </div>
            </div>
            <div className="carousel-image">
              <img src="https://i.imgur.com/MeGidmg.png" alt="Career Potential" />
            </div>
          </div>
          
        </Carousel.Item>
        {/* Second Slide */}
        <Carousel.Item>
          <div className="carousel-slide2">
            <div className="carousel-text2">
              <h1>
                <span className={textVisible ? "visible" : "hidden"}>
                  <TextTransition springConfig={presets.wobbly}>
                    {TEXTS1[index]}
                  </TextTransition>
                </span>
              </h1>
              <br></br>
              <h3>
                <span className={textVisible ? "visible" : "hidden"}>
                  <TextTransition springConfig={presets.wobbly}>
                    {TEXTS2[index]}
                  </TextTransition>
                </span>
              </h3>
            </div>
            <div className="cardBox2">
              <div className="cardH2">
                <div className="content2">
                  <Card.Img
                    className="transition-image"
                    style={getImageStyle(index)}
                    variant="top"
                    src={IMAGES[index]}
                    alt="Future Starts Here"
                  />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* Third Slide */}
        <Carousel.Item>
          <div className="carousel-slide3">
            <div className="left-sideH3">
              <h1>
                Secure your <span className="highlight">Dream Career</span> with{" "}
                <span className="bold">Live Classes</span> From Industry Experts.
              </h1>
              <br></br>
              <br></br>
              <h2>
                Our <span className="highlight">Mentors</span> Come From Top{" "}
                <span className="highlight">MNCs</span>
              </h2>
              <br></br>
              <br></br>
              <h2>
                <img
                  src="https://i.imgur.com/FXV2ygw.png"
                  alt="Assurance badge"
                  className="assured-placement-image"
                />
                Assured Placement Opportunity*
              </h2>
            </div>
            <div className="cardBox3">
              <div className="cardH3">
                <h2>Our Mentors Come From</h2>
                <div className="content3">
                  <div className="image-grid">
                    <img
                      src="https://i.imgur.com/EG9fHbE.png"
                      alt="Image 1"
                      className="grid-image grid-image-ibm"
                    />
                    <img
                      src="https://i.imgur.com/YwY79Vt.png"
                      alt="Image 2"
                      className="grid-image grid-image-tcs"
                    />
                    <img
                      src="https://i.imgur.com/Lc1nz4P.png"
                      alt="Image 3"
                      className="grid-image grid-image-Lnt"
                    />
                    <img
                      src="https://i.imgur.com/8hNJr62.png"
                      alt="Image 4"
                      className="grid-image grid-image-amd"
                    />
                    <img
                      src="https://i.imgur.com/tioUoeR.png"
                      alt="Image 5"
                      className="grid-image grid-image-info"
                    />
                    <img
                      src="https://i.imgur.com/ZpxVMtt.png"
                      alt="Image 6"
                      className="grid-image grid-image-wip"
                    />
                    <img
                      src="https://i.imgur.com/cMlGXyg.png"
                      alt="Image 7"
                      className="grid-image grid-image-del"
                    />
                    <img
                      src="https://i.imgur.com/jv6glQt.png"
                      alt="Image 8"
                      className="grid-image grid-image-acc"
                    />
                    <img
                      src="https://i.imgur.com/YqBSwQd.png"
                      alt="Image 9"
                      className="grid-image grid-image-bmw"
                    />
                    <img
                      src="https://i.imgur.com/fjhufDO.png"
                      alt="Image 10"
                      className="grid-image grid-image-cog"
                      loading="lazy"
                    />
                    <img
                      src="https://i.imgur.com/J3Fn8Lw.png"
                      alt="Image 11"
                      className="grid-image grid-image-cis"
                    />
                    <img
                      src="https://i.imgur.com/q9vljXF.png"
                      alt="Image 12"
                      className="grid-image grid-image-tec"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* Fourth Slide */}
        <Carousel.Item>
          <div className="carousel-slide4">
            <div className="left-sideH">
              <h1 dangerouslySetInnerHTML={{ __html: question.title }}></h1>
              <p dangerouslySetInnerHTML={{ __html: question.text }}></p>
              <div className="quiz-options">
                <div className="quiz-option">
                  <button
                    className="circular-button"
                    onMouseEnter={() => setQuestion(questionData.Q1)}
                    onClick={() => setQuestion(questionData.Q1)}
                  >
                    Q1
                  </button>
                </div>
                <div className="quiz-option">
                  <button
                    className="circular-button"
                    onMouseEnter={() => setQuestion(questionData.Q2)}
                    onClick={() => setQuestion(questionData.Q2)}
                  >
                    Q2
                  </button>
                </div>
                <div className="quiz-option">
                  <button
                    className="circular-button"
                    onMouseEnter={() => setQuestion(questionData.Q3)}
                    onClick={() => setQuestion(questionData.Q3)}
                  >
                    Q3
                  </button>
                </div>
              </div>
            </div>
            <div className="right-sideH">
              <img
                src="https://i.imgur.com/4rPGeS0.png"
                alt="quiz"
                className="plants-image"
              />
              <button className="go-button">Quiz→</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ContactForm />
            <button className="close-button" onClick={handleCloseContactForm}>
              Close
              {/* Sticky Form */}
                {!showContactForm && <SContactForm />}
            
            </button>
            
          </div>
        </div>
      
      )}
    </>
  );
};

export default HeaderCarousel;
