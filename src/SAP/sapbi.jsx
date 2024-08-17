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

const SAPBWBI = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="BwbiHeader" pageType="bwbiheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyBwbi" pageType="Whybwbi" />
        <SAPMOD pageId="SAPBI"  />
        
        <Councelor />
        <Modules pageId="BWBImodule"  />
tificate />
        <Program />
        <Description pageId="sap-bwbi" />
        <FAQ pageId="BwbiFAQ" pageType="bwbifaq" />
        <RelatedCourses pageId="Bwbirelcourses" />
      </main>
    </div>
  );
};

export default SAPBWBI;
