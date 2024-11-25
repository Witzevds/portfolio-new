import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__left">
        <h1 className="about__left--title">Who am I</h1>
        <div className="about__image-description">
          <img
            className="about__left--image"
            src="/assets/images/witze-portret.jpg"
            alt="Witze Van der Straeten"
          />
          <div className="about__left--description">
            <p>
              I’m Witze Van der Straeten, a frontend development student with a
              background in design. I first studied design, but my passion
              quickly shifted to web development. My main tools are HTML, CSS,
              JavaScript, and React, and my design skills give me a strong eye
              for detail.
            </p>
            <p>
              Beyond coding, I enjoy going to the gym and reading books—two
              things that keep me balanced and inspired. My goal is to
              eventually start my own business with a small, dedicated team. I
              thrive in collaborative settings but can work independently just
              as well.
            </p>
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-icons">
            <img src="src/assets/icons/react.svg" alt="React" />
            <img src="src/assets/icons/eleventy.svg" alt="Eleventy" />
            <img src="src/assets/icons/html.svg" alt="HTML5" />
            <img src="src/assets/icons/css.svg" alt="CSS3" />
            <img src="src/assets/icons/figma.svg" alt="Figma" />
            <img src="src/assets/icons/photoshop.svg" alt="Photoshop" />
            <img src="src/assets/icons/html.svg" alt="Html" />
            <img src="src/assets/icons/sql.svg" alt="SQL" />
          </div>
        </div>
      </div>
      <div className="about__right">
        <img
          className="about__right--image"
          src="/assets/images/10723.jpg"
          alt="Background Illustration"
        />
      </div>
    </div>
  );
};

export default About;
