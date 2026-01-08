import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/HERO/Hero";
import Navbar from "./components/NAVBAR/Navbar";
import Portfolio_M from "./components/Portfoliio-making/Portfolio";
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
      <Portfolio_M/>
      <Contact/>
    </>
  );
}

export default App;
