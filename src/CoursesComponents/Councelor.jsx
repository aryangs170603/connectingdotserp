import React, { useEffect, useCallback } from 'react';
import './Councelor.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CallbackComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration for animations
  }, []);

  const handleCallback = useCallback(() => {
    alert('Callback request submitted!');
  }, []); // useCallback to prevent unnecessary re-renders

  return (
    <div className="counselor-container-it-ds" data-aos="fade-up">
      <video
        className="background-video"
        src="https://i.imgur.com/OKLCgpA.mp4"
        autoPlay
        muted
        loop
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'absolute', zIndex: -1 }}
      />
      <div className="counselor-content-it-ds" data-aos="zoom-in">
        <div className="counselor-text-it-ds" data-aos="fade-right">
          <h2 className="title-it-ds-counc">Connect with an Academic Counsellor</h2>
          <p className="subtitle-it-ds-counc">Get all the information about the course benefits</p>
          <p className="eligibility-it-ds">Eligibility: Anyone who graduated</p>
        </div>
        <div className="button-container-it-ds-counc" data-aos="fade-left">
          <button className="request-button-it-ds-counc" onClick={handleCallback}>
            Request Callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallbackComponent;
