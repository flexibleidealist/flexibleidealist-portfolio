import { useState, useEffect } from "react"
import Projects from "../../components/Projects/Projects"
import About from "../../components/About/About.jsx"
import "./Home.css"

function Home() {
  const [pageState, setPageState] = useState(0)
  // 4 page states: all tabs closed; one tab open state for each tab
  const closeTabs = () => {
    setPageState(0)
  }
  const projectsClick = () => {
    setPageState(1)
  }

  const aboutClick = () => {
    setPageState(2)
  }

  const linksClick = () => {
    setPageState(3)
  }
  //when everything is working, delete all this:
  // const projectsDisplay = (
  //   <div className="projects-open">
  //       <div className="left-panel">
  //         <Projects />
  //       </div>
  //       <div className={`divider${pageState} divider`}></div>
  //       <div className={`right-panel${pageState}`}>
  //         <div className="close-button-container">
  //           <button className="close" onClick={closeTabs}>x</button>
  //         </div>
  //         <div className="projects-list">
  //           <button className="p1">NYC Beach App</button>
  //           <button className="p2">tiny library</button>
  //           <button className="p3">B-Side Collective</button>
  //           <button className="p4">ArtSpace</button>
  //         </div>
  //       </div>
  //     </div>
  // )

  const projectsTabClosed = (
    <div className="projects-tab">
        <div className={`left-panel${pageState}`}></div>
        <div className={`divider${pageState} divider`}></div>
        <div className={`right-panel${pageState}`}>
          <button className="tab-button" onClick={projectsClick}>projects</button> 
        </div>
      </div>
  )

  // const aboutDisplay = (
  //   <div className="about-open">
  //       <div className="left-panel-about">
  //         <img id="profile-pic" src="https://i.imgur.com/kHvKSSc.jpg" alt="profile pic" />
  //       </div>
  //       <div className={`divider${pageState} divider`}></div>
  //       <div className="right-panel-about">
  //         <div className="close-button-container">
  //           <button className="close" onClick={closeTabs}>x</button>
  //         </div>
  //         <p className="about-me">I'm a software engineer.</p>
  //         <a href="/assets/dummy-resume.pdf" download>download my resume</a>
  //       </div>
  //     </div>
  // )

  const aboutTabClosed = (
    <div className="about-tab">
      <div className={`left-panel${pageState}`}></div>
      <div className={`divider${pageState} divider`}></div>
      <div className={`right-panel${pageState}`}>
        <button className="tab-button" onClick={aboutClick}>about</button>
      </div>
    </div>
  )

  const linksDisplay = (
    <div className="links-open">
      <div className="left-panel-links">
        <h3>let's work together!</h3>
      </div>
      <div className={`divider${pageState} divider`}></div>
      <div className="right-panel-links">
        <div className="close-button-container">
          <button className="close" onClick={closeTabs}>x</button>
        </div>
        <div className="links-list-container">
          <div className="links-list">
            <a href="https://www.linkedin.com/in/nicholas-rynearson-88a77635/">LinkedIn</a>
            <a href="https://github.com/flexibleidealist">GitHub</a>
            <a href="mailto:nrynearson@gmail.com">e-mail</a>
          </div>
        </div>
      </div>
    </div>
  )

  const linksTabClosed = (
    <div className="links-tab">
      <div className={`left-panel${pageState}`}></div>
      <div className={`divider${pageState} divider`}></div>
      <div className={`right-panel${pageState}`}>
        <button className="tab-button" onClick={linksClick}>contact</button>
      </div>
    </div>
  )

  
  return(
    <div className="home">
      <header className={`header${pageState}`}>
        <div className={`left-panel${pageState}`}>
          <div className={`name${pageState}`}>
            <h1>Nicholas Rynearson</h1>
            <h3>software engineer | full-stack developer</h3>
          </div>
        </div>
        <div className={`divider${pageState}`}></div>
        <div className={`right-panel${pageState}`}></div>
      </header>
      { pageState === 1 ? <Projects setPageState={setPageState}/> : projectsTabClosed }
      { pageState === 2 ? <About setPageState={setPageState}/> : aboutTabClosed }
      { pageState === 3 ? linksDisplay : linksTabClosed }
      <footer className={`footer${pageState}`}>
        <div className={`left-panel${pageState}`}></div>
        <div className={`divider${pageState}`}></div>
        <div className={`right-panel${pageState}`}></div>
      </footer>
    </div>
  )
}

export default Home