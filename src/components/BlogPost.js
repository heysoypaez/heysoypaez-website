
import React from "react";
import {Helmet} from "react-helmet"
import "./styles/BlogPost.css"
import {Link} from "react-router-dom"


function BlogPost(props) {
	
	return(
		<section className="BlogPost-article">

     <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="¿Cómo empezar a programar? La mejor forma de empezar es practicando con código real." />
          <meta name="keywords" content="Como empezar a programar, programacion, desarrollo web, aprender a programar, empezar a programar" />
          <meta name="author" content="Daniel Páez" />
          <title>Como empezar a programar</title>
      </Helmet>

      	<h1>¿Cómo empezar a programar?</h1>
				<h2>La mejor forma de empezar es practicando con código real.</h2>
				
					<p>No, no voy a venderte humo, recomendarte cursos (aunque si lo hiciera te recomendaria <a href="https://platzi.com">platzi</a>), no voy a decirte en este articulo que hacer paso a paso, pero te puedo decir en mi experiencia que NO hacer.</p>

					<h2>No descargues esa App móvil para jugar a programar.</h2>

					<p>En mi humilde opinión, perdi tiempo cuando descargue, use y "avance" en aplicaciones como soloLearn o similares, creo que el enfoque es equivocado.</p>

					<h3>¿Por qué te lo digo?</h3>

					<p>Piensa por un momento, ¿Realmente responder un Quiz sobre como se declara una variable en javascript es lo que necesitas hacer para desarrollar esa App con la que sueñas?</p>

					<p>Lo dudo.</p>

					<p>Es mejor empezar por ahí que no empezar, pero si quieres crecer exponencialmente, te invito a no fallar tu enfoque como yo falle.</p>

					<h2>No busques más articulos como este o más cursos para aprender a programar</h2>

					<p>Cualquier habilidad la aprendes con un 20% de conceptos claves y un 80% de práctica bestial.</p>

					<h2>Mi recomendación no solicitada</h2>

					<p>¿Mi recomendación? Ejecuta código con ayuda de otros con experiencia real en la industria y despues trata de hacerlo tú sólo, puedes usar videotutoriales de youtube, puedes leer documentación oficial e ir probando cosas, puedes usar la mejor inversión en educación que hice el 2018, Platzi</p>

					<p>Pero sea como sea, <strong>lo realmente importante en que te enfretes cuanto antes a las mismas pantallas a las que se enfreta el ingeniero del software.</strong></p>

					<p><strong>Nota:</strong> y si, a mi también me da pereza resolver problemas por mi mismo, pensar en la solución por mi mismo pero sé que cuando lo hago avanzo más que cuando veo tres videotutoriales sin pensar, es la única manera.</p>

					<p><i>El aprendizaje real es divertidamente jodido, amigo mio.</i></p>

					<p>Espero que te sea útil, si lo es, <strong>toma acción</strong>, ¿Qué harás al respecto hoy? <strong>Sé específico, por favor,</strong> ¿Cómo puedes utilizar esto que leíste? <Link to="/contacto">si quieres conversamos al respecto.</Link> </p>


				<form>
					<hr />

						<h2>Comparte: Según la leyenda cuando 1 enseña 2 aprenden...</h2>
						<button>Linkedin</button>
						<button>Whatsapp</button>
						<button>Email</button>
						<button>Twitter</button>

						<h2>¿Qué opinas tú? ¡No te lo guardes amigo mío!</h2>
						<textarea></textarea>
				</form>
		</section>
	)
}

export default BlogPost;


