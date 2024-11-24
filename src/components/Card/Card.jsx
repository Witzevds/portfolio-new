import "./Card.css";

const Card = ({ title, image }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <img
        className="card__image"
        src={`/assets/images/${image}`}
        alt={title}
      />
      <a className="card__btn" href="">
        {title}
      </a>
    </div>
  );
};

export default Card;
