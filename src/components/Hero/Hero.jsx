import "./Hero.css";

const Hero = () => {
  const title = "front end dev."; // Define your title string

  return (
    <div className="hero">
      <h1 className="hero__title">
        {title.split(" ").map((word, index) => (
          <span key={index} className="char" style={{ "--char-index": index }}>
            {word}
            <br /> {/* Add a new line after each word */}
          </span>
        ))}
      </h1>
      <div className="hero__description">
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
    </div>
  );
};

export default Hero;
