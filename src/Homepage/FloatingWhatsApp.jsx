import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./FloatingWhatsApp.css";

const FloatingWhatsApp = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${formattedPhoneNumber}`, "_blank");
  };

  return (
    <div className="floating-whatsapp-container"> {/* Apply the container class here */}
      <div className="floating-whatsapp" onClick={handleWhatsAppClick}>
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
