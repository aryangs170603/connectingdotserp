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

const POWERBI = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="POWERBI" pageType="powerbi" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyPOWERBI" pageType="Whypowerbi" />
        <Councelor />
        <Modules pageId="POWERBIModule"  />
        <Trustus />
        <Program />
        <Certificate />
        <Projects pageId="POWERBIinduspro" pageType="powerbiinduspro" />
        <Description pageId="POWERBI" />
        <FAQ pageId="POWERBI" pageType="powerbi" />
        <RelatedCourses pageId="POWERBIrelated" />
      </main>
    </div>
  );
};

export default POWERBI;
