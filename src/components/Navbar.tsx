import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <h3 className="ml-[64px]">Brigham Dent</h3>
      <div className="flex items-center mr-[64px]">
        <ul className="flex justify-around w-96 text-2xl mr-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="w-44 text-xl">
          Projects
          <FontAwesomeIcon className="pl-2" icon={faCode} />
        </button>
      </div>
    </div>
  );
};
