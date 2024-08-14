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

const SAPQM = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="QMHeader" pageType="qmheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyQM" pageType="Whyqm" />
        <Councelor />
        <Modules pageId="QMmodule"  />
        <Trustus />
        <Certificate />
        <Program />

        <FAQ pageId="QMFAQ" pageType="qmfaq" />
        <RelatedCourses pageId="QMrelcourses" />
      </main>
    </div>
  );
};

export default SAPQM;
