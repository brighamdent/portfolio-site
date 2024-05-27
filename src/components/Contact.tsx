import linkedinLogo from "../assets/linkedin-icon.svg";
import facebookLogo from "../assets/facebook.svg";
import githubLogo from "../assets/github-icon.svg";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1>Contact Me</h1>
      <div className="card rounded-3xl w-[900px] flex flex-col h-[400px] items-center space-y-4 p-4">
        <p className="text-[18px]">
          Feel Free to email me here or reach out on any of my socials below
        </p>
        <input
          className="bg-white rounded-lg w-[90%] h-12 p-2"
          type=""
          name=""
          value=""
          placeholder="Your Name"
        />
        <input
          className="bg-white rounded-lg w-[90%] h-12 p-2"
          type=""
          name=""
          value=""
          placeholder="Your email"
        />
        <textarea
          className="bg-white rounded-lg w-[90%] h-[200px] p-2"
          placeholder="Message"
        ></textarea>
        <button className="w-[90%] text-2xl">Send</button>
      </div>
      <div className="flex justify-around mt-4 mb-1 space-x-6">
        <img className="w-16" src={linkedinLogo} alt="" />
        <img className="w-16" src={facebookLogo} alt="" />
        <img className="w-16" src={githubLogo} alt="" />
      </div>
      <p>brighamdent@gmail.com</p>
    </div>
  );
};
