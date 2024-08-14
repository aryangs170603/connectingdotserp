import React, { useState } from 'react';
import './CurriculumAccordion.css';

const CurriculumAccordion = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="curriculum-accordion">
            {sections.map((section, index) => (
                <div key={index} className="accordion-item">
                    <div 
                        className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleSection(index)}
                    >
                        <h3>{section.title}</h3>
                        <span className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${section.progress}%` }}
                            ></div>
                        </span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content">
                            {section.content.map((item, i) => (
                                <p key={i}>{item}</p>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CurriculumAccordion;
