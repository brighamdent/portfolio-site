import { ProjectData } from "../../types";

interface ProjectProps {
  projectData: ProjectData;
}

export const Project: React.FC<ProjectProps> = ({ projectData }) => {
  return (
    <div
      className={`card flex justify-around items-center w-[900px] rounded-3xl h-[350px] mt-6 p-5 ${projectData.layout == "left" ? "flex-row-reverse" : ""}`}
    >
      <div className="flex flex-col items-start w-1/3 ">
        <div className="flex justify-around mb-5">
          <h2>{projectData.name}</h2>
          <img
            src={projectData.logo}
            alt=""
            className="w-[50px] h-[50px] ml-4"
          />
        </div>
        <p className="text-[20px] text-left">{projectData.description}</p>
      </div>
      <div className="w-[400px] flex flex-col items-center ">
        <img
          src={projectData.preview}
          alt=""
          className="w-[400px] rounded-3xl"
        />
        <div className="flex pt-5">
          <a
            href={projectData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button w-48 text-xl mr-2"
          >
            Source Code
          </a>
          <a
            href={projectData.liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="button w-48 text-xl ml-2"
          >
            View live Site
          </a>
        </div>
      </div>
    </div>
  );
};
