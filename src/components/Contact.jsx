import React from "react";

function Contact() {
  return (
    <section id="contact">
      <br />
      <br />
      <br />
      <h1 className="Contact">Contact Us</h1>
      <p className="paraContact">Have an idea, a project, or just want to say hi? Whether it's frontend magic, backend efficiency, or a full-fledged web solution—I’m here to bring your vision to life.</p>
      <br />
      <br />
      <div className="container-contact">
      <br />
      <div className="contact-content">
      <img src="/Pi.jpg" alt="profile" className="Contact-Profile"></img>
      
      <form method="post" action="/Submit.html">
        <label for="fullname">Full Name</label><br />
        <input name="name" type="text" placeholder="Your name" required></input>
        <br />
        <label htmlFor="email">Email</label><br />
        <input id="email" name="email" type="email" placeholder="Your email" required></input><br />
        <label htmlFor="message">Message</label><br />
        <textarea required></textarea><br />
        <button className="Click">Contact Us</button>
      </form>
      </div>
      <br />
      <br />
      <h4>Contact</h4>
      <br />
      <p><b>Email:</b><a className="Mail" href="mailto:pk7678109279@gmail.com">&nbsp; pk7678109279@gmail.com</a></p>
      <p><b>Contact no:</b><a className="Mail" href="tel:+917678109279">&nbsp; +917678109279</a></p>
      </div>
      <h4 id="SocialLinks">Social Links</h4>
      <br />
      <div className="Social-links">
        <a href="https://www.linkedin.com/in/PiyushKumar767810927920252023" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.png" alt="Linkedin" className="social-icon"></img></a>
      <a href="https://github.com/pkkrishndas" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="social-icon" />
          </a>
      </div>
      <br />
      <footer>
                <div className="footer">
                    <p className="ParaFooter"><p><b>&copy; 2025 Piyush's Portfolio | Made with ❤️ Piyush</b></p></p>
                </div>
      </footer>
    </section>
  )
}

export default Contact;