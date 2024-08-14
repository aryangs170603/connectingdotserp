import React, { useState, useEffect } from 'react';
import './Footer2.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={"src/Logos/Footer/cdots.png"} alt="Connecting Dots ERP Logo" />
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/sapinstallation.pune.9"><i className="fab fa-facebook-f"></i></a>
            <a href="https://wa.me/919004002941"><i className="fab fa-whatsapp"></i></a>
            <a href="https://m.youtube.com/@connectingdotserp4991"><i className="fab fa-youtube"></i></a>
            <a href="https://in.linkedin.com/in/connecting-dots-erp-043039171"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="columns">
          {/* SAP COURSES */}
          <div className="widget">
            <div className="headline"><h3>SAP COURSES</h3></div>
            <div className={`footer-dropdown ${isMobileView ? 'mobile-view' : ''}`}>
              <div className="course-categories">
                <div className="sap-functional">
                  <h6>SAP FUNCTIONAL COURSES</h6>
                  <ul className="menu">
                    <li className="menu-item"><a href="#">SAP FICO COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP SD COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP MM COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP PP COURSE</a></li> 
                    <li className="menu-item"><a href="#">SAP HR/HCM COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP QM COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP PM COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP SCM COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP EWM COURSE</a></li>  
                    <li className="menu-item"><a href="#">SAP SUCCESSFACTOR COURSE</a></li>
                  </ul>
                </div>
                <div className="sap-technical">
                  <h6>SAP TECHNICAL COURSES</h6>
                  <ul className="menu">
                    <li className="menu-item"><a href="#">SAP ABAP COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP BASIS COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP BW/BI COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP HANA COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP PI/PO COURSE</a></li>
                    <li className="menu-item"><a href="#">SAP FIORI/UI5 COURSE</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* IT COURSES */}
          <div className="widget">
            <div className="headline"><h3>IT COURSES</h3></div>
            <div className={`footer-dropdown ${isMobileView ? 'mobile-view' : ''}`}>
              <ul className="menu">
                <li className="menu-item"><a href="#">FULL STACK TRAINING</a></li>
                <li className="menu-item"><a href="#">JAVA</a></li>
                <li className="menu-item"><a href="#">MERN STACK</a></li>
                <li className="menu-item"><a href="#">UI/UX DESIGN</a></li>
                <li className="menu-item"><a href="#">PYTHON</a></li>  
                <li className="menu-item"><a href="#">SALESFORCE</a></li>
              </ul>
            </div>
          </div>

          {/* DIGITAL MARKETING COURSES */}
          <div className="widget">
            <div className="headline"><h3>DIGITAL MARKETING COURSES</h3></div>
            <div className={`footer-dropdown ${isMobileView ? 'mobile-view' : ''}`}>
              <ul className="menu">
                <li className="menu-item"><a href="#">ADVANCE DIGITAL MARKETING</a></li>
                <li className="menu-item"><a href="#">PAY PER CLICK TRAINING</a></li>
                <li className="menu-item"><a href="#">SEARCH ENGINE OPTIMIZATION</a></li>
                <li className="menu-item"><a href="#">SOCIAL MEDIA MARKETING</a></li>
                <li className="menu-item"><a href="#">ADVANCE ANALYTICS TRAINING</a></li>
              </ul>
            </div>
          </div>

          {/* DATA SCIENCE COURSES */}
          <div className="widget">
            <div className="headline"><h3>DATA SCIENCE COURSES</h3></div>
            <div className={`footer-dropdown ${isMobileView ? 'mobile-view' : ''}`}>
              <ul className="menu">
                <li className="menu-item"><Link to="./DataAnalytics">MASTERS IN DATA ANALYTICS</Link></li>
                <li className="menu-item"><Link to="./Datascience">MASTERS IN DATA SCIENCE</Link></li>
                <li className="menu-item"><a href="#">MASTERS IN BUSINESS ANALYTICS</a></li>
                <li className="menu-item"><a href="#">CHAT GPT & AI</a></li>
              </ul>
            </div>
          </div>

          {/* DATA VISUALISATION COURSES */}
          <div className="widget">
            <div className="headline"><h3>DATA VISUALISATION COURSES</h3></div>
            <div className={`footer-dropdown ${isMobileView ? 'mobile-view' : ''}`}>
              <ul className="menu">
                <li className="menu-item"><a href="#">POWER BI</a></li>
                <li className="menu-item"><a href="#">TABLEAU</a></li>
                <li className="menu-item"><a href="#">SQL</a></li>
                <li className="menu-item"><a href="#">MS EXCEL</a></li>
                <li className="menu-item"><a href="#">ADVANCE EXCEL</a></li>
              </ul>
            </div>
          </div>

          {/* HR COURSES */}

          <div className="widget">
            <div className="headline-HR"><h3>HR COURSES</h3></div>

              <ul className="menu-HR">
                <li className="menu-item"><a href="#">CORE HR</a></li>
                <li className="menu-item"><a href="#">HR PAYROLL</a></li>
                <li className="menu-item"><a href="#">HR MANAGEMENT</a></li>
                <li className="menu-item"><a href="#">SAP HR/HCM</a></li>
                <li className="menu-item"><a href="#">HR ANALYTICS</a></li>
              </ul>

          </div>
        </div>
          {/* CONTACT US */}
          <div className="contact-us">
            <div className="headline"><h3>CONTACT US</h3></div>
            <ul className="menu">
              <li className="menu-item">CONNECTING DOTS ERP</li>
              <li className="menu-item">+91 9004002941</li>
              <li className="menu-item">info@connectingdots.co.in</li>
              <li className="menu-item">1st Floor,101, Police, Wireless Colony, Vishal Nagar, Pimple Nilakh, Pune, Pimpri-Chinchwad, Maharashtra 411027</li>
            </ul>
          </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Connecting Dots ERP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
