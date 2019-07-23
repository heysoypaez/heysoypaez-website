
import React from "react";
import {Helmet} from "react-helmet"
import "./styles/BlogPost.css"
import {Link} from "react-router-dom"


function BlogPost(props) {
	
	return(
		<section className="BlogPost-article">

     <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>


            <div class="Discussion-content">
				<h1>La mejor forma de empezar es haciendolo</h1>
				            <p>Hoy en día hay tantas cosas que aprender en CSS que si vas iniciando en este camino muy probablemente no sepas por donde comenzar. A continuación les mostraré una serie de consejos que he aprendido a lo largo de mi carrera como Frontend.</p>
				<h2>1. Hacer CSS no es tan fácil como parece</h2>
				<p>Pareciera que sólo son simples reglas que seleccionan un elemento y lo modifican con una serie de propiedades y valores.<br />
				La realidad es que <strong>hacer buen CSS consiste también en tener una buena arquitectura</strong>, pues si tienes un código desordenado y poco eficientemente será difícil de mantener a futuro.</p>
				<p>Algo que puedes hacer para evitar que entre más crezca un proyecto todo se vuelva un desastre, es <strong>aprender a leer y entender el código antes de empezar a escribirlo</strong>. Cada dispositivo es distinto y cada día sale algo nuevo, por eso tienes la obligación de <strong>mantenerte al día e implementar las mejores prácticas en tu código</strong>.</p>
				<p>Por otro lado, la principal característica de un <a href="https://platzi.com/arquitecto/" rel="nofollow" target="_blank">Arquitecto Frontend</a> es <strong>escribir código mantenible</strong>. Para eso debes saber cómo funciona cada parte de tu código y aplicar una buena arquitectura CSS. <strong>Aprende sobre cada arquitectura, investiga sus pros y contras y mantente al día con las tendencias.</strong></p>

				<h2>2. Elige tus herramientas de trabajo</h2>
				<p>El editor de código es la herramienta más importante de un <a href="https://platzi.com/arquitecto/" rel="nofollow" target="_blank">Arquitecto Frontend</a>. No importa si utilizas Atom o Sublime Text, lo importante es que sepas <strong>adaptar esta herramienta a tus actividades del día a día para obtener velocidad en tu trabajo y cero interrupciones</strong>.</p>
				<p>La <a href="https://platzi.com/cursos/terminal/" rel="nofollow" target="_blank">terminal</a> es otra herramienta importante, pues tendrás que hacer build de tu aplicación, compilar, actualizar el navegador sin refrescar, entre otras tareas.</p>
				<p>Así que lo ideal es <strong>buscar el editor de texto que mejor se adapte a tus necesidades y aprender <a href="https://platzi.com/cursos/terminal/" rel="nofollow" target="_blank">CLI</a></strong> tan pronto como puedas. Puedes empezar con el curso de <a href="https://platzi.com/cursos/terminal/" rel="nofollow" target="_blank">Introducción a Terminal y línea de comandos</a> que Platzi te ofrece.</p>
				<p>Por otro lado, el navegador nos sirve como lienzo para plasmar nuestras obras de arte en él. Pero a su vez, también funciona para depurar nuestro código, aprender los secretos oscuros de otros sitios web, entre otras cosas. Cada navegar es distinto, debemos <strong>aprender a conocer y querer a cada uno de ellos</strong>, inclusive si es Internet Explorer. Es importante que cada cosa que hagas la pruebes en distintos navegadores, por eso mi recomendación es que instales tantos como puedas.</p>

				<h2>3. Comparte, participa y aprende</h2>
				<p><strong>Ser parte de una comunidad, compartir tu conocimiento y aprender de los desarrolladores que te rodean</strong> es de las cosas más valiosas que debes tener. Platzi te ayudará en este punto. Aquí podrás crear tutoriales, preguntar tus dudas y compartir cada cosa que aprendes con el resto de la comunidad Platzi. Aún y el aporte más mínimo que puedas agregar hará la diferencia. Además, Platzi te ofrece una carrera completa de <a href="https://platzi.com/arquitecto/" rel="nofollow" target="_blank">Arquitecto Frontend</a> que te ayudará a estar al día en las tendencias tecnológicas de esta área.</p>
				<p>Para mi el CSS es una tecnología increíble y disfruto cada momento en que <em>codeo</em> con este lenguaje. Si tienes alguna duda relacionada con este tema, puedes dejarla en tus comentarios y con gusto la responderé. Y si eres Arquitecto Frontend, cuéntame que otro consejo le darías a la comunidad que está a punto de empezar por este camino. ✌🏼</p></div>

					<p>Espero que te sea útil, si lo es, toma acción, ¿Qué harás al respecto hoy? ¿Cómo puedes utilizarlo? <Link to="/contacto">si quieres conversamos al respecto</Link> </p>

				<form>
					<hr />

						<h2>Comparte: cuando 1 enseña 2 aprendes</h2>
						<button>Linkedin</button>
						<button>Whatsapp</button>
						<button>Email</button>
						<button>Twitter</button>

						<h2>¿Qué opinas tú?</h2>
						<textarea></textarea>
				</form>
		</section>
	)
}

export default BlogPost;


