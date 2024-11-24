import { useState } from "react";

import viteLogo from "/vite.svg";
import "./assets/styles/globals.css";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
