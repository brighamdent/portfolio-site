import { CertificationData } from "../../types";
import metaLogo from "../../assets/meta-icon.svg";
import ibmLogo from "../../assets/ibm.svg";
import { Certification } from "./Certification";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Education = () => {
  const certificationData: CertificationData[] = [
    {
      title: "Meta Front End Developer",
      contents:
        "HTML, UI/UX design, JavaScript, Cascading Style Sheets (CSS), React",
      skills: "Advanced JavaScript, Responsive Design, React Hooks",
      logo: metaLogo,
    },
    // {
    //   title: "Harvard CS50x",
    //   contents: "C , Python, Data structures and algorithms, SQL databases ",
    //   skills:
    //     "Strong understanding of data structures algorithms and Database management",
    //   logo: harvardLogo,
    // },
    {
      title: "IBM Back-end JavaScript Developer",
      contents: "Back-End Development, Node.Js, JavaScript, Devops, express",
      skills:
        " Proficient in Node.js and Express Creating and managing RESTful APIs",
      logo: ibmLogo,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="overflow-x-hidden w-full">
      <div className="ease flex flex-col items-center lg:mt-24">
        <motion.div
          className="ease flex flex-col items-center"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.75 }}
        >
          <h1 className="text-[32px] md:text-[64px]">Education</h1>
          <h3 className="w-[300px] text-[18px] md:w-[500px] md:text-[24px] lg:w-[1024px]">
            While I’m mostly self-taught these are some of the most relevant
            certifications I have achieved:
          </h3>
        </motion.div>
        {certificationData.map(
          (certification: CertificationData, index: number) => (
            <Certification
              key={index}
              certificationData={certification}
              index={index}
            />
          ),
        )}
      </div>
    </div>
  );
};
