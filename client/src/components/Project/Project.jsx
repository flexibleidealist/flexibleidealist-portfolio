import "./Project.css"

function Project(props) {
  const { project } = props
  return(
    <div className="project">
      <img className="project-image" src={project.image_url} alt={project.title} />
      <p className="description">{project.description}</p>
      <div className="project-links">
        <button><a href={project.deployed_url} target="_blank" className="deployed">See the App</a></button>
        <button><a href={project.repo_url}  target="_blank" className="repo">See the Code</a></button>
      </div>
    </div>
  )
}

export default Project