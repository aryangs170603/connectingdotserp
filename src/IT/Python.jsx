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

const Python = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="PythonHeader" pageType="pythonheader" />
        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyPython" pageType="Whypython" />
        <Councelor />
         <Modules pageId="PythonModule" />
        <Trustus />
        <Certificate />
        <Program />
        <Projects pageId="Pythoninduspro" pageType="pythoninduspro" />
        <FAQ pageId="PythonFAQ" pageType="pythonfaq" />
        <RelatedCourses pageId="Pythonrelated" />
      </main>
    </div>
  );
};

export default Python;
