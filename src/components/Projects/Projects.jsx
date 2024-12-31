import Card from "../Card/Card";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="projects">
        <Card image={"ui-illustration.svg"} title={"UI & UX"} page={"UI-UX"} />
        <Card
          image={"illustrations.png"}
          title={"illustrations"}
          page={"Illustrations"}
        />
        <Card
          image={"web-development.png"}
          title={"Web development"}
          page={"Web-development"}
        />
      </div>
    </>
  );
};

export default Projects;
