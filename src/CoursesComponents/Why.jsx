import React, { useState, useEffect, useContext, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CityContext } from '../CityContext'; 
import './Why.css';

const DataScienceComponent = ({ pageId, pageType }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const city = useContext(CityContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchData = async () => {
      try {
        const response = await fetch('/Jsonfolder/Whyds.json'); 
        if (!response.ok) throw new Error('Network response was not ok');

        const jsonData = await response.json();
        const pageData = jsonData?.[pageType]?.[pageId];

        if (pageData) {
          pageData.title = pageData.title?.replace(/{city}/g, city);
          pageData.cards = pageData.cards?.map(card => ({
            ...card,
            title: card.title?.replace(/{city}/g, city),
            content: card.content?.replace(/{city}/g, city),
            listItems: card.listItems?.map(item => item.replace(/{city}/g, city))
          }));
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
  }, [pageId, pageType, city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;
  if (!data) return <p>No data available for the specified page.</p>;

  return (
    <div className="container-yds mx-auto p-6">
      <SectionComponent section={data} />
    </div>
  );
};

const SectionComponent = React.memo(({ section }) => {
  return (
    <>
      <h1 className="text-5xl text-center mb-10 text-primary">
        <span className="text-accent">{section.title}</span>
      </h1>
      <div className="cards-container-yds grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.cards && section.cards.length > 0 ? (
          section.cards.map((card, index) => (
            <DataCard
              key={index}
              title={card.title}
              content={card.content}
              listItems={card.listItems}
              index={index} 
            />
          ))
        ) : (
          <p>No cards available.</p>
        )}
      </div>
    </>
  );
});

const DataCard = React.memo(({ title, content, listItems, index }) => {
  return (
    <div
      className="cardClass-yds"
      data-aos="fade-up"
      data-aos-delay={`${index * 100}`}
    >
      <h2
        className="text-3xl font-semibold mb-3 textPrimaryClass"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <p
        className="textMutedForegroundClass mb-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      {listItems && listItems.length > 0 && (
        <ul className="list-disc list-inside textMutedForegroundClass mb-4">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default DataScienceComponent;
