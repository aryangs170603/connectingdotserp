import React, { useEffect, useState, useContext } from 'react';
import { CityContext } from '../CityContext';
import './Description.css';

const Description = ({ pageId, sectionIndex }) => {
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
          setContent({ ...pageContent, paragraphs: updatedParagraphs, videoUrl: pageContent.videoUrl });
        }
      })
      .catch(error => console.error('Error fetching the content:', error));
  }, [pageId, city]);

  if (!content) {
    return <p>Loading content...</p>;
  }

  return (
    <div className={`description-container ${sectionIndex % 2 === 0 ? 'video-left' : 'video-right'}`}>
      {content.videoUrl && (
         <div className="description-video">
         <video src={content.videoUrl} loop autoPlay muted controls={false} />
       </div>
      )}
      <div className="description-content">
        <h2 className="description-title">{content.title}</h2>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index} className="description-paragraph">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Description;
