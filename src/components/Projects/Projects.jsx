import Card from "../Card/Card";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="projects">
        <Card image={"ui-illustration.svg"} title={"illustrations"} />
        <Card image={"web-development.png"} title={"Web development"} />
        <Card image={"illustrations.png"} title={"illustrations"} />
      </div>
    </>
  );
};

export default Projects;
