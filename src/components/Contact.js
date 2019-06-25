
import React from "react";
import "./styles/Contact.css";

function Contact(props) {
	
	return(
          <section className="contact" id="contacto">
            <div className="container">
              <form className="contact-form">

                <h2>¿Creamos algo juntos?</h2>

                <a className="contactForm-submit" href="mailto:danielpaezsw66@gmail.com?Subject=Hola%20Daniel" target="_blank" rel="noopener noreferrer">
                Enviar un correo
                </a>
              </form>

              <section className="social">

                <a href="https://twitter.com/heysoypaez" className="social-link twitter">twitter</a>
                <a href="https://github.com/heysoypaez/" className="social-link github">github</a>
                <a 
                href="https://www.linkedin.com/in/heysoypaez/"
                 className="social-link linkedin">linkedin</a>
                <p>No me sigas, compartamos</p>
              </section>
            </div>
          </section>
	)
}

export default Contact;


