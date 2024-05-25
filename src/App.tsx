import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <div className="flex flex-col text-center">
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
