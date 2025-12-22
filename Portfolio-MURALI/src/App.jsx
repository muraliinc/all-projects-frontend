import "./App.css";
import About from "./components/About/About";
import Hero from "./components/HERO/Hero";
import Navbar from "./components/NAVBAR/Navbar";
import Project from "./components/Project/Project";
import Skill from "./components/Skills/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Project/>
      <Skill/>
    </>
  );
}

export default App;
