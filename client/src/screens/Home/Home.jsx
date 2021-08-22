import Projects from "../../components/Projects/Projects"
import "./Home.css"
function Home() {
  return(
    <div className="home">
      <header className="header">
        <div className="left-panel">left</div>
        <div className="divider">div</div>
        <div className="right-panel">right</div>
      </header>
      <div className="projects-tab">
        <div className="left-panel">
          {/* conditionally render this or null */}
          <Projects />
        </div>
        <div className="divider">div</div>
        <div className="right-panel">projects</div>
      </div>
      <div className="projects-menu"></div>
      <div className="about-tab">
        <div className="left-panel">pic</div>
        <div className="divider">div</div>
        <div className="right-panel">about</div>
      </div>
      <div className="about"></div>
      <div className="links-tab">
        <div className="left-panel">left</div>
        <div className="divider">div</div>
        <div className="right-panel">links</div>
      </div>
      <div className="links"></div>
      <footer className="footer">
        <div className="left-panel">left</div>
        <div className="divider">div</div>
        <div className="right-panel">right</div>
      </footer>
    </div>
  )
}

export default Home