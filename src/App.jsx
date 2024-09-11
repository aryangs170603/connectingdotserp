import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CityProvider } from "./CityContext";
import Marquee1 from "./Homepage/Marquee1";
import Navbar from "./components/Navbar";
import Wave from "./components/Wave";
import Footer2 from "./components/Footer2";
import Stickyform from "./components/Stickyform";
import Whatsapp from "./Homepage/FloatingWhatsApp";
import Homepage from "./Homepage";
import Datascience from "./IT/Datascience";
import DataAnalytics from "./IT/DataAnalytics";
import BussinessAnalytics from "./IT/BussinessA";
import GptAi from "./IT/GptAi";
import Fullstack from "./IT/Fullstack";
import Java from "./IT/Java";
import Mern from "./IT/MernStack";
import UIUX from "./IT/UIUX";
import Python from "./IT/Python";
import Sales from "./IT/Salesforce";
import Chatbot from "./components/Chatbot";
import SAPEWM from "./SAP/sapewm";
import SAPABAP from "./SAP/sapabap";
import SAPBASIS from "./SAP/sapbasis";
import SAPBI from "./SAP/sapbi";
import SAPFICO from "./SAP/sapfico";
import SAPHANA from "./SAP/saphana";
import SAPHRHCM from "./SAP/saphrhcm";
import SAPMM from "./SAP/sapmm";
import SAPNET from "./SAP/sapnetweaver";
import SAPPM from "./SAP/sappm";
import SAPPP from "./SAP/sappp";
import SAPPS from "./SAP/sapps";
import SAPQM from "./SAP/sapqm";
import SAPSCM from "./SAP/sapscm";
import SAPSD from "./SAP/sapsd";
import SAPSUCC from "./SAP/sapsuccess";
import POWERBI from "./Data Visual/powerbi";
import SQL from "./Data Visual/sql";
import TABLEAU from "./Data Visual/tableau";
import DIGIM from "./Digital Marketing/DigitM";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import PopupForm from "./components/PopupForm";
import HRAnalytics from "./Hr Courses/HRAnalytics"
import Core from "./Hr Courses/Core"
import Manage from "./Hr Courses/Management"
import Payroll from "./Hr Courses/Payroll"
import SAPHCM from "./Hr Courses/SAPHCM"
import Pagenotfound from "./components/NotFoundPage";
function App() {
  const [temporaryLeads, setTemporaryLeads] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", true);
  };

  const handleFormData = (formData) => {
    console.log("Form data received:", formData); // Debugging line
    setTemporaryLeads((prevLeads) => [...prevLeads, formData]);
  };

  const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      return <Navigate to="/AdminLogin" />;
    }

    return children;
  };

  return (
    <Router>
      <CityProvider>
        <div className="App">
          <div className="background-animation">
            <div className="starsec"></div>
            <div className="starthird"></div>
            <div className="starfourth"></div>
            <div className="starfifth"></div>
          </div>

          <Marquee1 />
          <Navbar />
          <PopupForm onSubmitData={handleFormData} />

          <main>
            <Chatbot />
            <Routes>
              <Route path="/" element={<Homepage />} />
              
              <Route
                path="/AdminLogin"
                element={<AdminLogin onLogin={handleLogin} />}
              />
              {isAuthenticated && (
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard temporaryLeads={temporaryLeads} />
                    </ProtectedRoute>
                  }
                />
              )}
              {/* IT PAGE */}
              <Route path="/:city/Datascience" element={<Datascience />} />
              <Route path="/:city/DataAnalytics" element={<DataAnalytics />} />
              <Route
                path="/:city/BussinessAnalytics"
                element={<BussinessAnalytics />}
              />
              <Route path="/:city/GPT" element={<GptAi />} />
              <Route path="/:city/FullStack" element={<Fullstack />} />
              <Route path="/:city/Java" element={<Java />} />
              <Route path="/:city/Mern" element={<Mern />} />
              <Route path="/:city/Python" element={<Python />} />
              <Route path="/:city/Salesforce" element={<Sales />} />
              <Route path="/:city/UIUX" element={<UIUX />} />
              {/* SAP PAGE */}
              <Route path="/:city/SAPEWM" element={<SAPEWM />} />
              <Route path="/:city/:city/SAPABAP" element={<SAPABAP />} />
              <Route path="/:city/SAPBASIS" element={<SAPBASIS />} />
              <Route path="/:city/SAPBWBI" element={<SAPBI />} />
              <Route path="/:city/SAPFICO" element={<SAPFICO />} />
              <Route path="/:city/SAPHANA" element={<SAPHANA />} />
              <Route path="/:city/SAPHRHCM" element={<SAPHRHCM />} />
              <Route path="/:city/SAPMM" element={<SAPMM />} />
              <Route path="/:city/SAPNET" element={<SAPNET />} />
              <Route path="/:city/SAPPM" element={<SAPPM />} />
              <Route path="/:city/SAPPP" element={<SAPPP />} />
              <Route path="/:city/SAPPS" element={<SAPPS />} />
              <Route path="/:city/SAPQM" element={<SAPQM />} />
              <Route path="/:city/SAPSCM" element={<SAPSCM />} />
              <Route path="/:city/SAPSD" element={<SAPSD />} />
              <Route path="/:city/SAPSUCC" element={<SAPSUCC />} />
              {/* DATA VISUALIZATION */}
              <Route path="/POWERBI" element={<POWERBI />} />
              <Route path="/SQL" element={<SQL />} />
              <Route path="/TABLEAU" element={<TABLEAU />} />
              {/* Digital Marketing */}
              <Route path="/DIGIM" element={<DIGIM />} />
              {/* HR courses */}
              <Route path="/HR-Analytic" element={<HRAnalytics />} />
              <Route path="/HR-Core" element={<Core />} />
              <Route path="/HR-Management" element={<Manage />} />
              <Route path="/HR-Payroll" element={<Payroll />} />
              <Route path="/HR-SAPHCM" element={<SAPHCM />} />
              <Route path="*" element={<Pagenotfound />} /> {/* Fixed comment format */}
            </Routes>
          </main>

          <Stickyform />
          <Wave />
          <Footer2 />
          <Whatsapp phoneNumber="+919004002958" />
        </div>
      </CityProvider>
    </Router>
  );
}

export default App;
