import DownloadCVButton from "../DownloadCVButton/DownloadCVButton";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <h3 className="footer__left--contact-text">
            lets <span>talk</span>
          </h3>

          <div>
            <input
              className="footer__left--contact-input"
              type="text"
              placeholder="Your email address"
            />
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right--pages">
            <a href="">Home</a>
            <a href="">About</a>
          </div>
          <div className="footer__right--socials">
            <a href="">Linkedin</a>
            <a href="">Instagram</a>
            <a href="">Github</a>
            <DownloadCVButton />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <hr />
        <span>WITZE</span>
      </div>
    </footer>
  );
};

export default Footer;
