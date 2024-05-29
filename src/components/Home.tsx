import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
        <h1 className="gradient text-[90px]">Hey I'm Brigham Dent,</h1>
        <h1>A web developer always</h1>
        <div className="flex justify-center pr-96 pl-96">
          <h1 className="pr-[10px]">creating</h1>
          <h1 className="typed gradient">{currWord}.</h1>
        </div>
      </div>

      <Link to="contact" smooth={true} duration={500}>
        <button className="mt-16 w-96 h-16 text-2xl">Contact Me</button>
      </Link>
      <Link to="about" smooth={true} duration={500}>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="mt-32 h-14 text-[#506dab] bounce hover:text-[#1f3b6c] transition-colors duration-300 ease-in-out"
        />
      </Link>
    </div>
  );
};
