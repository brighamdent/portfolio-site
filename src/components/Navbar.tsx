import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center w-full sticky top-0 pt-[25px] pb-5 pr-[100px] pl-[100px] transition-shadow bg-white ${isScrolled && "shadow-sm"}`}
    >
      <h3>Brigham Dent</h3>
      <div className="flex items-center ">
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
