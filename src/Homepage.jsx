import React from "react";
//import axios from 'axios'

//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HeaderCarousel from "./Homepage/HeaderCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Marquee2 from "./Homepage/Marquee2";
import PlacementSection from "./Homepage/PlacementSection";
import Keypoints from "./Homepage/Keypoints";
import PopCourses from "./Homepage/PopCourses";
import Achievements from "./Homepage/Achievements";
import Ourstats from "./Homepage/Ourstats";
import Certificate from "./Homepage/Certificate";
import OurBranches from "./Homepage/OurBranches";
import Chevron from "./Homepage/Chevron";
import FeedbackandReviews from "./Homepage/FeedbackandReviews";
//import Navbar from './components/AboutUs.jsx';
// import PopupForm from './components/PopupForm';
import Ourclients from "./Homepage/Ourclients";

function Homepage() {
  return (
    <div className="App">
     
      {/* <About/> */}
     
      <main>
        <HeaderCarousel />
        <Marquee2 />
        <Chevron />
        {/* <PopupForm/> */}
        <Keypoints />
        <Ourclients />
        <PopCourses />
        <PlacementSection />
        <Ourstats />
        <Achievements />
        <FeedbackandReviews />
        <Certificate />
        <OurBranches />
      </main>
     
      
      
    
    </div>
  );
}

export default Homepage;
