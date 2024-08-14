import React, { useState } from "react";
import "./ProgramHighlights.css";
import Assignmentlogo from "../Logos/DSimages/assignment-icon.png"; 
import Jobreadylogo from "../Logos/DSimages/job-readiness-icon.png"; 
import Companylogo from "../Logos/DSimages/company-icon.png"; 
import Expalt from "../Logos/DSimages/Expaltlogo.png"; 
const steps = [
  {
    title: "25+ Assignments",
    description:
      "Work on 25+ Assignements",
    progress: 25,
    imgSrc: Assignmentlogo,
    alt: "Assignments Logo",
  },
 
  {
    title: "Tied-up with 2000+ Companies",
    description:
      "ConnectingDotsERP has tied up with 2000+ Companies to provide Jobs to Many Students.",
    progress: 50,
    imgSrc: Companylogo,
    alt: "Company Logo",
  },
  {
    title: "Experience Alteration System",
    description:
      "A dedicated placement who completed the course.",
    progress: 75,
    imgSrc: Expalt,
    alts: "Job Readiness Logo",
  },
  {
    title: "Job Readiness Program",
    description:
      "A dedicated placement who completed the course.",
    progress: 100,
    imgSrc: Jobreadylogo,
    alts: "Job Readiness Logo",
  },
];

const prgrm = () => {
  const [progress, setProgress] = useState(0);

  const handleMouseEnter = (stepProgress) => {
    setProgress(stepProgress);
  };

  return (
    <div className="container-it-ds-prgrm">
      <h2>PROGRAM HIGHLIGHTS</h2>
      <div className="progress-bar-it-ds">
        <div className="progress-it-ds" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="cards-it-ds">
        {steps.map((step, index) => (
          <div
            key={index}
            className="card-it-ds"
            onMouseEnter={() => handleMouseEnter(step.progress)}
          >
            <img
              src={step.imgSrc}
              alt={step.title}
              className="card-img-it-ds"
            />
            <h3>{step.title}</h3>
            <hr></hr>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default prgrm;
