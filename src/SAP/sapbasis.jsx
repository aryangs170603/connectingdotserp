import React from 'react';
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';
import Modules from '../CoursesComponents/Modules';
import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';

import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';
import Description from '../CoursesComponents/Description';
import SAPMOD from '../CoursesComponents/sapmod';

const SAPBASIS = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="BasisHeader" pageType="basisheader" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyBasis" pageType="Whybasis" />
        <SAPMOD pageId="SAPBASIS"  />
        
        <Councelor />
        <Modules pageId="BASISmodule"  />
        <Trustus />
        <Certificate />
        <Program />
        <Description pageId="sap-basis" />
        <FAQ pageId="BasisFAQ" pageType="basisfaq" />
        <RelatedCourses pageId="Basisrelcourses" />
      </main>
    </div>
  );
};

export default SAPBASIS;
