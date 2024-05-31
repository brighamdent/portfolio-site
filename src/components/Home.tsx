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
    "innovative solutions",
    "engaging interfaces",
    "modern applications",
    "seamless UX",
    "elegant code",
  ];

  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  useEffect(() => {
    let currIndex = 1;
    const intervalId = setInterval(() => {
      if (currIndex == 8) {
        currIndex = 0;
      }
      setCurrWord(words[currIndex]);
      currIndex++;
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col justify-start md:justify-center mt-24 md:mt-0 items-center h-[50vh] md:h-screen">
      <div>
        <motion.h1
          className="gradient text-[30px] xs:text-[40px] sm:text-[60px] lg:text-[90px]  "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          Hey I'm Brigham Dent,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 1.1 }}
          className=" text-[20px] xs:text-[30px] sm:text-[40px] lg:text-[64px]"
        >
          A web developer always
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 2.1 }}
          className="flex justify-center pr-12 pl-12 sm:pr-24 sm:pl-24 lg:pr-40 lg:pl-40"
        >
          <h1 className="pr-[10px] text-[20px] xs:text-[30px] sm:text-[40px] lg:text-[64px]">
            creating
          </h1>
          <h1 className="typed gradient text-[20px] xs:text-[30px] sm:text-[40px] lg:text-[64px]">
            {currWord}.
          </h1>
        </motion.div>
      </div>
      <Link to="contact" smooth={true} duration={500}>
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 3.1 }}
          className="mt-16 w-64 sm:w-96 h-14 sm:h-16 text-2xl"
        >
          Contact Me
        </motion.button>
      </Link>
      <Link to="about" smooth={true} duration={500}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 4.1 }}
          className="flex justify-center "
        >
          <FontAwesomeIcon
            icon={faAngleDown}
            className=" h-8 sm:h-14 text-[#506dab] bounce hover:text-[#1f3b6c] transition-colors duration-300 ease-in-out"
          />
        </motion.div>
      </Link>
    </div>
  );
};
