import headshot from "../assets/Headshot.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animate only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <motion.div
      className="flex flex-col items-center lg:mt-16"
      ref={ref}
      initial={{ opacity: 0.1, y: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.1, y: 50 }}
      transition={{ duration: 0.75 }}
    >
      <h1 className="text-[32px] lg:text-[64px] mb-4">About</h1>
      <div className="flex flex-col lg:flex-row items-center justify-around w-[300px] lg:w-[900px] ">
        <img
          src={headshot}
          alt=""
          className="rounded-lg w-[300px] lg:w-[400px] bg-red-200"
        />
        <h2 className="w-[300px] text-[24px] lg:text-[32px]  lg:w-[500px] font-light text-center lg:text-left mt-4 lg:ml-10 ">
          I specialize in React and TypeScript, certified by Meta in front-end
          development. My approach prioritizes clean, efficient code for high
          performance. With a passion for continuous learning, I stay ahead of
          emerging technologies to deliver innovative solutions.
        </h2>
      </div>
    </motion.div>
  );
};
