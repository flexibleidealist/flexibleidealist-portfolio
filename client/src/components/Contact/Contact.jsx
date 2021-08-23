import { useState } from "react"
import "./Contact.css"

function Contact(props){
  const { setPageState } = props
  const [closed, setClosed] = useState(false)
  const closeContact = () => {
    setClosed(true)
    setTimeout(() => {
      setPageState(0)
    }, 1200);
  }
  return(

<div className={closed ? "closed" : "contact"}>
      <div className="left-panel-contact">
        <h3>let's work together!</h3>
      </div>
      <div className="divider"></div>
      <div className="right-panel-contact">
        <div className="list-container">
          <div className="contact-list">
            <a href="https://www.linkedin.com/in/nicholas-rynearson-88a77635/">LinkedIn</a>
            <a href="https://github.com/flexibleidealist">GitHub</a>
            <a href="mailto:nrynearson@gmail.com">e-mail</a>
          </div>
        </div>
      </div>
        <div className="close-button-container">
          <button className="close" onClick={closeContact}>close</button>
        </div>
    </div>






  )
}

export default Contact