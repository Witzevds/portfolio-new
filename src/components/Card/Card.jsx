import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ title, image, page }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <img
        className="card__image"
        src={`/assets/images/${image}`}
        alt={title}
      />
      <Link to={`/${page}`}>
        <a className="card__btn" href="">
          {title}
        </a>
      </Link>
    </div>
  );
};

export default Card;
