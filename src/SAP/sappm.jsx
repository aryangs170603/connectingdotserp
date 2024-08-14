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

const SAPPM = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="PMHeader" pageType="pmheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyPM" pageType="Whypm" />
        <Councelor />
        <Modules pageId="PMmodule"  />
        <Trustus />
        <Certificate />
        <Program />

        <FAQ pageId="PMFAQ" pageType="pmfaq" />
        <RelatedCourses pageId="PMrelcourses" />
      </main>
    </div>
  );
};

export default SAPPM;
