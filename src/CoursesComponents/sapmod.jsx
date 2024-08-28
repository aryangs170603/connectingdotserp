import React, { useState, useEffect, useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './sapmod.css';
import { CityContext } from '../CityContext'; 

const SapModComponent = ({ pageId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const city = useContext(CityContext);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Jsonfolder/sapmod.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        const pageData = jsonData?.[pageId];

        if (pageData) {
          pageData.title2 = pageData.title2?.replace(/{city}/g, city);
          pageData.description = pageData.description?.replace(/{city}/g, city);
          pageData.summary = pageData.summary?.replace(/{city}/g, city);
          pageData.features = pageData.features?.map(feature => ({
            ...feature,
            description: feature.description?.replace(/{city}/g, city)
          }));
          pageData.overview = {
            ...pageData.overview,
            title: pageData.overview.title?.replace(/{city}/g, city),
            modules: pageData.overview.modules?.map(module => ({
              ...module,
              name: module.name?.replace(/{city}/g, city)
            }))
          };

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
  }, [pageId, city]);

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
      <h1 className="sap-mod-heading" data-aos="fade-up">CURRICULUM</h1>
      <div className="sap-mod-card" data-aos="fade-right">
        <h2 className="text-2xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: data.title2 }}
        />
        <p className="mb-4 text-lg" data-aos="fade-left">{data.description}</p>
        <p className="text-base mb-6" data-aos="fade-up">{data.summary}</p>
        
        <p className="glow-text">{data.noteAdvance}</p>
        <p className="text-danger mb-6">{data.noteMaster}</p>
        <div className="space-y-4">
          {data.features && data.features.length > 0 ? (
            data.features.map((feature, index) => (
              <div key={index} className="flex items-center" data-aos="zoom-in">
                <span className="bg-primary-foreground text-primary rounded-full px-3 py-1 text-sm font-bold">
                  {feature.label}
                </span>
                <span className="ml-3 text-base">{feature.description}</span>
              </div>
            ))
          ) : (
            <p>No features available.</p>
          )}
        </div>
        <button className="sap-mod-button mt-6" data-aos="fade-up">Download Brochure</button>
      </div>
      <div className="sap-mod-card sap-mod-card-secondary" data-aos="fade-up">
        <h3 className="text-xl font-semibold mb-6">{data.overview.title}</h3>
        <div className="space-y-4">
          {data.overview.modules && data.overview.modules.length > 0 ? (
            data.overview.modules.map((module, index) => (
              <div key={index} className={`sap-mod-card-content ${index % 2 === 1 ? 'alt' : ''}`} data-aos="zoom-in">
                <span className="text-lg">{module.name}</span>
              </div>
            ))
          ) : (
            <p>No modules available.</p>
          )}
          <p className="sap-mod-note">*Note: To see the complete Modules Click on 'Download Brochure' button</p>
        </div>
      </div>

      {/* Dynamic Note Section */}
      <div className="sap-mod-note" data-aos="fade-up">
        {data.note && (
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: data.note.replace(/\n/g, '<br/>') }} // Replace newlines with <br>
          />
        )}
      </div>
    </div>
  );
};

export default SapModComponent;
