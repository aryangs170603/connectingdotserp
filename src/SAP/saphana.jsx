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

const SAPHANA = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="HanaHeader" pageType="hanaheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyHana" pageType="Whyhana" />
        <SAPMOD pageId="SAPHANA"  />
        
        
        <Councelor />
      
        <Trustus />
        <Certificate />
        <Program />
        <Description pageId="sap-hana" />

        <FAQ pageId="HanaFAQ" pageType="hanafaq" />
        <RelatedCourses pageId="Hanarelcourses" />
      </main>
    </div>
  );
};

export default SAPHANA;
