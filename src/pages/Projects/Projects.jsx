import Header from "../../components/Header/Header";
import MyWork from "../../components/MyWork/MyWork";
import ProjectCard from "../../components/Project-card/Project-card";
import "./Projects.css";

const Projects = ({ type }) => {
  const allProjects = [
    {
      id: "1",
      type: "web", // Type indicates category
      title: "Gentse feesten",
      image: "gentse-feesten.png",
      website:
        "https://pgmgent-atwork-1.github.io/opdracht-2-gentse-feesten-Witzevds/",
      description:
        "A vibrant and lively festival in Ghent, showcasing music, theater, and cultural events.",
    },
    {
      id: "2",
      type: "web",
      title: "Blackout news",
      image: "blackout-news.png",
      website: "https://opdracht-2-react-application-witzevds-app.onrender.com",
      description:
        "Stay updated with the latest news and events during a blackout, ensuring you are always informed.",
    },
    {
      id: "3",
      type: "uiux",
      title: "Mobile App Redesign",
      image: "app-redesign.png",
      website: "https://example.com/app-redesign",
      description:
        "A complete redesign of a popular mobile app for improved usability and aesthetics.",
    },
    {
      id: "4",
      type: "illustrations",
      title: "Digital Portrait",
      image: "digital-portrait.png",
      website: "https://example.com/digital-portrait",
      description:
        "A modern digital portrait created using Procreate and Photoshop.",
    },
    {
      id: "5",
      type: "illustrations",
      title: "yes Portrait",
      image: "digital-portrait.png",
      website: "https://example.com/digital-portrait",
      description:
        "A modern digital portrait created using Procreate and Photoshop.",
    },
    {
      id: "6",
      type: "web",
      title: "Gentse Luht",
      image: "gentse-luht.png",
      website: "https://gentse-luht.onrender.com/",
      description:
        "Its a website for a school project where we had to use a API to get data and show it on the website.",
    },
  ];

  // Filter projects based on the type prop
  const projectList = allProjects.filter((project) => project.type === type);

  return (
    <>
      <Header />
      <h1>{type}</h1>
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
