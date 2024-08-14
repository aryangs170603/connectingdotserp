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

const SAPABAP = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="AbapHeader" pageType="abapheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyAbap" pageType="Whyabap" />
        <Councelor />
        <Modules pageId="ABAPmodule"  />
        <Trustus />
        <Certificate />
        <Program />

        <FAQ pageId="AbapFAQ" pageType="abapfaq" />
        <RelatedCourses pageId="Abaprelcourses" />
      </main>
    </div>
  );
};

export default SAPABAP;
