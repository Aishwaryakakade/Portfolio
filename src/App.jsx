import React from "react";
import Navbar from "./components/navbar";
import Me from "./components/Me";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Me />
      <Skills />
      <About />
      <Projects />
    </>
  );
};

export default App;
