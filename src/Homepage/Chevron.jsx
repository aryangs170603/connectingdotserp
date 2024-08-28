import React, { useEffect } from 'react';
import './Chevron.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Phases = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration for animations
  }, []);

  return (
    <div className="containerCH">
      <h1 data-aos="fade-down">TRAINING TO PLACEMENT APPROACH</h1>
      <div className="phases">
        <ul>
          <li 
            className="chevron-item highest-salary"
            data-aos="fade-left" 
            data-aos-delay="100"
          >
            <a href="#1"><h4 style={{ marginTop: '10px' }}>Enroll</h4></a>
          </li>
          <li 
            className="chevron-item highest-salary"
            data-aos="fade-left" 
            data-aos-delay="300"
          >
            <a href="#2"><h4>Corporate Style Training</h4></a>
          </li>
          <li 
            className="chevron-item students-trained"
            data-aos="fade-left" 
            data-aos-delay="500"
          >
            <a href="#3"><h4>Real-Time Projects</h4></a>
          </li>
          <li 
            className="chevron-item hiring-companies"
            data-aos="fade-left" 
            data-aos-delay="700"
          >
            <a href="#4"><h4>Interview Preparation</h4></a>
          </li>
          <li 
            className="chevron-item total-branches"
            data-aos="fade-left" 
            data-aos-delay="900"
          >
            <a href="#5"><h4>Experience Alteration</h4></a>
          </li>
          <li 
            className="chevron-item highest-salary"
            data-aos="fade-left" 
            data-aos-delay="1100"
          >
            <a href="#6"><h4>Job Assistance</h4></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Phases;
