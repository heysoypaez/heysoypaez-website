
import React from "react";
import "./styles/BlogPosts.css";

function BlogPosts(props) {
	
	return(
          <section className="BlogPosts">
            <div className="container">

              <h2>Comparto lo que aprendo y acciono</h2>

              <article className="BlogPost">

                <figure className="BlogPost-image-container">
                  <img
                   className="BlogPost-image"
                   src="https://www.enmicocinahoy.cl/wp-content/uploads/2013/03/donas-caseras-5-1024x666.jpg" 
                   alt="Imagen Platzi Conf"
                   width="500px" height="300px"
                  />
                </figure>

                <figcaption className="BlogPost-text-container">
                  <h3 className="BlogPost-title">Gestionando errores en mi calculadona</h3>
                  <p className="BlogPost-description">El dia de hoy estoy pensando que me parece fascinante como algo tan simple y pequeño que me propuse como proyecto personal: la calculadona me ha dado tantos obstaculos y me ha hecho ver mi desconocimiento mientras lo programo...</p>

                <a 
                  className="BlogPost-link"
                  href="https://www.linkedin.com/pulse/dia-77-gestionando-errores-en-mi-calculadona-daniel-p%C3%A1ez-soto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Leer completo
                </a>
                </figcaption>
              </article>

              <article className="BlogPost">

                <figure className="BlogPost-image-container">
                  <img
                   className="BlogPost-image"
                   src="https://myventurepad.com/wp-content/uploads/2017/05/storage.jpg" 
                   alt="Imagen Platzi Conf"
                   width="500px" height="300px"
                  />
                </figure>

                <figcaption className="BlogPost-text-container">
                  <h3 className="BlogPost-title">¿Cómo guardar los datos de mi aplicación web en memoria local?</h3>
                  <p className="BlogPost-description">Abre una nueva pestaña ahora mismo y entra a twitter o facebook, la red social que tú utilices y respondeme algo<br /> 

                ¿Entro de inmediato en tu cuenta personal y tardó muy poco en abrir?, ¿Verdad?<br />

                Si fue asi es porque están usando memoria caché... </p>

                <a 
                  className="BlogPost-link"
                  href="https://www.linkedin.com/pulse/c%C3%B3mo-guardar-los-datos-de-mi-aplicaci%C3%B3n-web-en-local-o-p%C3%A1ez-soto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Leer completo
                </a>
                </figcaption>
              </article>
              
            </div>
          </section>
	)
}

export default BlogPosts;


