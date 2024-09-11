import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "/src/Logos/Navbar/connecting dot erp logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState({
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
  });
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsSidebarVisible(false); 
  };

  const handleMouseEnter = (dropdown) =>
    setIsDropdownVisible((prev) => ({ ...prev, [dropdown]: true }));
  const handleMouseLeave = (dropdown) =>
    setIsDropdownVisible((prev) => ({ ...prev, [dropdown]: false }));

  const renderDropdownSAP = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter("dropdown2")}
      onMouseLeave={() => handleMouseLeave("dropdown2")}
      style={{ position: "relative", marginLeft: "20px" }}
    >


      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${activeLink === "dropdown2" ? "active" : ""}`}
        href="#"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => e.preventDefault()}
      >
        SAP
      </Nav.Link>
      {isDropdownVisible.dropdown2 && (
        <ul
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton2"
          style={{ display: "block" }}
        >
          {[
            {
              title: "SAP Functional",

              items: [
                { name: "SAP FICO", link: "/pune/sapfico" },
                { name: "SAP MM", link: "/pune/sapmm" },
                { name: "SAP SD", link: "/pune/sapsd" },
                { name: "SAP HR/HCM", link: "/pune/saphrhcm" },

                { name: "SAP PP", link: "/pune/sappp" },
                { name: "SAP QM", link: "/pune/sapqm" },
                { name: "SAP PM", link: "/pune/sappm" },
                { name: "SAP PS", link: "/pune/sapps" },

                { name: "SAP EWM", link: "/pune/sapewm" },
                { name: "SAP SCM", link: "/pune/sapscm" },
                {
                  name: "SAP SUCCESSFACTOR",
                  link: "/pune/sapsuccess" },
              ],
            },
            {
              title: "SAP Technical",

              items: [
                { name: "SAP ABAP", link: "/pune/sapabap" },
                { name: "SAP HANA", link: "/pune/saphana" },
                { name: "SAP NetWeaver", link: "/pune/sapnetweaver" },
                { name: "SAP BW/BI", link: "/pune/sapbi" },

                { name: "SAP BASIS", link: "/pune/sapbasis" },
              ],
            },
          ].map((submenu, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={submenu.link}>
                {submenu.title} &raquo;
              </Link>
              <ul className="dropdown-menu dropdown-submenu">
                {submenu.items.map((item, subIndex) => (
                  <li key={subIndex}>
                    <Link className="dropdown-item" to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}  
        </ul>
      )}
    </div>
  );

  const renderDropdownITCourses = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter("dropdown3")}
      onMouseLeave={() => handleMouseLeave("dropdown3")}
      style={{ position: "relative", marginLeft: "20px" }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${activeLink === "dropdown3" ? "active" : ""}`}
        href="#"
        id="dropdownMenuButton3"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => e.preventDefault()}
      >
        IT Courses
      </Nav.Link>
      {isDropdownVisible.dropdown3 && (
        <ul
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton3"
          style={{ display: "block" }}
        >
          {[
            {
              title: "Data Science",

              items: [
                { name: "MASTERS IN DATA ANALYTICS", link: "/pune/DataAnalytics" },
                { name: "MASTERS IN DATA SCIENCE", link: "/pune/Datascience" },
                {
                  name: "MASTERS IN BUSINESS ANALYTICS",
                  link: "/pune/BussinessAnalytics",
                },
                { name: "CHAT GPT & AI", link: "/pune/GPT" },
              ],
            },
            {
              title: "Software Courses",

              items: [
                { name: "FULL STACK TRAINING", link: "/pune/Fullstack" },
                { name: "JAVA", link: "/pune/Java" },
                { name: "MERN STACK", link: "/pune/Mern" },
                { name: "UI/UX DESIGN", link: "/pune/UIUX" },
                { name: "PYTHON", link: "/pune/Python" },
                { name: "SALESFORCE", link: "/pune/Salesforce" },
              ],
            },
          ].map((submenu, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={submenu.link}>
                {submenu.title} &raquo;
              </Link>
              <ul className="dropdown-menu dropdown-submenu">
                {submenu.items.map((item, subIndex) => (
                  <li key={subIndex}>
                    <Link className="dropdown-item" to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}



        </ul>
      )}
    </div>
  );

  const renderDropdownDataVisualisation = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter("dropdown4")}
      onMouseLeave={() => handleMouseLeave("dropdown4")}
      style={{ position: "relative", marginLeft: "20px" }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${activeLink === "dropdown4" ? "active" : ""}`}
        href="#"
        id="dropdownMenuButton4"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => e.preventDefault()}
      >
        Data Visualisation
      </Nav.Link>
      {isDropdownVisible.dropdown4 && (
        <ul
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton4"
          style={{ display: "block" }}
        >
          {[
            { name: "Tableau", link: "/tableau" },
            { name: "Power BI", link: "/powerbi" },
            { name: "SQL", link: "/sql" },
          ].map((item, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}  
        </ul>
      )}
    </div>
  );

  const renderDropdownDigitalMarketing = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter("dropdown5")}
      onMouseLeave={() => handleMouseLeave("dropdown5")}
      style={{ position: "relative", marginLeft: "20px" }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${activeLink === "dropdown5" ? "active" : ""}`}
        href="#"
        id="dropdownMenuButton5"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => e.preventDefault()}
      >
        Digital Marketing
      </Nav.Link>
      {isDropdownVisible.dropdown5 && (
        <ul
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton5"
          style={{ display: "block" }}
        >
          {[
            {
              name: "Advance Digital Marketing",
              link: "/DigiM",
            },
            {
              name: "Pay Per Click Training",
              link: "/digital-marketing/pay-per-click-training",
            },
            {
              name: "Search Engine Optimization",
              link: "/digital-marketing/search-engine-optimization",
            },
            {
              name: "Social Media Marketing",
              link: "/digital-marketing/social-media-marketing",
            },
            {
              name: "Advance Analytics Training",
              link: "/digital-marketing/advance-analytics-training",
            },
          ].map((item, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}



        </ul>
      )}
    </div>
  );

  const renderDropdownHRCourses = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter("dropdown6")}
      onMouseLeave={() => handleMouseLeave("dropdown6")}
      style={{ position: "relative", marginLeft: "20px" }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${activeLink === "dropdown6" ? "active" : ""}`}
        href="#"
        id="dropdownMenuButton6"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => e.preventDefault()}
      >
        HR Courses
      </Nav.Link>
      {isDropdownVisible.dropdown6 && (
        <ul
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton6"
          style={{ display: "block" }}
        >
          {[
            { name: "Core HR", link: "/HR-Core" },
            { name: "HR Payroll", link: "HR-Payroll" },
            { name: "HR Management", link: "/HR-Management" },
            { name: "SAP HR(HCM)", link: "/HR-SAPHCM" },
            { name: "HR Analytics", link: "/HR-Analytics" },
          ].map((item, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}  
        </ul>
      )}
    </div>
  );

  return (
    <>
      <Navbar expand="lg" className="header-nav">
        <Container fluid className="align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Connecting Dots ERP Logo" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <Button
            className="navbar-toggler"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>

          <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3 d-none d-lg-flex">
            {renderDropdownSAP()}
            {renderDropdownITCourses()}
            {renderDropdownDataVisualisation()}
            {renderDropdownDigitalMarketing()}
            {renderDropdownHRCourses()}
            <div className="dropdown2">
              <Nav.Link
                className={`mx-lg-2 ${activeLink === "link1" ? "active" : ""}`}
                href="/about-us"
                onClick={() => handleNavClick("link1")}
              >
                About us
              </Nav.Link>
            </div>
            
          </Nav>
        </Container>
      </Navbar>

      {/* Sidebar for Smaller Screens */}
      {isSidebarVisible && (
        <div className="sidebar">
          <div className="sidebar-header">
            <Button
              className="btn-close"
              onClick={() => setIsSidebarVisible(false)}
            />
          </div>
          <Nav className="flex-column">
            <Link
              className="nav-link"
              to="/about-us"
              onClick={() => handleNavClick("link1")}
            >
              About us
            </Link>
            <Link
              className="nav-link"
              to="/AdminLogin"
              onClick={() => handleNavClick("login")}
            >
              Login
            </Link>
            {renderDropdownSAP()}
            {renderDropdownITCourses()}
            {renderDropdownDataVisualisation()}
            {renderDropdownDigitalMarketing()}
            {renderDropdownHRCourses()}
          </Nav>
        </div>
      )}
    </>
  );
};

export default Header;
