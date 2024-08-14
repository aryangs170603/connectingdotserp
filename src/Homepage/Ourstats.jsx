import React, { useState } from "react";
import "./Ourstats.css";
import cert from "../Logos/Stats gifs/certificate.gif";
import cv from "../Logos/Stats gifs/cv.gif";
import jobs from "../Logos/Stats gifs/jobs.gif";
import years from "../Logos/Stats gifs/10years.gif";
import growth from "../Logos/Stats gifs/growth.gif";
import mentors from "../Logos/Stats gifs/mentors.gif";

const CardComponent = () => {
  const [cardStates, setCardStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleMouseEnter = (index) => {
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  const cardData = [
    { img: years, frontText: "Years of Legacy in <span class='highlightF'>IT</span>", backText: "<span class='highlightB'>Our Institute</span>, with over <span class='highlightB'>10+ Years</span> of excellence, consistently provides top-notch instruction and services." },
    { img: cv, frontText: "10000+ <span class='highlightF'>Students</span>", backText: "Our institute has educated over <span class='highlightB'>10000+ Students</span>, consistently providing top-notch instruction and services." },
    {
      img: growth,
      frontText: "100x <span class='highlightF'>Growth</span>",
      backText: "Our institute boasts a <span class='highlightB'>100 x Growth</span>, with graduates securing top salaries up to <span class='highlightB'>24 lakh</span> per annum",
    },
    {
      img: mentors,
      frontText: "100+ <span class='highlightF'>Mentors</span>",
      backText: "Our institute features over <span class='highlightB'>100+ MNC professionals</span> as <span class='highlightB'>Mentors</span>, providing expert guidance and support.",
    },
    { img: cert, frontText: "100% <span class='highlightF'>Practical</span> Based Courses", backText: "Our institute offers <span class='highlightB'>100% Practical</span>-based  <span class='highlightB'>Courses</span> tailored for industry needs." },
    { img: jobs, frontText: "100+ <span class='highlightF'>Hiring</span> Partner", backText: "Our institute has over  <span class='highlightB'>100+ Hiring</span> partners, including <span class='highlightB'>Giants </span> like <span class='highlightB'>Google </span> and <span class='highlightB'>Microsoft </span>, as well as leading  <span class='highlightB'>MNCs</span>" },
  ];

  return (
    <div className="T2P">
      <div className="T2P-title">
        <h1>OUR STATS AT A GLANCE</h1>
      </div>
      <div className="cardsT2P-wrapper">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="cardT2P-container"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className={`cardT2P ${cardStates[index] ? "rotated" : ""}`}>
              <div className="cardT2P-contents cardT2P-front">
                <div className="cardT2P-depth">
                  <div className="cardT2P-img1">
                    <img src={card.img} alt="Logo" className="cardT2P-logo" />
                  </div>
                  <h2 dangerouslySetInnerHTML={{ __html: card.frontText }} />
                </div>
              </div>
              <div className="cardT2P-contents cardT2P-back">
                <div className="cardT2P-depth">
                  <h2 dangerouslySetInnerHTML={{ __html: card.backText }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
