import Header from "../../components/Header/Header";
import MyWork from "../../components/MyWork/MyWork";
import ProjectCard from "../../components/Project-card/Project-card";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    { id: "1", title: "Gentse feesten", image: "ui-illustration.svg" },
    { id: "2", title: "Festival Planner", image: "festival-planner.svg" },
  ];

  return (
    <>
      <Header />
      <MyWork />
      <div className="projects-container">
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
