import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./FloatingWhatsApp.css";

const FloatingWhatsApp = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleWhatsAppClick = (phoneNumber) => {
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${formattedPhoneNumber}`, "_blank");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="floating-whatsapp-container" ref={dropdownRef}>
      {isDropdownOpen && (
        <div className="dropdownW above">
          <button className="pune-branch" onClick={() => handleWhatsAppClick("+919004002958")}>
            Pune Branch
          </button>
          <button onClick={() => handleWhatsAppClick("+919004002941")}>
            Mumbai Branch
          </button>
        </div>
      )}
      <div className="floating-whatsapp" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
