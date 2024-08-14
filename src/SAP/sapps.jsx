import React from 'react';
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';
import Modules from '../CoursesComponents/Modules';
import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';

import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';

const SAPPS = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="PSHeader" pageType="psheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyPS" pageType="Whyps" />
        <Councelor />
        <Modules pageId="PSmodule"  />
        <Trustus />
        <Certificate />
        <Program />

        <FAQ pageId="PSFAQ" pageType="psfaq" />
        <RelatedCourses pageId="PSrelcourses" />
      </main>
    </div>
  );
};

export default SAPPS;
