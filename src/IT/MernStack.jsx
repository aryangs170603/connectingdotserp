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

const Mern = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="MernHeader" pageType="mernheader" />
        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyMern" pageType="Whymern" />
        <Councelor />
         <Modules pageId="MernModule" />
        <Trustus />
        <Certificate />
        <Program />
        <Projects pageId="Merninduspro" pageType="merninduspro" />
        <FAQ pageId="MernFAQ" pageType="mernfaq" />
        <RelatedCourses pageId="Mernrelated" />
      </main>
    </div>
  );
};

export default Mern;
