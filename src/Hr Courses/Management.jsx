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

const MANAGE = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="MANHeader" pageType="manpage" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyMAN" pageType="Whyman" />
        <Councelor />
        <Modules pageId="MANCurriculum"  />
        <Trustus />
        <Program />
        <Certificate />
        <Projects pageId="MANinduspro" pageType="maninduapro" />
        <Description pageId="man" />
        <FAQ pageId="MANFAQ" pageType="manfaq" />
        <RelatedCourses pageId="MANrelated" />
      </main>
    </div>
  );
};

export default MANAGE;
