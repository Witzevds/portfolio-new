import { Link } from "react-router-dom";
import "./Project-card.css";

const ProjectCard = ({ id, title, image, website, description }) => {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <img
        className="project-card__image"
        src={`/assets/project-images/${image}`}
        alt={title}
      />
      <p className="project-card__description">{description}</p>
      <Link to={website} className="project-card__btn">
        Open Website
      </Link>
    </div>
  );
};

export default ProjectCard;
