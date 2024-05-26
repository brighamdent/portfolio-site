import { CertificationData } from "../../types";

interface CertificationProps {
  certificationData: CertificationData;
}

export const Certification: React.FC<CertificationProps> = ({
  certificationData,
}) => {
  return (
    <div className="card flex justify-start items-center rounded-3xl h-32 w-[900px] mt-5">
      <img
        src={certificationData.logo}
        alt=""
        className="ml-12 h-[70%] w-[150px]"
      />
      <div className="flex flex-col items-start justify-between ml-12 h-[70%]">
        <h3>{certificationData.title}</h3>
        <p>Course Contents: {certificationData.contents}</p>
        <p>Skills: {certificationData.skills}</p>
      </div>
    </div>
  );
};
