import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="achievements">
      <h1>OUR ACHIEVEMENTS</h1>
      <div className="achievements-grid">
        <div className="achievement-item">
          <img src="https://i.imgur.com/EwezUVf.jpeg" alt="Achievement 1" />
        </div>
        <div className="achievement-item2">
          <img src="https://i.imgur.com/rZohnIF.jpeg" alt="Achievement 2" />
        </div>
        <div className="achievement-item">
          <img src="https://i.imgur.com/xz6STYH.jpeg" alt="Achievement 3" />
        </div>
        <div className="achievement-item">
          <img src="https://i.imgur.com/FXN1ezN.jpeg" alt="Achievement 4" />
        </div>
        <div className="achievement-item5">
          <img src="https://i.imgur.com/your4dg.jpeg" alt="Achievement 5" />
        </div>
        <div className="achievement-item">
          <img src="https://i.imgur.com/iNrXB47.jpeg" alt="Achievement 6" />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
