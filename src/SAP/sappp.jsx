import React from 'react';
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';

import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';

import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';
import Description from '../CoursesComponents/Description';
import SAPMOD from '../CoursesComponents/sapmod';

const SAPPP = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="PPHeader" pageType="ppheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyPP" pageType="Whypp" />
        <SAPMOD pageId="SAPPP"  />
        
       
        <Councelor />
        
        <Trustus />
        <Certificate />
        <Program />
         <Description pageId="sap-pp" />
        <FAQ pageId="PPFAQ" pageType="ppfaq" />
        <RelatedCourses pageId="PPrelcourses" />
      </main>
    </div>
  );
};

export default SAPPP;
