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

const SAPSUCC = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="SuccHeader" pageType="succheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhySucc" pageType="Whysucc" />
        <Councelor />
        <Modules pageId="SUCCmodule"  />
        <Trustus />
        <Certificate />
        <Program />

        <FAQ pageId="SuccFAQ" pageType="succfaq" />
        <RelatedCourses pageId="Succrelcourses" />
      </main>
    </div>
  );
};

export default SAPSUCC;
