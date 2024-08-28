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

const Salesforce = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="SalesHeader" pageType="salesheader" />
        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhySales" pageType="Whysales" />
        
        <Councelor />
         <Modules pageId="SalesModule" />
        <Trustus />
        <Certificate />
        <Program />
        <Projects pageId="Salesinduspro" pageType="salesinduspro" />
        <Description pageId="salesforce" />
        <FAQ pageId="SalesFAQ" pageType="salesfaq" />
        <RelatedCourses pageId="Salesrelcourses" />
      </main>
    </div>
  );
};

export default Salesforce;
