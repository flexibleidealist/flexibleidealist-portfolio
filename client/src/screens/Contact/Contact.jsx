import "./Contact.css"

function Contact(){
  
  return(
    <div className="contact">
      <h3>let's work together!</h3>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/nicholas-rynearson-88a77635/" target="_blank"><img id="linkedin" src="/assets/icons/linkedin-brands.svg" alt="linkedin logo"></img></a>
        <a href="mailto:nrynearson@gmail.com" target="_blank"><img id="email-link" src="/assets/icons/envelope-solid.svg" alt="email link"></img></a>
        <a href="https://github.com/flexibleidealist" target="_blank"><img src="/assets/icons/github-brands.svg" alt="github logo"></img></a>
        <a href="https://www.instagram.com/flexibleidealist/" target="_blank"><img src="/assets/icons/instagram-brands.svg" alt="instagram logo"></img></a>
      </div>
      <button className="top-button"><a href="#home-header">top</a></button>

    </div>

  )
}

export default Contact