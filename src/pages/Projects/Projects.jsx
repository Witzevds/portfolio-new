import Header from "../../components/Header/Header";
import MyWork from "../../components/MyWork/MyWork";
import ProjectCard from "../../components/Project-card/Project-card";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      id: "1",
      title: "Gentse feesten",
      image: "gentse-feesten.png",
      website:
        "https://pgmgent-atwork-1.github.io/opdracht-2-gentse-feesten-Witzevds/",

      description:
        "A vibrant and lively festival in Ghent, showcasing music, theater, and cultural events.",
    },
    {
      id: "2",
      title: "Blackout news",
      image: "blackout-news.png",
      website: "https://opdracht-2-react-application-witzevds-app.onrender.com",

      description:
        "Stay updated with the latest news and events during a blackout, ensuring you are always informed.",
    },
  ];

  return (
    <>
      <Header />

      <div className="projects-container">
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            website={project.website}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
