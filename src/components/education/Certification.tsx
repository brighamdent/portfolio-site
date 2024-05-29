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
    threshold: 0.7,
  });
  const initialX = index % 2 === 0 ? 100 : -100;
  return (
    <motion.div
      className="card flex justify-start items-center rounded-3xl h-32 w-[900px] mt-5"
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75 }}
    >
      <img
        src={certificationData.logo}
        alt=""
        className="ml-12 h-[70%] w-[150px]"
      />
      <div className="flex flex-col items-start justify-between ml-12 h-[70%]">
        <h3>{certificationData.title}</h3>
        <p>Course Contents: {certificationData.contents}</p>
        <p>Skills: {certificationData.skills}</p>
      </div>
    </motion.div>
  );
};
