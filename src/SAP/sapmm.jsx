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
import Description from '../CoursesComponents/Description';
import SAPMOD from '../CoursesComponents/sapmod';

const SAPMM = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="MMHeader" pageType="mmheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyMM" pageType="Whymm" />
        <SAPMOD pageId="SAPMM"  />
        
        <Councelor />
        <Modules pageId="MMmodule"  />
        <Trustus />
        <Certificate />
        <Program />
        <Description pageId="sap-mm" />
        <FAQ pageId="MMFAQ" pageType="mmfaq" />
        <RelatedCourses pageId="MMrelcourses" />
      </main>
    </div>
  );
};

export default SAPMM;
