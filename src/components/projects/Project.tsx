import { ProjectData } from "../../types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectProps {
  projectData: ProjectData;
  index: number;
}

export const Project: React.FC<ProjectProps> = ({ projectData, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const initialX = index % 2 === 0 ? 100 : -100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75 }}
      className={`card flex flex-col  justify-around items-center w-[300px] md:w-[600px] lg:w-[900px] rounded-3xl lg:h-[360px] mt-6 p-5 ${projectData.layout == "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div className="flex flex-col p-4 items-center lg:items-start lg:w-1/3 ">
        <div className="flex justify-around items-center ">
          <h2 className="text-[24px] md:text-[24px]">{projectData.name}</h2>
          <img
            src={projectData.logo}
            alt=""
            className="w-[50px] h-[50px] ml-4"
          />
        </div>
        <p className="text-[16px] md:text-[16px] lg:text-left">{projectData.description}</p>
      </div>
      <div className="w-[400px] flex flex-col items-center ">
        <img
          src={projectData.preview}
          alt=""
          className="w-[250px] md:w-[400px] rounded-3xl"
        />
        <div className="flex pt-5">
          <a
            href={projectData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button w-32 md:w-48 text-md md:text-xl mr-2"
          >
            Source Code
          </a>
          <a
            href={projectData.liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="button w-32 md:w-48 text-md md:text-xl mr-2"
          >
            Live Site
          </a>
        </div>
      </div>
    </motion.div>
  );
};
