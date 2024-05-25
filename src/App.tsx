import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <div className="flex flex-col text-center">
      <Navbar />
      <Home />
      <About />
      <Technologies />
    </div>
  );
}

export default App;
