import { useState, useEffect } from "react";

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
      console.log(currIndex);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen -mt-[70px]">
      <div>
        <h1 className="gradient text-[90px]">Hey I'm Brigham Dent,</h1>
        <h1>A web developer always</h1>
        <div className="flex justify-center pr-96 pl-96">
          <h1 className="pr-[10px]">creating</h1>
          <h1 className="typed gradient">{currWord}.</h1>
        </div>
      </div>
      <button className="mt-24 w-96 h-16 text-2xl">Contact Me</button>
    </div>
  );
};
