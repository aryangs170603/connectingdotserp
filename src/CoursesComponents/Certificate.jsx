import React, { useState, useEffect } from "react";
import "./Certificate.css";

const Thumbnail = () => {
  const [thumbData, setThumbData] = useState([]);

  useEffect(() => {
    fetch("/Jsonfolder/certification.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setThumbData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  if (thumbData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
     <div className="white-container">
    <div className="thumbnail-container">
      {thumbData.map((thumb, index) => (
        <div className="thumb" key={index}>
          <a href="#" style={{ backgroundImage: `url(${thumb.imageUrl})` }}>
            <span>{thumb.label}</span>
          </a>
        </div>
      ))}
    </div>
     </div>
  );
};

export default Thumbnail;
