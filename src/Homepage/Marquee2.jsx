import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="main-container__marquee">
      <div className="main-container__marquee-track">
        <div className="main-container__marquee-items">
          <span className="main-container__marquee-item">Transforming Careers with SAP Mastery.</span>
          <span className="main-container__marquee-item">Connect Your Dots to a Brighter Tech Future.</span>
         
        </div>
        <div aria-hidden="true" className="main-container__marquee-items">
          <span className="main-container__marquee-item">Decode Data, Drive Innovation.</span>
          <span className="main-container__marquee-item">Empower Your Career with SAP Mastery.</span>         
        </div>
      </div>
    </div>
  );
};

export default Marquee;