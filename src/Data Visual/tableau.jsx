import React from 'react';
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';
import Modules from '../CoursesComponents/Modules';
import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';
import Projects from '../CoursesComponents/Projects';
import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';
import Description from '../CoursesComponents/Description';

const TABLEAU = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="TABLEAU" pageType="tableau" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyTABLEAU" pageType="Whytableau" />
        <Councelor />
        <Modules pageId="TABLEAUModule"  />
        <Trustus />
        <Program />
        <Certificate />
        <Projects pageId="TABLEAUinduspro" pageType="tableauinduspro" />
        <Description pageId="TABLEAU" />
        <FAQ pageId="TABLEAU" pageType="tableau" />
        <RelatedCourses pageId="TABLEAUrelated" />
      </main>
    </div>
  );
};

export default TABLEAU;
