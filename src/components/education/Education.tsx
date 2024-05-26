import { CertificationData } from "../../types";
import metaLogo from "../../assets/meta-icon.svg";
import harvardLogo from "../../assets/Harvard-Coat-of-arms-shield-.svg";
import ibmLogo from "../../assets/ibm.svg";
import { Certification } from "./Certification";

export const Education = () => {
  const certificationData: { [key: string]: CertificationData } = {
    meta: {
      title: "Meta Front End Developer",
      contents:
        "HTML, UI/UX design, JavaScript, Cascading Style Sheets (CSS), React",
      skills: "Advanced JavaScript, Responsive Design, React Hooks",
      logo: metaLogo,
    },
    harvard: {
      title: "Harvard CS50x",
      contents: "C , Python, Data structures and algorithms, SQL databases ",
      skills:
        "Strong understanding of data structures algorithms and Database management",
      logo: harvardLogo,
    },
    ibm: {
      title: "IBM Back-end JavaScript Developer",
      contents: "Back-End Development, Node.Js, JavaScript, Devops, express",
      skills:
        " Proficient in Node.js and Express Creating and managing RESTful APIs",
      logo: ibmLogo,
    },
  };

  return (
    <div className="flex flex-col items-center mt-24">
      <h1>Education</h1>
      <h3>
        While I’m mostly self-taught these are some of the most relevant
        certifications I have achieved:
      </h3>
      <Certification certificationData={certificationData.meta} />
      <Certification certificationData={certificationData.harvard} />
      <Certification certificationData={certificationData.ibm} />
    </div>
  );
};
