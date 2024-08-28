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

const BussinessAnalytics = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="BAHeader" pageType="BApage" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyBA" pageType="Whyba" />
        <Councelor />
        <Modules pageId="BusinessAnalyticsCurriculum"  />
        <Trustus />
        <Program />
        <Certificate />
        <Projects pageId="BAinduspro" pageType="bainduapro" />
        <Description pageId="ba" />
        <FAQ pageId="BAFAQ" pageType="bafaq" />
        <RelatedCourses pageId="BArelated" />
      </main>
    </div>
  );
};

export default BussinessAnalytics;
