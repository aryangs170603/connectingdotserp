import React, { useEffect, useState } from 'react';
import './Description.css';

const Description = ({ pageId }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
     localStorage.clear();
    // Fetch the JSON file
    fetch('public/Jsonfolder/Descriptiondata.json')
      .then(response => response.json())
      .then(data => {
        // Find the content for the specified page ID
        const pageContent = data.find(item => item.pageId === pageId);
        setContent(pageContent);
      })
      .catch(error => console.error('Error fetching the content:', error));
  }, [pageId]);

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
