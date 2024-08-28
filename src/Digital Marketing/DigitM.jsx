import React from 'react';
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';
import Modules from '../CoursesComponents/Modules';
import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';
import Certif from '../CoursesComponents/Certificate';
import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';
import Description from '../CoursesComponents/Description';
import SAPMOD from '../CoursesComponents/sapmod';

const DIGITALMARKETING = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="DIGIMHeader" pageType="digimheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyDIGIM" pageType="Whydigim" />
        <SAPMOD pageId="DIGIM"  />

        <Councelor />
        <Description pageId="digim" />
        <Modules pageId="DIGIMmodule"  />
        <Trustus /> 
        <Description pageId="digim2" />
        <Certificate />
        <Certif />
        <Program />
        <Description pageId="digim3" />
         <Description pageId="digim4" />
        <FAQ pageId="DIGIMFAQ" pageType="digimfaq" />
        <RelatedCourses pageId="digimrelcourses" />
      </main>
    </div>
  );
};

export default DIGITALMARKETING;
