import headshot from "../assets/Headshot.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animate only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <div className="overflow-x-hidden">
      <motion.div className="flex flex-col items-center lg:mt-32">
        <motion.h1
          className="mb-16 text-[32px] lg:text-[64px]"
          ref={ref}
          initial={{ opacity: 0.1, y: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.1, y: 50 }}
          transition={{ duration: 0.75 }}
        >
          About
        </motion.h1>
        <div className="flex w-[300px] flex-col items-center justify-around lg:w-[900px] lg:flex-row">
          <img
            src={headshot}
            alt=""
            className="w-[300px] rounded-lg bg-red-200 lg:w-[400px]"
          />
          <h2 className="mt-4 w-[300px] text-center text-[24px] font-light lg:ml-10 lg:w-[500px] lg:text-left lg:text-[32px]">
            I specialize in React and TypeScript, certified by Meta in front-end
            development. My approach prioritizes clean, efficient code for high
            performance. With a passion for continuous learning, I stay ahead of
            emerging technologies to deliver innovative solutions.
          </h2>
        </div>
      </motion.div>
    </div>
  );
};
