import { CertificationData } from "../../types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CertificationProps {
  certificationData: CertificationData;
  index: number;
}

export const Certification: React.FC<CertificationProps> = ({
  certificationData,
  index,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const initialX = index % 2 === 0 ? 100 : -100;
  return (
    <motion.div
      className="card p-4 md:p-0 mt-5 flex w-[300px] flex-col items-center justify-center rounded-3xl text-center md:h-40 md:w-[600px] md:flex-row md:justify-start md:text-left lg:h-32 lg:w-[900px]"
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75 }}
    >
      <img
        src={certificationData.logo}
        alt=""
        className="h-[150px] w-[150px] md:ml-12 md:h-[70%] md:w-[15%]"
      />
      <div className="flex flex-col items-center justify-between space-y-2 p-2 md:ml-12 md:items-start lg:h-[70%] lg:space-y-0 lg:p-0">
        <h3>{certificationData.title}</h3>
        <p>Course Contents: {certificationData.contents}</p>
        <p>Skills: {certificationData.skills}</p>
      </div>
    </motion.div>
  );
};
