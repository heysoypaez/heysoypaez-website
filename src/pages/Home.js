import React from 'react';

import "./Home.css"

import {Link} from "react-router-dom"

function HomePage() {
  return (
    <div className="App">
          <header className="header">

            <div className="container">
            <section className="logo">
              <Link to="/">
                <h1>Daniel Páez</h1>
              </Link>
            </section>

            <nav className="menu">
              <ul>
            
                <li>
                  <a className="link" href="#portafolio">Portafolio</a>
                </li>

                <li>
                  <Link className="link" to="./blog">Blog</Link>
                </li>

                <li>
                  <a className="link" href="#contacto">Trabajemos Juntos</a>
                </li>
              </ul>
            </nav>
            </div>
          </header>

          <section className="hero">
            <div className="container">
            <h1>
              Hello, <strong>Daniel Páez</strong> acá
              <strong>Ethical  Software </strong> Developer <br />
              <strong>¡React Developer!</strong>
            </h1>
            <video

              src="../public/videos/daniel-paez-hablando-en-mudo.mp4" 
              height="400px" 
              autoplay 
              loop 
              muted
              
            > 
            </video> 
           </div>
          </section>

          <section className="filtering-people">
            <h1>El Software genera impacto positivo</h1>
            <p>Un Desarrollador es una persona que pone un 1 donde habia un 0, una persona que dibuja en un computador las máquinas que se ha vuelto capaz de visionar en su mente.</p>
            <p> Estoy convencido que tu persona, tus proyectos, esa empresa, organizacion de la que eres parte puede experimentar un impacto positivo con un Desarrollador <strong>que actúa en base a Principios</strong> dentro de él. </p>
          </section>

          <section className="portfolio" id="portafolio">
            <div className="container">
            <h2>Portafolio (Proyectos Destacados)</h2>

            <article className="project">

              <div className="project-text">
                <h3 className="project-title">Paty Time</h3>

                <h6 className="project-course">React</h6>

                <p className="project-date">
                  <small> <strong>Fecha:</strong> 03/03/19</small>
                </p>

                <p project-link> 
                  <strong>Puedes verlo en:</strong> <a href="https://github.com/heysoypaez/patytime">Github Patytime</a>
                </p>

                <p  className="project-description">
                  Paty time! La web que estoy desarrollando actualmente para <a href="https://www.instagram.com/paty.time/" target="_blank">una artista</a>, dibujante, fashion designer que de verdad creo que deberías conocer, es fantástica
                </p>

              </div>
              <figure className="project-image-container">

                <img className="project-image" 
                   src="../images/patytime-home-view.png"
                   width="500px" 
                />
              </figure>
            </article>

            <article className="project">

              <div className="project-text">
                <h3 className="project-title">Calculadona</h3>

                <h6 className="project-course">Javascript Vanilla</h6>

                <p className="project-date">
                  <small> <strong>Fecha:</strong> 03/03/19</small>
                </p>

                <p project-link> 
                  <strong>Puedes verlo en:</strong> <a href="https://github.com/heysoypaez/calculadona"> Calculadona github</a>
                </p>

                <p>
                  Una aplicacion web que calcula los numeros relevantes para un negocio de donas y hace algo útil con eso
                </p>

              </div>
              <figure className="project-image-container">

                <img className="project-image" 
                   src="../images/calculadona-home-view.png"
                   width="500px" 
                />
              </figure>
            </article>

            <article className="project">

              <div className="project-text">
                <h3 className="project-title">Platzi Video</h3>

                <h6 className="project-course">Javascript Vanilla / SASS / APIs fetch</h6>

                <p className="project-date">
                  <small> <strong>Fecha:</strong> 03/03/19</small>
                </p>

                <p project-link> 
                  <strong>Puedes verlo en:</strong> <a href="https://github.com/heysoypaez/platzi-video">Platzi video github</a>
                </p>

                <p>
                  Aplicacion que desarrolle junto a Platzi donde aplico aprendizajes para pasar programacion de jquery a js puro, además hago llamadas GET a APIs publicas externas
                </p>

              </div>
              <figure className="project-image-container">

                <img className="project-image" 
                   src="../images/platzi-video-home-view.png"
                   width="500px" 
                />
              </figure>
            </article>
            </div>
          </section>

          <section className="events" id="eventos">
            <div className="container">

              <h2>Comparto lo que aprendo y acciono</h2>

              <article className="event">

                <figure className="event-image-container">
                  <img
                   className="event-image"
                   src="https://www.enmicocinahoy.cl/wp-content/uploads/2013/03/donas-caseras-5-1024x666.jpg" 
                   alt="Imagen Platzi Conf"
                   width="500px" height="300px"
                  />
                </figure>

                <figcaption className="event-text-container">
                  <h3 className="event-title">Gestionando errores en mi calculadona</h3>
                  <p className="event-description">El dia de hoy estoy pensando que me parece fascinante como algo tan simple y pequeño que me propuse como proyecto personal: la calculadona me ha dado tantos obstaculos y me ha hecho ver mi desconocimiento mientras lo programo...</p>

                <a 
                  className="event-link"
                  href="https://www.linkedin.com/pulse/dia-77-gestionando-errores-en-mi-calculadona-daniel-p%C3%A1ez-soto/"
                  target="_blank"
                >
                Leer completo
                </a>
                </figcaption>
              </article>

              <article className="event">

                <figure className="event-image-container">
                  <img
                   className="event-image"
                   src="https://myventurepad.com/wp-content/uploads/2017/05/storage.jpg" 
                   alt="Imagen Platzi Conf"
                   width="500px" height="300px"
                  />
                </figure>

                <figcaption className="event-text-container">
                  <h3 className="event-title">¿Cómo guardar los datos de mi aplicación web en memoria local?</h3>
                  <p className="event-description">Abre una nueva pestaña ahora mismo y entra a twitter o facebook, la red social que tú utilices y respondeme algo<br /> 

            ¿Entro de inmediato en tu cuenta personal y tardó muy poco en abrir?, ¿Verdad?<br />

            Si fue asi es porque están usando memoria caché... </p>

                <a 
                  className="event-link"
                  href="https://www.linkedin.com/in/heysoypaez/"
                  target="_blank"
                >
                Leer completo
                </a>
                </figcaption>
              </article>
            </div>
          </section>

          <section id="services" className="services">
            <div className="container" >
            <h2 className="services-title">Mis Servicios para ti, Quiero ayudarte, asi puedo hacerlo</h2>


            <article className="service">

              <div className="service-text">
                <h3 className="service-title">Full-time React Development</h3>

                <h6 className="service-course">React / HTML5 / CSS3 | SASS / ES7 / APIs </h6>

          

          

                <p  className="service-description">
                  Hagamos que algo suceda:
                  <ul>
                    <li>Desarrollo basado en GIT</li>
                    <li>Objetivos primero que horarios</li>
                    <li>Mejora constante expresada en el valor que aporto</li>
                  </ul>
                </p>

              </div>
              <figure className="service-image-container">

                <img className="service-image" 
                   src="../images/platzi-video-react-native.png"
                   width="500px" 
                />
              </figure>
            </article>

            <article className="service">

              <div className="service-text">
                <h3 className="service-title">Part-time Frontend Development</h3>

                <h6 className="service-course">React / HTML5 / CSS3 | SASS / ES7 / APIs </h6>

            

                  <p  className="service-description">
                  Hagamos que algo suceda:
                  <ul>
                    <li>Desarrollo basado en GIT</li>
                    <li>Objetivos primero que horarios</li>
                    <li>Mejora constante expresada en el valor que aporto</li>
                  </ul>
                </p>

              </div>
              <figure className="service-image-container">

                <img className="service-image" 
                   src="../images/platzi-video-react-native.png"
                   width="500px" 
                />
              </figure>
            </article>

            <article className="service">

              <div className="service-text">
                <h3 className="service-title">Development 4 Project</h3>

                <h6 className="service-course">React / HTML5 / CSS3 | SASS / ES7 / APIs </h6>

            

                  <p  className="service-description">
                  Hagamos que algo suceda:
                  <ul>
                    <li>Desarrollo basado en GIT</li>
                    <li>Objetivos primero que horarios</li>
                    <li>Mejora constante expresada en el valor que aporto</li>
                  </ul>
                </p>

              </div>
              <figure className="service-image-container">

                <img className="service-image" 
                   src="../images/platzi-video-react-native.png"
                   width="500px" 
                />
              </figure>
            </article>
            </div>
          </section>


          <section className="contact" id="contacto">
            <div className="container">
              <form className="contact-form">

                <h2>¿Creamos algo juntos?</h2>

                <a className="contactForm-submit" href="mailto:danielpaezsw66@gmail.com?Subject=Hola%20Daniel" target="_blank">
                Enviar un correo
                </a>
              </form>

              <section className="social">

                <a href="https://twitter.com/heysoypaez" className="social-link twitter"></a>
                <a href="https://github.com/heysoypaez/" className="social-link github"></a>
                <a href="https://www.linkedin.com/in/heysoypaez/" className="social-link linkedin"></a>
                <p>No me sigas, compartamos</p>
              </section>
            </div>
          </section>

          <footer className="footer">
            <div className="container">

              <section>
                <p>Powered by Platzi Courses
                  <img src="../images/platzi.png" alt="platzi logo" className="logo" />
                </p>
              </section>

              <section>
                <p>
                  <a href="https://github.com/heysoypaez/heysoypaez-website">Web en mejora constante :)</a>
                </p>
              </section>
            </div>
          </footer>
    </div>
  );
}

export default HomePage;
