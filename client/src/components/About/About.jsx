
import { useState } from "react";
import "./About.css"

function About(props){
  const { setPageState } = props
  const [closed, setClosed] = useState(false)
  const closeAbout = () => {
    setClosed(true)
    setTimeout(() => {
      setPageState(0)
    }, 1200);
  }
  return(
    <div className={closed ? "closed" : "about"}>
      <div className="profile-pic-container">
        <img id="profile-pic" src="https://i.imgur.com/kHvKSSc.jpg" alt="profile pic" />
      </div>
      <div className="divider"></div>
      <div className="right-side-about">
        <div className="about-text">
          <p className="about-me">I am a software engineer who loves exploring new ideas. Fifteen years as a professor of Greek and Latin taught me a lot about explaining complex ideas to beginners. I believe a better world is possible and technology designed to empower people can help us build it.</p>
          <p>My current skills include HTML, CSS, Javascript, Express, Ruby, Rails, and Git</p>
          <a href="/assets/dummy-resume.pdf" download>download my resume</a>
        </div>
      </div>
        <div className="close-button-container">
          <button className="close" onClick={closeAbout}>close</button>
        </div>
    </div>
  )
}

export default About