import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const CityContext = createContext();

const availableCities = ['Pune', 'Mumbai']; // Add your cities here

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState('Pune'); // Default city
  const location = useLocation();

  useEffect(() => {
    // Extract city from URL slug
    const pathParts = location.pathname.split('/');
    const cityFromUrl = pathParts.find(part => availableCities.map(city => city.toLowerCase()).includes(part.toLowerCase()));
    if (cityFromUrl) {
      setCity(cityFromUrl.charAt(0).toUpperCase() + cityFromUrl.slice(1));
    }
  }, [location.pathname]);

  return (
    <CityContext.Provider value={city}>
      {children}
    </CityContext.Provider>
  );
};
