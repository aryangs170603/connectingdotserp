// src/linksConfig.js
export const links = {
  sapCourses: {
    title: "SAP Courses",
    subCategories: [
      {
        title: "SAP Functional",
        items: [
          { name: "SAP FICO", url: "/sap-fico" },
          { name: "SAP MM", url: "/sap-mm" },
          // Add more SAP Functional courses here...
        ],
      },
      {
        title: "SAP Technical",
        items: [
          { name: "SAP ABAP", url: "/sap-abap" },
          { name: "SAP HANA", url: "/sap-hana" },
          // Add more SAP Technical courses here...
        ],
      },
    ],
  },
  itCourses: {
    title: "IT Courses",
    subCategories: [
      {
        title: "Data Science",
        items: [
          { name: "MASTERS IN DATA ANALYTICS", url: "/masters-data-analytics" },
          { name: "MASTERS IN DATA SCIENCE", url: "/masters-data-science" },
          // Add more Data Science courses here...
        ],
      },
      {
        title: "Software Courses",
        items: [
          { name: "ARTIFICIAL INTELLIGENCE", url: "/artificial-intelligence" },
          { name: "FULL STACK TRAINING", url: "/full-stack-training" },
          // Add more Software courses here...
        ],
      },
    ],
  },
  // Add other course categories similarly...
};
