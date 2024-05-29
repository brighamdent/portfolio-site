import cubeQuickLogo from "../../assets/cubequicklogo.png";
import cubeQuickPreview from "../../assets/cubequickpreview.png";
import inglesDirectoLogo from "../../assets/inglesdirectologo.svg";
import inglesDirectoPreview from "../../assets/ingesdirectopreview.png";
import { Project } from "./Project";
import { ProjectData } from "../../types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Projects: React.FC = () => {
  const projectData: { [key: string]: ProjectData } = {
    cubeQuick: {
      name: "Cube Quick",
      logo: cubeQuickLogo,
      preview: cubeQuickPreview,
      description:
        "Cube Quick is a Rubik's Cube timer and speed solve trainer built using React and Vite. It allows you to track your solves with respective cube types through sessions. It features World Cube Association-compliant scramble generation!",
      github: "https://github.com/brighamdent/Rubiks-Cube-Timer",
      liveSite: "https://cubequick.com",
      layout: "right",
    },
    inglesDirecto: {
      name: "Inglés Directo",
      logo: inglesDirectoLogo,
      preview: inglesDirectoPreview,
      description:
        "Ingles Directo is an online platform crafted specifically for my English teaching business. Seamlessly integrated with Firebase and Stripe, it empowers clients to effortlessly enroll in online classes, manage subscriptions, and access personalized learning experiences. ",
      github: "https://github.com/brighamdent/inglesdirecto-site",
      liveSite: "https://inglesdirecto.com",
      layout: "left",
    },
  };
  const { ref, inView } = useInView({
    triggerOnce: false, // Animate only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });
  return (
    <div className="flex flex-col items-center mt-20">
      <h1>Projects</h1>
      <motion.div
        initial={{ opacity: 0.1, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.1, x: -100 }}
        transition={{ duration: 0.75 }}
      >
        <Project projectData={projectData.cubeQuick} />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0.1, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.1, x: 100 }}
        transition={{ duration: 0.75 }}
      >
        <Project projectData={projectData.inglesDirecto} />
      </motion.div>
      <Project projectData={projectData.cubeQuick} />
    </div>
  );
};
