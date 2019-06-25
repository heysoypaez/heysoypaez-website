import React, { Component, Fragment } from 'react';
import Project from "./Project.js"

import patyTimeImg from "../images/patytime-home-view.png"
import calculadonaImg from "../images/calculadona-home-view.png"
import platziVideoImg from "../images/platzi-video-home-view.png"

import "./styles/Portfolio.css"

 class Portfolio extends Component {

	render() {


		return (
			<Fragment>

			      <section className="portfolio" id="portafolio">
            <div className="container">
            <h2>Portafolio (Proyectos Destacados)</h2>

         		<Project 
         			title="Paty Time"
         			technology="React"
         			date="03/03/19"
         			link="https://github.com/heysoypaez/patytime"
         			description="Paty time! La web que estoy desarrollando actualmente para una artista, dibujante, fashion designer que de verdad creo que deberías conocer, es fantástica instagram.com/paty.time/"
         			image={patyTimeImg}
         		/>

         		<Project 
         			title="Calculadona"
         			technology="Javascript Vanilla"
         			date=" 03/03/19"
         			link="https://github.com/heysoypaez/calculadona"
         			description="Una aplicacion web que calcula los numeros relevantes para un negocio de donas y hace algo útil con eso"
         			image={calculadonaImg}
         		/>

         		<Project 
         			title="Platzi Video"
         			technology="Javascript Vanilla / SASS / APIs fetch"
         			date="03/03/19"
         			link="https://github.com/heysoypaez/platzi-video"
         			description="Aplicacion que desarrolle junto a Platzi donde aplico aprendizajes para pasar programacion de jquery a js puro, además hago llamadas GET a APIs publicas externas"
         			image={platziVideoImg}
         		/>

          
            </div>
          </section>

			</Fragment>
		);
	}
}

export default Portfolio;
