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

const CORE = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="COREHeader" pageType="corepage" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyCORE" pageType="Whycore" />
        <Councelor />
        <Modules pageId="CORECurriculum"  />
        <Trustus />
        <Program />
        <Certificate />
        <Projects pageId="COREinduspro" pageType="coreinduapro" />
        <Description pageId="core" />
        <FAQ pageId="COREFAQ" pageType="corefaq" />
        <RelatedCourses pageId="CORErelated" />
      </main>
    </div>
  );
};

export default CORE;
