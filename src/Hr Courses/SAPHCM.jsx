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

const SAPHCM = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="HCMHeader" pageType="hcmpage" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyHCM" pageType="Whyhcm" />
        <Councelor />
        <Modules pageId="HCMCurriculum"  />
        <Trustus />
        <Program />
        <Certificate />
        <Projects pageId="HCMinduspro" pageType="hcminduapro" />
        <Description pageId="hcm" />
        <FAQ pageId="HCMFAQ" pageType="hcmfaq" />
        <RelatedCourses pageId="HCMrelated" />
      </main>
    </div>
  );
};

export default SAPHCM;
