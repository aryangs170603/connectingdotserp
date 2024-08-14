import React, { useEffect } from 'react';
const Chatbot = () => {
  useEffect(() => {
    // Tawk.to integration code
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/65d9cf218d261e1b5f64d05b/1hndd28n8';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null; // No UI elements needed, the script handles everything
};

export default Chatbot;
