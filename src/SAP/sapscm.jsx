import React from 'react';
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';

import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';

import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';
import Description from '../CoursesComponents/Description';
import SAPMOD from '../CoursesComponents/sapmod';

const SAPSCM = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="SCMHeader" pageType="scmheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhySCM" pageType="Whyscm" />
        <SAPMOD pageId="SAPSCM"  />
        
        <Councelor />
        
        <Trustus />
        <Certificate />
        <Program />
        <Description pageId="sap-scm" />
        <FAQ pageId="SCMFAQ" pageType="scmfaq" />
        <RelatedCourses pageId="SCMrelcourses" />
      </main>
    </div>
  );
};

export default SAPSCM;
