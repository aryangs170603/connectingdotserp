import React from 'react';
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';
// import Interview from '../CoursesComponents/InterviewQuestion';
import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';
import SAPMOD from '../CoursesComponents/sapmod';
import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';
import Description from '../CoursesComponents/Description';

const SAPFICO = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="FICOHeader" pageType="ficoheader" />
         <Why pageId="WhyFICO" pageType="Whyfico" />
        <SAPMOD pageId="SAPFICO"  />
        {/* <DSHeader pageId="MDAHeader" /> */}
       
       
        <Councelor />
        {/* < Interview /> */}
        <Trustus />
        <Certificate />
        <Program />
         <Description pageId="sap-fico" />
        <FAQ pageId="FICOFAQ" pageType="ficofaq" />
        <RelatedCourses pageId="FICOrelcourses" />
      </main>
    </div>
  );
};

export default SAPFICO;
