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

const SAPPS = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="PSHeader" pageType="psheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyPS" pageType="Whyps" />
        <SAPMOD pageId="SAPPS"  />
       
        <Councelor />
        
        <Trustus />
        <Certificate />
        <Program />
         <Description pageId="sap-ps" />
        <FAQ pageId="PSFAQ" pageType="psfaq" />
        <RelatedCourses pageId="PSrelcourses" />
      </main>
    </div>
  );
};

export default SAPPS;
