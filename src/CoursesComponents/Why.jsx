import React, { useState, useEffect } from 'react';
import './Why.css';

const DataScienceComponent = ({ pageId, pageType }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('public/Jsonfolder/Whyds.json'); // Path to your JSON file
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        // Dynamically fetch data based on page type and page ID
        const pageData = jsonData?.[pageType]?.[pageId];

        if (pageData) {
          setData(pageData);
        } else {
          throw new Error('Page data not found');
        }

        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pageId, pageType]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available for the specified page.</p>;
  }

  return (
    <div className="container-yds mx-auto p-6">
      <SectionComponent section={data} />
    </div>
  );
};

const SectionComponent = ({ section }) => {
  return (
    <>
      <h1 className="text-5xl text-center mb-10 text-primary">
        <span className="text-accent">{section.title}</span>
      </h1>
      <div className="cards-container-yds grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.cards.map((card, index) => (
          <DataCard
            key={index}
            title={card.title}
            content={card.content}
            listItems={card.listItems}
          />
        ))}
      </div>
    </>
  );
};

const DataCard = ({ title, content, listItems }) => {
  return (
    <div className="cardClass-yds">
      <h2
        className="text-3xl font-semibold mb-3 textPrimaryClass"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <p
        className="textMutedForegroundClass mb-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      {listItems && (
        <ul className="list-disc list-inside textMutedForegroundClass mb-4">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataScienceComponent;
