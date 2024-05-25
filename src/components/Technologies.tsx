import axiosLogo from "../assets/Axioslogo.png";
import reactLogo from "../assets/react.svg";
import firebaseLogo from "../assets/firebase.svg";
import nextjsLogo from "../assets/nextjs-icon.svg";
import typescriptLogo from "../assets/typescript-icon.svg";
import javascriptLogo from "../assets/javascript.svg";
import nodejsLogo from "../assets/nodejs-icon.svg";
import tailwindLogo from "../assets/tailwindcss-icon.svg";

export const Technologies = () => {
  const techData = [
    {
      name: "Axios",
      source: axiosLogo,
    },
    {
      name: "React",
      source: reactLogo,
    },
    {
      name: "Firebase",
      source: firebaseLogo,
    },
    {
      name: "Next.js",
      source: nextjsLogo,
    },
    {
      name: "Typescript",
      source: typescriptLogo,
    },
    {
      name: "Javascript",
      source: javascriptLogo,
    },
    {
      name: "Node.js",
      source: nodejsLogo,
    },
    {
      name: "Tailwind",
      source: tailwindLogo,
    },
  ];
  return (
    <div className="flex flex-col items-center mt-32">
      <h1>Favorite Technologies</h1>
      <div className="grid grid-cols-4 h-[500px] mt-10">
        {techData.map((tech) => (
          <img src={tech.source} alt="" className="m-10 w-40 h-40" />
        ))}
      </div>
    </div>
  );
};
