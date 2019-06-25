
import React from "react";
import "./styles/Services.css";

import imagePlatzi from "../images/platzi-video-react-native.png"

function Services(props) {
	
	return(
		<section id="services" className="Services">
        <div className="container" >
        <h2 className="Services-title">Mis Servicios para ti, Quiero ayudarte, asi puedo hacerlo</h2>


        <article className="Service">

          <div className="Service-text">
            <h3 className="Service-title">Full-time React Development</h3>

            <h6 className="Service-course">React / HTML5 / CSS3 | SASS / ES7 / APIs </h6>

      

            <section  className="Service-description">
              <p>Hagamos que algo suceda:</p>
              <ul>
                <li>Desarrollo basado en GIT</li>
                <li>Objetivos primero que horarios</li>
                <li>Mejora constante expresada en el valor que aporto</li>
              </ul>
            </section>
          </div>
          <figure className="Service-image-container">

            <img className="Service-image" alt="Platzi React Native" 
               src={imagePlatzi}
               width="500px" 
            />
          </figure>
        </article>

        <article className="Service">

          <div className="Service-text">
            <h3 className="Service-title">Part-time Frontend Development</h3>

            <h6 className="Service-course">React / HTML5 / CSS3 | SASS / ES7 / APIs </h6>

        

              <section  className="Service-description">
              <p>Hagamos que algo suceda:</p>
              <ul>
                <li>Desarrollo basado en GIT</li>
                <li>Objetivos primero que horarios</li>
                <li>Mejora constante expresada en el valor que aporto</li>
              </ul>
            </section>
          </div>
          <figure className="Service-image-container">

            <img className="Service-image" alt="Platzi React Native" 
               src={imagePlatzi}
               width="500px" 
            />
          </figure>
        </article>

        <article className="Service">

          <div className="Service-text">
            <h3 className="Service-title">Development 4 Project</h3>

            <h6 className="Service-course">React / HTML5 / CSS3 | SASS / ES7 / APIs </h6>

        

              <section  className="Service-description">
              <p>Hagamos que algo suceda:</p>
              <ul>
                <li>Desarrollo basado en GIT</li>
                <li>Objetivos primero que horarios</li>
                <li>Mejora constante expresada en el valor que aporto</li>
              </ul>
            </section>
          </div>
          <figure className="Service-image-container">

            <img className="Service-image" alt="Platzi React Native" 
               src={imagePlatzi}
               width="500px" 
            />
          </figure>
        </article>
        </div>
      </section>

	)
}

export default Services;


