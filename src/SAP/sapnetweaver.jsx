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

const SAPNET = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="NetHeader" pageType="netheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyNet" pageType="Whynet" />
        <SAPMOD pageId="SAPNETWEAVER"  />
        
        <Councelor />
      
        <Trustus />
        <Certificate />
        <Program />
        <Description pageId="sap-netweaver" />
        <FAQ pageId="NetFAQ" pageType="netfaq" />
        <RelatedCourses pageId="netrelcourses" />
      </main>
    </div>
  );
};

export default SAPNET;
