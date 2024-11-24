import React from "react";
import "./Hero.css"; // Dit is het CSS-bestand

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h1 className="hero__title">
          front <br />
          end <br />
          dev
        </h1>
        <div className="hero__description"></div>
        <p className="hero__description--text">
          Welcome to my portfolio! I’m Witze Van der Straeten, a frontend
          development student at Artevelde Hogeschool, focused on building
          clean, responsive websites. Explore my projects to see my skills and
          passion for web development in action!
        </p>

        <a className="hero__description--btn" href="">
          contact me
        </a>
      </div>
    </>
  );
};

export default Hero;
