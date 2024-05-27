import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Technologies } from "./components/Technologies";
import { Education } from "./components/education/Education";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <div className="flex flex-col text-center">
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
