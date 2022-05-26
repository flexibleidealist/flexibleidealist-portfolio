import { useState, useEffect } from 'react';
import { getProjects } from '../../services/projects';
import Project from '../../components/Project/Project';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const scrollOff = () => {
    document.body.classList.add('noscroll');
  };
  const scrollOn = () => {
    document.body.classList.remove('noscroll');
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getProjects();
      setProjects(allProjects);
    };
    fetchProjects();
  }, []);
  return (
    <div className="projects">
      <h2 id="projects-header">recent projects</h2>
      <div
        onMouseEnter={scrollOff}
        onMouseLeave={scrollOn}
        className="projects-window"
        id="projects-window"
      >
        {projects?.map(project => (
          <Project
            className="project-card"
            key={project.id}
            id={project.id}
            project={project}
          />
        ))}
      </div>
      <button className="top-button">
        <a href="#home-header">top</a>
      </button>
    </div>
  );
}

export default Projects;
