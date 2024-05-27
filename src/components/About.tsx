import headshot from "../assets/Headshot.jpg";
export const About = () => {
  return (
    <div className="flex items-center justify-around mt-32 w-[900px] ">
      <img src={headshot} alt="" className="rounded-lg w-[400px]" />
      <div className="flex flex-col items-center justify-around">
        <h1>About</h1>
        <h2 className="w-[500px] font-light text-left ml-10 ">
          I specialize in React and TypeScript, certified by Meta in front-end
          development. My approach prioritizes clean, efficient code for high
          performance. With a passion for continuous learning, I stay ahead of
          emerging technologies to deliver innovative solutions.
        </h2>
      </div>
    </div>
  );
};
