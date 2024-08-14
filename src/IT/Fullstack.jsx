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

const FullStack = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="FullStackHeader" pageType="fullstackheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyFullStack" pageType="Whyfullstack" />
        <Councelor />
        <Modules pageId="FullStackmodule"  />
        <Trustus />
        <Certificate />
        <Program />
        <Projects pageId="FullStackinduspro" pageType="fullstackinduspro" />
        <FAQ pageId="FullStackFAQ" pageType="fullstackfaq" />
        <RelatedCourses pageId="FullStackrelcourses" />
      </main>
    </div>
  );
};

export default FullStack;
