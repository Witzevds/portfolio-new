import { Link } from "react-router-dom";
import "./Project-card.css";

const ProjectCard = ({ id, title, image }) => {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <img
        className="project-card__image"
        src={`/assets/images/${image}`}
        alt={title}
      />
      <Link
        to={
          "https://pgmgent-atwork-1.github.io/opdracht-2-gentse-feesten-Witzevds/"
        }
        className="project-card__btn"
      >
        Open Website
      </Link>
    </div>
  );
};

export default ProjectCard;
