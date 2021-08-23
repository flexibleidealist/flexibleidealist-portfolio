import { useState, useEffect } from "react"
import { getProjects } from "../../services/projects"
import Project from "../Project/Project"
import "./Projects.css"

function Projects(props) {
  const { setPageState } = props
  const [projects, setProjects] = useState()
  const [closed, setClosed] = useState(false)
  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getProjects()
      setProjects(allProjects)
    };
    fetchProjects();
  }, [])

  const closeProjects = () => {
    setClosed(true)
    setTimeout(() => {
      setPageState(0)
    }, 1200);
  }
  return(
    <div className={closed ? "closed": "projects"}>
      <div className="projects-previews">
        {
        projects?.map(project => (
          <Project className="project-card" key={project.id} project={project} />
          ))
        }
      </div>
      <div className="projects-divider"></div>
      <div className="right-side">
        <div className="projects-list">
          <button>NYC Beach App</button>
          <button>tiny library</button>
          <button>B-Side Collective</button>
          <button>ArtSpace</button>
        </div>
      </div>
      <div className="button-container">
        <button className="close" onClick={closeProjects}>close</button>
      </div>
    </div>
  )
}

export default Projects