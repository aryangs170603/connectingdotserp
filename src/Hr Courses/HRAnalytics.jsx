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

const HRANALYTIC = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="ANAHeader" pageType="anapage" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyANA" pageType="Whyana" />
        <Councelor />
        <Modules pageId="ANACurriculum"  />
        <Trustus />
        <Program />
        <Certificate />
        <Projects pageId="ANAinduspro" pageType="anainduapro" />
        <Description pageId="ana" />
        <FAQ pageId="ANAFAQ" pageType="anafaq" />
        <RelatedCourses pageId="ANArelated" />
      </main>
    </div>
  );
};

export default HRANALYTIC;
