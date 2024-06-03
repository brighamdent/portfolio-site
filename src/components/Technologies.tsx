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
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export const Technologies = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="overflow-x-hidden w-full flex flex-col items-center">
      <div className="flex flex-col items-center section m-16 lg:m-32 w-[300px] lg:w-[1200px]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.75 }}
          className="text-[32px] md:text-[64px]"
        >
          Favorite Technologies
        </motion.h1>
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 lg:h-[500px] mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {techData.map((tech) => (
            <div className="m-6 lg:m-10 lg:p-4 rounded-lg text-white hover:text-[#4c5769] text-[16px] lg:text-[32px] transition-colors duration-300 ease-in-out"
                key={tech.name}
            >
              <motion.img
                src={tech.source}
                alt={tech.name}
                className=" w-24 h-24 lg:w-32 lg:h-32 "
                variants={itemVariants}
              />
              <p className="">{tech.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
