import React from 'react';
import './Trustus.css';
import Logos from '../Logos/Ourclients/Artboard 10.png';
import Logos1 from '../Logos/Ourclients/Artboard 11.png';
import Logos2 from '../Logos/Ourclients/Artboard 12.png';
import Logos3 from '../Logos/Ourclients/Artboard 13.png';
import Logos4 from '../Logos/Ourclients/Artboard 14.png';
import Logos5 from '../Logos/Ourclients/Artboard 15.png';
import Logos6 from '../Logos/Ourclients/Artboard 16.png';
import Logos7 from '../Logos/Ourclients/Artboard 17.png';
import Logos8 from '../Logos/Ourclients/Artboard 18.png';
import Logos9 from '../Logos/Ourclients/Artboard 19.png';
import Logos10 from '../Logos/Ourclients/Artboard 20.png';
import Logos11 from '../Logos/Ourclients/Artboard 21.png';
import Logos12 from '../Logos/Ourclients/Artboard 22.png';
import Logos13 from '../Logos/Ourclients/Artboard 23.png';
import Logos14 from '../Logos/Ourclients/Artboard 24.png';
import Logos15 from '../Logos/Ourclients/Artboard 25.png';
import Logos16 from '../Logos/Ourclients/Artboard 26.png';
import Logos17 from '../Logos/Ourclients/Artboard 40.png';
import Logos18 from '../Logos/Ourclients/Artboard 41.png';
import Logos19 from '../Logos/Ourclients/Artboard 42.png';
import Logos20 from '../Logos/Ourclients/Artboard 43.png';
import Logos21 from '../Logos/Ourclients/Artboard 44.png';
import Logos22 from '../Logos/Ourclients/Artboard 45.png';
import Logos23 from '../Logos/Ourclients/Artboard 46.png';
import Logos24 from '../Logos/Ourclients/Artboard 47.png';
import Logos25 from '../Logos/Ourclients/Artboard 48.png';
import Logos26 from '../Logos/Ourclients/Artboard 49.png';
import Logos27 from '../Logos/Ourclients/Artboard 50.png';
import Logos28 from '../Logos/Ourclients/Artboard 51.png';
import Logos29 from '../Logos/Ourclients/Artboard 52.png';

const Trustus = () => {
  const logos1 = [
    Logos,
    Logos1,
    Logos2,
    Logos3,
    Logos4,
    Logos15,
    Logos16,
    Logos17,
    Logos18,
    Logos19
  ];

  const logos2 = [
    Logos5,
    Logos6,
    Logos7,
    Logos8,
    Logos9,
    Logos20,
    Logos21,
    Logos22,
    Logos23,
    Logos24
  ];

  const logos3 = [
    Logos10,
    Logos11,
    Logos12,
    Logos13,
    Logos14,
    Logos25,
    Logos26,
    Logos27,
    Logos28,
    Logos29
  ];

  const duplicateLogos = (logos) => {
    return [...logos, ...logos];
  }

  return (
    
    <div className="container-it-ds">
      
      <div className="logos-it-ds">
        <div className="marquee-it-ds">
          <div className="marquee-content-it-ds">
            
            {duplicateLogos(logos1).map((src, index) => (
              <img src={src} alt={`Logo ${index}`} className="logo-it-ds" key={index} />
            ))}
          </div>
        </div>
        <div className="marquee-it-ds">
          <div className="marquee-content-it-ds">
            {duplicateLogos(logos2).map((src, index) => (
              <img src={src} alt={`Logo ${index}`} className="logo-it-ds" key={index} />
            ))}
          </div>
        </div>
        <div className="marquee-it-ds">
          <div className="marquee-content-it-ds">
            {duplicateLogos(logos3).map((src, index) => (
              <img src={src} alt={`Logo ${index}`} className="logo-it-ds" key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="info-it-ds">
        <div className="container-it-ds-title">
          <h2>ORGANISATIONS TRUST US </h2>
        </div>
        <h2 className="title-it-ds"> <span className='highlight-span-cards'>1000+</span> Organizations<br></br> TRUST US WITH THEIR <br></br>Openings</h2>
        <p className="description-it-ds">
          <span className='highlight-span-cards'>Organizations</span>, across the globe trust our students and their brilliant <span className='highlight-span-cards'>technical skills</span> in Full Stack Development, <span className='highlight-span-cards'>Data Science & Analytics with AI</span>, Java Full Stack Developer, Digital Marketing Course, AWS Cloud Technology, which results in them getting hired at excellent companies with impressive pay scales.<span className='highlight-span-cards'>Connecting Dots ERP</span>, India’s fastest-growing <span className='highlight-span-cards'>Software Training Institute</span> provides a range of IT Courses helping to shape the future of our students in every way possible. The Coding Courses provided by our Institute are highly valuable and worthy for the students.
        </p>
        <div className="statistics-it-ds">
          <div className="stat-it-ds">
            <span className="number-it-ds">1000+</span> <span className="label-it-ds">Hiring companies</span>
          </div>
          <div className="stat-it-ds">
            <span className="number-it-ds">100+</span> <span className="label-it-ds">Students already placed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustus;
