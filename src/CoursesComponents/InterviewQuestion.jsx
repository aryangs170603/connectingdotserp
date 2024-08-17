import React, { useState } from "react";
import "./InterviewQuestion.css";

const InterviewQuestion = () => {
   localStorage.clear();
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="unique-container">
      <div className="unique-accordion-option">
        <h3 className="unique-title">Interview Questions</h3>
      </div>
      <div className="unique-clearfix"></div>
      <div className="unique-panel-group" id="uniqueAccordion" role="tablist" aria-multiselectable="true">
        {panels.map((panel, index) => (
          <div className="unique-panel unique-panel-default" key={index}>
            <div className="unique-panel-heading" role="tab" id={`uniqueHeading${index}`}>
              <h4 className="unique-panel-title">
                <button
                  className={`collapsed ${activeIndex === index ? "active" : ""}`}
                  onClick={() => togglePanel(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`uniqueCollapse${index}`}
                >
                  {panel.title}
                </button>
              </h4>
            </div>
            <div
              id={`uniqueCollapse${index}`}
              className={`unique-panel-collapse unique-collapse ${activeIndex === index ? "show" : ""}`}
              role="tabpanel"
              aria-labelledby={`uniqueHeading${index}`}
            >
              <div className="unique-panel-body">
                {panel.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const panels = [
  {
    title: "Collapsible Group Item #1",
    content:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
  },
  {
    title: "Collapsible Group Item #2",
    content:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
  },
  {
    title: "Collapsible Group Item #3",
    content:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
  }
];

export default InterviewQuestion;
