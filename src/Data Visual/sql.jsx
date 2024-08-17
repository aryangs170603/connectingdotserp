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

const SQL = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="SQL" pageType="sql" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhySQL" pageType="Whysql" />
        <Councelor />
        <Modules pageId="SQLModule"  />
        <Trustus />
        <Program />
        <Certificate />
        <Projects pageId="SQLinduspro" pageType="sqlinduspro" />
        <Description pageId="SQL" />
        <FAQ pageId="SQL" pageType="sql" />
        <RelatedCourses pageId="SQLrelated" />
      </main>
    </div>
  );
};

export default SQL;
