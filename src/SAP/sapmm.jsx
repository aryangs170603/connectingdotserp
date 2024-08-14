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

const SAPMM = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="MMHeader" pageType="mmheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyMM" pageType="Whymm" />
        <Councelor />
        <Modules pageId="MMmodule"  />
        <Trustus />
        <Certificate />
        <Program />

        <FAQ pageId="MMFAQ" pageType="mmfaq" />
        <RelatedCourses pageId="MMrelcourses" />
      </main>
    </div>
  );
};

export default SAPMM;
