import React, { useEffect, useState, useContext } from 'react';
import { CityContext } from '../CityContext';
import './Description.css';

const Description = ({ pageId }) => {
  const [content, setContent] = useState(null);
  const city = useContext(CityContext);

  useEffect(() => {
    localStorage.clear();
    // Fetch the JSON file
    fetch('/Jsonfolder/Descriptiondata.json')
      .then(response => response.json())
      .then(data => {
        const pageContent = data.find(item => item.pageId === pageId);
        if (pageContent) {
          // Replace placeholder {city} with actual city name
          const updatedParagraphs = pageContent.paragraphs.map(paragraph =>
            paragraph.replace(/{city}/g, city)
          );
          setContent({ ...pageContent, paragraphs: updatedParagraphs });
        }
      })
      .catch(error => console.error('Error fetching the content:', error));
  }, [pageId, city]);

  if (!content) {
    return <p>Loading content...</p>;
  }

  return (
    <div className="description-container">
      <h2 className="description-title">{content.title}</h2>
      {content.paragraphs.map((paragraph, index) => (
        <p key={index} className="description-paragraph">{paragraph}</p>
      ))}
    </div>
  );
};

export default Description;
