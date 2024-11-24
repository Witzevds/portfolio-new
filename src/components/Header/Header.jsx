import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="header-text">
          <div className="header-text__left">
            <a href="/">Home</a>
            <a href="/Projects">Portfolio</a>
          </div>
          <span className="header-text__center">Witze Van der Straeten</span>
          <div className="header-text__right">
            <a href="/Service">Service</a>
            <a href="/Contact">Contact</a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;