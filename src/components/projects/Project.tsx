import { ProjectData } from "../../types";

interface ProjectProps {
  projectData: ProjectData;
}

export const Project: React.FC<ProjectProps> = ({ projectData }) => {
  return (
    <div
      className={`card flex justify-around items-center w-[1500px] rounded-3xl h-[600px] mt-16 p-10 ${projectData.layout == "left" ? "flex-row-reverse" : ""}`}
    >
      <div className="flex flex-col items-start w-1/3 ">
        <div className="flex justify-around mb-10 ">
          <h1>{projectData.name}</h1>
          <img src={projectData.logo} alt="" className="w-[100px] h-[100px]" />
        </div>
        <p className="text-[32px] text-left ">{projectData.description}</p>
      </div>
      <div className="w-[800px] flex flex-col items-center ">
        <img
          src={projectData.preview}
          alt=""
          className="w-[800px] rounded-3xl"
        />
        <div className="flex pt-10">
          <button className="w-96 text-2xl mr-4">Source Code</button>
          <button className="w-96 text-2xl ml-4">View live Site</button>
        </div>
      </div>
    </div>
  );
};
