import { useEffect } from "react";
import { Events, animateScroll } from "react-scroll";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Technologies } from "./components/Technologies";
import { Education } from "./components/education/Education";
import { Projects } from "./components/projects/Projects";
import { Element } from "react-scroll";

function App() {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);
  return (
    <div className="flex flex-col items-center text-center">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Technologies />
      <Education />
      {/* <Element name="projects"> */}
      {/*   <Projects /> */}
      {/* </Element> */}
      {/* <Element name="contact"> */}
      {/*   <Contact /> */}
      {/* </Element> */}
    </div>
  );
}

export default App;
