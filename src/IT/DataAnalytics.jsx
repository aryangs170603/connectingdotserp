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

const DataAnalytics = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="MDAHeader" pageType="MDApage" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyDA" pageType="Whyda" />
        <Councelor />
        <Modules pageId="dataAnalyticsCurriculum" />
        <Trustus />
        <Certificate />
        <Program />
        <Projects pageId="DAinduspro" pageType="dainduapro" />
        <FAQ pageId="DAFAQ" pageType="dafaq" />
        <RelatedCourses pageId="MDSrelated" />
      </main>
    </div>
  );
};

export default DataAnalytics;
