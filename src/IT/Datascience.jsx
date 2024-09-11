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
// import CurriculumAccordion from '../CoursesComponents/CurriculumAccordion';

const Datascience = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="MDSHeader" pageType="MDSpage" />
        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyDS" pageType="Whyds" />
        
        <Councelor />
         <Modules pageId="dataScienceCurriculum" />
        <Trustus />
        <Certificate />
        <Program />
        <Projects pageId="DSinduspro" pageType="dsinduspro" />
        <Description pageId="mds" />
        <FAQ pageId="DSFAQ" pageType="dsfaq" />
        <RelatedCourses pageId="DSrelcourses" />
        {/* <CurriculumAccordion /> */}
      </main>
    </div>
  );
};

export default Datascience;
