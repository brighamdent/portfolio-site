import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Home = () => {
  const [currWord, setCurrWord] = useState("beautiful websites");
  const words = [
    "beautiful websites",
    "interactive apps",
    "sleek designs",
    "user-centric-experiences",
    "innovative solutions",
    "engaging interfaces",
    "modern applications",
    "seamless UX",
    "elegant code",
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  useEffect(() => {
    let currIndex = 1;
    const intervalId = setInterval(() => {
      if (currIndex == 9) {
        currIndex = 0;
      }
      setCurrWord(words[currIndex]);
      currIndex++;
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-24 ">
      <div>
        <motion.h1
          className="gradient text-[90px]"
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          Hey I'm Brigham Dent,
        </motion.h1>
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.75, delay: 1.1 }}
        >
          A web developer always
        </motion.h1>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.75, delay: 2.1 }}
          className="flex justify-center pr-96 pl-96"
        >
          <h1 className="pr-[10px]">creating</h1>
          <h1 className="typed gradient">{currWord}.</h1>
        </motion.div>
      </div>
      <Link to="contact" smooth={true} duration={500}>
        <motion.button
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.75, delay: 3.1 }}
          className="mt-16 w-96 h-16 text-2xl"
        >
          Contact Me
        </motion.button>
      </Link>
      <Link to="about" smooth={true} duration={500}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.75, delay: 4.1 }}
          className="flex justify-center pr-96 pl-96"
        >
          <FontAwesomeIcon
            icon={faAngleDown}
            className="mt-32 h-14 text-[#506dab] bounce hover:text-[#1f3b6c] transition-colors duration-300 ease-in-out"
          />
        </motion.div>
      </Link>
    </div>
  );
};
