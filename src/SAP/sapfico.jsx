import React from 'react';
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';
import Modules from '../CoursesComponents/Modules';
import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';
// import SAPMOD from '../CoursesComponents/sapmod';
import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';

const SAPFICO = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="FICOHeader" pageType="ficoheader" />
        {/* <SAPMOD /> */}
        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyFICO" pageType="Whyfico" />
        <Councelor />
        <Modules pageId="FICOmodule"  />
        <Trustus />
        <Certificate />
        <Program />
        
        <FAQ pageId="FICOFAQ" pageType="ficofaq" />
        <RelatedCourses pageId="FICOrelcourses" />
      </main>
    </div>
  );
};

export default SAPFICO;
