import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './Modules.css';

const DataScienceModules = ({ pageId }) => {
  const [activeTab, setActiveTab] = useState('beginner');
  const [activeModule, setActiveModule] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Cache implementation
        const cachedData = localStorage.getItem(`curriculum_${pageId}`);
        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const response = await fetch('public/Jsonfolder/curriculumdata.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        const pageData = jsonData[pageId];

        if (pageData) {
          localStorage.setItem(`curriculum_${pageId}`, JSON.stringify(pageData)); // Cache data
          setData(pageData);
        } else {
          throw new Error('Page data not found');
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageId]);

  const handleModuleClick = useCallback((moduleIndex) => {
    if (activeModule !== moduleIndex) {
      setActiveModule(moduleIndex);
    }
  }, [activeModule]);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    setActiveModule(0);
  }, []);

  const activeContent = useMemo(() => {
    if (data) {
      return data.tabs.find(tab => tab.type === activeTab).modules[activeModule];
    }
    return null;
  }, [data, activeTab, activeModule]);

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
    <div className="container-ds">
      <div className="header-ds">
        <h1>{data.title}</h1>
      </div>
      <div className="tabs">
        {data.tabs.map(tab => (
          <div
            key={tab.type}
            className={`tab ${activeTab === tab.type ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.type)}
          >
            <p>{tab.type.charAt(0).toUpperCase() + tab.type.slice(1)}</p>
            <span>{tab.duration}</span>
          </div>
        ))}
      </div>
      <div className="content-container">
        <div className="content">
          {data.tabs.find(tab => tab.type === activeTab).modules.map((module, index) => (
            <div
              key={index}
              className={`module ${activeModule === index ? 'selected' : ''}`}
              onClick={() => handleModuleClick(index)}
            >
              <div className="module-header">
                <p>MODULE - {index + 1}</p>
                <h2>{module.title}</h2>
                <span>{module.duration}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="module-details-container">
          {activeContent && (
            <div className="module-details expanded">
              <h2>{activeContent.title}</h2>
              <p><strong>Duration:</strong> {activeContent.duration}</p>
              <ul>
                {activeContent.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="footer">
        <button>Download Curriculum</button>
      </div>
    </div>
  );
};

export default DataScienceModules;
