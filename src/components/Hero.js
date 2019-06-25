
import React from "react";
import "./styles/Hero.css";

const videoHero = "https://www.youtube-nocookie.com/embed/qAjWMJ73OL8"  

function Hero(props) {
	
	return(
      <section className="Hero">
            <div className="container">
            <h1>
              Hello, <strong>Daniel Páez</strong> acá <br />
              <strong>Ethical  Software </strong> Developer <br />
              <strong>¡React Developer!</strong>
            </h1>
            <iframe
              src={videoHero}

              title="Video de Bienvenida a Heysoypaez"
              height={400} 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            >
            </iframe> 
           </div>
      </section>

	)
}

export default Hero;


