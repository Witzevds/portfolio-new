import { useState } from "react";

import viteLogo from "/vite.svg";
import "./assets/styles/globals.css";
import "./assets/styles/Variables.css";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
