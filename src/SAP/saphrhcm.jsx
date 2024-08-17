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

const SAPHRHCM = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="HRHCMHeader" pageType="hrhcmheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyHRHCM" pageType="Whyhrhcm" />
        <SAPMOD pageId="SAPHRHCM"  />
       
        
        <Councelor />
        
        <Trustus />
        <Certificate />
        <Program />
         <Description pageId="sap-hrhcm" />
        <FAQ pageId="HRHCMFAQ" pageType="hrhcmfaq" />
        <RelatedCourses pageId="HRHCMrelcourses" />
      </main>
    </div>
  );
};

export default SAPHRHCM;
