import React, { useState, useEffect } from 'react';
import './FAQ.css';

const FAQAccordion = ({ pageId, pageType }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('public/Jsonfolder/faqdata.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Dynamically fetch data based on page type and page ID
        const pageData = data[pageType]?.[pageId];

        if (pageData) {
          setData(pageData);
        } else {
          throw new Error('Page data not found');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pageId, pageType]);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available for the specified page.</div>;
  }

  return (
    <div className="container-faq-ds">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div className="faq-content">
        <div className="faq-image">
          <video loop autoPlay muted>
            <source src={data.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="faq-questions">
          {data.items.map((item, index) => (
            <div key={index} className="accordion-item">
              <button
                aria-expanded={expandedIndex === index}
                onClick={() => handleToggle(index)}
              >
                <span className="accordion-title">{item.question}</span>
                <span className="icon" aria-hidden="true"></span>
              </button>
              <div
                className="accordion-content"
                style={{
                  opacity: expandedIndex === index ? 1 : 0,
                  maxHeight: expandedIndex === index ? '9em' : 0
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
