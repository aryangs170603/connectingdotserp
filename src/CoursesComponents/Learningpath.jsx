import React from 'react';
import './Learningpath.css';

const LearningPath = () => {
  return (
    <div className="container-it-ds-Lpath">
      <h2>LEARNING PATH</h2>
      <ul className="info-wrapper-it-ds-Lpath">
        <li className="infobox-it-ds-Lpath infobox-1-it-ds-Lpath">
          <a className="row-it-ds-Lpath" href="#1">
            <span className="icon-it-ds-Lpath">
              <i className="fa fa-rocket" aria-hidden="true"></i>
            </span>
            <span className="info-text-it-ds-Lpath">
              <h4>Get Trained</h4>
              
            </span>
          </a>
        </li>
        <li className="infobox-it-ds-Lpath infobox-2-it-ds-Lpath">
          <a className="row-it-ds-Lpath" href="#2">
            <span className="icon-it-ds-Lpath">
              <i className="fa fa-rocket" aria-hidden="true"></i>
            </span>
            <span className="info-text-it-ds-Lpath">
              <h4>Info title of some content</h4>
              
            </span>
          </a>
        </li>
        <li className="infobox-it-ds-Lpath infobox-3-it-ds-Lpath">
          <a className="row-it-ds-Lpath" href="#3">
            <span className="icon-it-ds-Lpath">
              <i className="fa fa-rocket" aria-hidden="true"></i>
            </span>
            <span className="info-text-it-ds-Lpath">
              <h4>Info title of some content</h4>
              
            </span>
          </a>
        </li>
        <li className="infobox-it-ds-Lpath infobox-4-it-ds-Lpath">
          <a className="row-it-ds-Lpath" href="#4">
            <span className="icon-it-ds-Lpath">
              <i className="fa fa-rocket" aria-hidden="true"></i>
            </span>
            <span className="info-text-it-ds-Lpath">
              <h4>Experience Alteration System</h4>
             
            </span>
          </a>
        </li>
        <li className="infobox-it-ds-Lpath infobox-5-it-ds-Lpath">
          <a className="row-it-ds-Lpath" href="#5">
            <span className="icon-it-ds-Lpath">
              <i className="fa fa-rocket" aria-hidden="true"></i>
            </span>
            <span className="info-text-it-ds-Lpath">
              <h4>Job Readiness</h4>
              
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LearningPath;