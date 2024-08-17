import React, { useState, useEffect } from 'react';
import './sapmod.css';

const SapModComponent = ({ pageId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('public/Jsonfolder/sapmod.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        const pageData = jsonData?.[pageId];

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
  }, [pageId]);

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
    <div className="sap-mod-container">
      <h1 className="sap-mod-heading">CURRICULUM</h1>
      <div className="sap-mod-card">
        <h2 className="text-2xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: data.title2 }}
        />
        <p className="mb-4 text-lg">{data.description}</p>
        <p className="text-base mb-6">{data.summary}</p>
        <div className="space-y-4">
          {data.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <span className="bg-primary-foreground text-primary rounded-full px-3 py-1 text-sm font-bold">
                {feature.label}
              </span>
              <span className="ml-3 text-base">{feature.description}</span>
            </div>
          ))}
        </div>
        <button className="sap-mod-button mt-6">Download Brochure</button>
      </div>
      <div className="sap-mod-card sap-mod-card-secondary">
        <h3 className="text-xl font-semibold mb-6">{data.overview.title}</h3>
        <div className="space-y-4">
          {data.overview.modules.map((module, index) => (
            <div key={index} className={`sap-mod-card-content ${index % 2 === 1 ? 'alt' : ''}`}>
              <span className="text-lg">{module.name}</span>

            </div>
          ))}
          <p className="sap-mod-note">*Note: To see the complete Modules Click on 'Download Brochure' button</p>
        </div>
      </div>
    </div>
  );
};

export default SapModComponent;
