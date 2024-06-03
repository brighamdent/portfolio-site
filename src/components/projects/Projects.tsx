import cubeQuickLogo from "../../assets/cubequicklogo.png";
import cubeQuickPreview from "../../assets/cubequickpreview.png";
import inglesDirectoLogo from "../../assets/inglesdirectologo.svg";
import inglesDirectoPreview from "../../assets/ingesdirectopreview.png";
import { Project } from "./Project";
import { ProjectData } from "../../types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Projects: React.FC = () => {
  const projectData: ProjectData[] = [
    {
      name: "Cube Quick",
      logo: cubeQuickLogo,
      preview: cubeQuickPreview,
      description:
        "Cube Quick is a Rubik's Cube timer and speed solve trainer built using React and Vite. It allows you to track your solves with respective cube types through sessions. It features World Cube Association-compliant scramble generation!",
      github: "https://github.com/brighamdent/Rubiks-Cube-Timer",
      liveSite: "https://cubequick.com",
      layout: "right",
    },
    {
      name: "Inglés Directo",
      logo: inglesDirectoLogo,
      preview: inglesDirectoPreview,
      description:
        "Ingles Directo is an online platform crafted specifically for my English teaching business. Seamlessly integrated with Firebase and Stripe, it empowers clients to effortlessly enroll in online classes, manage subscriptions, and access personalized learning experiences. ",
      github: "https://github.com/brighamdent/inglesdirecto-site",
      liveSite: "https://inglesdirecto.com",
      layout: "left",
    },
    {
      name: "Cube Quicker",
      logo: cubeQuickLogo,
      preview: cubeQuickPreview,
      description:
        "Cube Quick is a Rubik's Cube timer and speed solve trainer built using React and Vite. It allows you to track your solves with respective cube types through sessions. It features World Cube Association-compliant scramble generation!",
      github: "https://github.com/brighamdent/Rubiks-Cube-Timer",
      liveSite: "https://cubequick.com",
      layout: "right",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="w-full overflow-x-hidden bg-red-50">
      <div className="mt-20 flex flex-col items-center">
        <motion.h1
          className="text-[32px] md:text-[64px]"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.75 }}
        >
          Projects
        </motion.h1>
        {projectData.map((data, index) => (
          <Project
            key={projectData[index].name}
            projectData={data}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
