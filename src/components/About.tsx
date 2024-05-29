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
      className="flex items-center justify-around mt-32 w-[900px] "
      ref={ref}
      initial={{ opacity: 0.1, y: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.1, y: 50 }}
      transition={{ duration: 0.75 }}
    >
      <img src={headshot} alt="" className="rounded-lg w-[400px]" />
      <div className="flex flex-col items-center justify-around">
        <h1>About</h1>
        <h2 className="w-[500px] font-light text-left ml-10 ">
          I specialize in React and TypeScript, certified by Meta in front-end
          development. My approach prioritizes clean, efficient code for high
          performance. With a passion for continuous learning, I stay ahead of
          emerging technologies to deliver innovative solutions.
        </h2>
      </div>
    </motion.div>
  );
};
