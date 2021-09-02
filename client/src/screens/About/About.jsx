
import { useState, useEffect } from "react";
import { getSkills } from "../../services/skills";
import "./About.css"

function About(){
 const [skills, setSkills] = useState([])

 useEffect(() => {
  const fetchSkills = async () => {
    const allSkills = await getSkills()
    setSkills(allSkills)
  }
    fetchSkills()
 }, [])

  return(
    <div className="about">
      <img id="profile-pic" src="https://i.imgur.com/kHvKSSc.jpg" alt="profile pic" />
      <div className="about-text">
        <p className="about-me">I am a software engineer who loves problem solving and learning new things. Fifteen years as a professor of Greek and Latin taught me a lot about explaining complex ideas to beginners. I believe a better world is possible and technology designed to empower people can help us build it.</p>
        <p>My current skills include:</p>
        <div className="skills-icons">
          {
            skills.map(skill => (
              <img key={skill.id} src={skill.icon} className="skill-icon" alt={`${skill.name} logo`}></img>
            ))
          }
        </div>
        <a href="/assets/rynearson-resume.pdf" download>download my resume</a>
      </div>
      <button className="top-button"><a href="#home-header">top</a></button>
    </div>
  )
}

export default About