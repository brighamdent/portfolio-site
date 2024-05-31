import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleToggle = () => {
    setIsHidden(!isHidden);
    console.log(isHidden);
    console.log("hi");
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleScrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuint",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 764) {
        setIsHidden(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`flex justify-between items-center w-full sticky top-0 z-50 pt-[25px] pb-5 pr-[50px] pl-[50px] lg:pr-[100px] lg:pl-[100px] transition-shadow bg-white ${isScrolled && "shadow-sm"}`}
    >
      <h3
        onClick={handleScrollToTop}
        className="cursor-pointer border-transparent z-50 border-b-[3px] border-gradient-static whitespace-nowrap"
      >
        Brigham Dent
      </h3>
      <FontAwesomeIcon
        className="h-12 md:hidden z-50"
        onClick={handleToggle}
        icon={isHidden ? faBars : faTimes}
      />
      <motion.div
        className={`${isHidden ? "hidden" : ""}  bg-white fixed inset-0 md:flex items-center justify-center md:relative flex flex-col md:flex-row items-center`}
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.ul className="flex flex-col md:flex-row items-center justify-around w-[300px] lg:w-96 text-2xl md:mr-5 lg:mr-10 mb-6 h-40 md:h-0 md:mb-0">
          <li
            className="cursor-pointer border-transparent hover:border-b-[3px] border-gradient "
            onClick={handleScrollToTop}
          >
            Home
          </li>
          <li className="cursor-pointer hover:border-b-[3px] border-gradient">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:border-b-[3px] border-gradient">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </motion.ul>
        <Link to="projects" smooth={true} duration={500}>
          <button className="w-44 text-xl btn-4">
            Projects
            <FontAwesomeIcon className="pl-2" icon={faCode} />
          </button>
        </Link>
      </motion.div>
    </div>
  );
};
