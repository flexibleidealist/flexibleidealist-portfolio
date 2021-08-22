import { useState, useEffect } from "react"
import { getProjects } from "../../services/projects"
import Project from "../Project/Project"
import "./Projects.css"

function Projects() {
  const [projects, setProjects] = useState()

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getProjects()
      setProjects(allProjects)
    };
    fetchProjects();
  }, [])

  return(
    <div className="projects">
      {
      projects?.map(project => (
        <Project key={project.id} project={project} />
        ))
      }
    </div>
  )
}

export default Projects