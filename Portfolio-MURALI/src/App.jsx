import "./App.css";
import About from "./components/About/About";
import Hero from "./components/HERO/Hero";
import Navbar from "./components/NAVBAR/Navbar";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Project/>
    </>
  );
}

export default App;
