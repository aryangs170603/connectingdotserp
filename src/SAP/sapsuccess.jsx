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

const SAPSUCC = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="SuccHeader" pageType="succheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhySucc" pageType="Whysucc" />
        <SAPMOD pageId="SAPSUCCESS"  />
        
        <Councelor />
        
        <Trustus />
        <Certificate />
        <Program />
        <Description pageId="sap-succ" />

        <FAQ pageId="SuccFAQ" pageType="succfaq" />
        <RelatedCourses pageId="Succrelcourses" />
      </main>
    </div>
  );
};

export default SAPSUCC;
