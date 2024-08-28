import React from 'react';
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';
import Modules from '../CoursesComponents/Modules';
import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';
import Projects from '../CoursesComponents/Projects';
import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';
import Description from '../CoursesComponents/Description';

const UIUX = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="UIUXHeader" pageType="uiuxheader" />
        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyUIUX" pageType="Whyuiux" />
        
        <Councelor />
         <Modules pageId="UIUXModule" />
        <Trustus />
        <Certificate />
        <Program />
        <Projects pageId="UIUXinduspro" pageType="uiuxinduspro" />
        <Description pageId="uiux" />
        <FAQ pageId="UIUXFAQ" pageType="uiuxfaq" />
        
        <RelatedCourses pageId="UIUXrelcourses" />
      </main>
    </div>
  );
};

export default UIUX;
