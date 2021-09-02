import { useEffect } from "react"
import About from "../About/About.jsx"
import Projects from "../Projects/Projects.jsx"
import Contact from "../Contact/Contact.jsx"
import "./Home.css"

function Home() {
  useEffect(()=> {
    document.body.classList.add("noscroll")
    setTimeout(() => {
      document.body.classList.remove("noscroll")
    }, 3600);
  }, [])
  return(
    <div className="home">
      <header className="home-header" id="home-header">
        <h1>Nicholas Rynearson</h1>
        <h4>software engineer | full-stack developer</h4>
      </header>
      <section className="links">
        <a href="#about-section">
          <div className="about-link">
            <h4>about</h4>
          </div>
        </a>
        <a href="#projects-section">
          <div className="projects-link">
            <h4>projects</h4>
          </div>
        </a>
        <a href="#contact-section">
          <div className="contact-link">
            <h4>contact</h4>
          </div>
        </a>
      </section>
      <section id="about-section">
        <About />
      </section>
      <section id="projects-section">
        <Projects />
      </section>
      <section id="contact-section">
        <Contact />
      </section>

    </div>
  )
}

export default Home

