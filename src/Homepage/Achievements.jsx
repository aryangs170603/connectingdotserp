import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="achievements">
      <h1>OUR ACHIEVEMENTS</h1>
      <div className="achievements-grid">
        <div className="achievement-item">
          <img src="src/Logos/Acheivements/Achiv1.jpg" alt="Achievement 1" />
        </div>
        <div className="achievement-item2">
          <img src="src/Logos/Acheivements/Achiv2.png" alt="Achievement 2" />
        </div>
        <div className="achievement-item">
          <img src="src/Logos/Acheivements/Achiv7.jpg" alt="Achievement 3" />
        </div>
        <div className="achievement-item">
          <img src="src/Logos/Acheivements/Achiv4.jpg" alt="Achievement 4" />
        </div>
        <div className="achievement-item5">
          <img src="src/Logos/Acheivements/Achiv5.jpg" alt="Achievement 5" />
        </div>
        <div className="achievement-item">
          <img src="src/Logos/Acheivements/Achiv6.jpg" alt="Achievement 6" />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
