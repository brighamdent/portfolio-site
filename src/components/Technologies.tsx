import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axiosLogo from "../assets/Axioslogo.png";
import reactLogo from "../assets/react.svg";
import firebaseLogo from "../assets/firebase.svg";
import nextjsLogo from "../assets/nextjs-icon.svg";
import typescriptLogo from "../assets/typescript-icon.svg";
import javascriptLogo from "../assets/javascript.svg";
import nodejsLogo from "../assets/nodejs-icon.svg";
import tailwindLogo from "../assets/tailwindcss-icon.svg";

const techData = [
  { name: "Axios", source: axiosLogo },
  { name: "React", source: reactLogo },
  { name: "Firebase", source: firebaseLogo },
  { name: "Next.js", source: nextjsLogo },
  { name: "Typescript", source: typescriptLogo },
  { name: "Javascript", source: javascriptLogo },
  { name: "Node.js", source: nodejsLogo },
  { name: "Tailwind", source: tailwindLogo },
];

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const Technologies = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col items-center mt-32">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.75 }}
      >
        Favorite Technologies
      </motion.h1>
      <motion.div
        ref={ref}
        className="grid grid-cols-4 h-[500px] mt-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {techData.map((tech) => (
          <motion.img
            key={tech.name}
            src={tech.source}
            alt={tech.name}
            className="m-10 w-40 h-40"
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </div>
  );
};
