
import React from "react";
import "./styles/LandingForRecruiters.css";

function LandingForRecruiters(props) {
	
	const {
		phone,
		address,
		email

	} = props;

	return(
		<section className="LandingForRecruiters">

				<header className="LandingForRecruiters__header">
					<figure>
						<h1>Daniel Páez</h1>
					</figure>
					<a href={phone}> {phone} </a>
					<a href={address}> {address} </a>
					<a href={email}> {email} </a>
				</header>

				<main>
				
					<section class="mini-landing">

						<section>
							<h1>Titular relevante para ti</h1>
							<ul>
								<li>lorem ipsum factom lorem ipsum factom lorem ipsum factom</li>
								<li>lorem ipsum factom lorem ipsum factom lorem ipsum factom</li>
								<li>lorem ipsum factom lorem ipsum factom lorem ipsum factom</li>
								<li>lorem ipsum factom lorem ipsum factom lorem ipsum factom</li>
							</ul>
						</section>

						<form>
								<h1>Titular relevante para ti</h1>
							<label>Tu nombre</label>
							<input type="text" name="" />

							<label>Tu telefono</label>
							<input type="text" name=""  />

							<button>Enviar</button>
							
						</form>
					</section>

					<section class="landing">

						<section class="landing__customer-problem">
							<h1>¿Te Preocupa Este Problema?</h1>
							
							<article class="customer-problem__exageration-item">
								<img src="https://transversalconsultores.cl/wp-content/uploads/group.svg" width="70" height="70" />
								<h3>Agitando problema</h3>
								
								<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
							</article>

							<article class="customer-problem__exageration-item">
								<img src="https://transversalconsultores.cl/wp-content/uploads/group.svg" width="70" height="70" />
								<h3>Agitando problema</h3>
								
								<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
							</article>

							<article class="customer-problem__exageration-item">
								<img src="https://transversalconsultores.cl/wp-content/uploads/group.svg" width="70" height="70" />
								<h3>Agitando problema</h3>
								
								<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
							</article>
						</section>

						<section class="landing__solution-story">

							<iframe width="560" height="315" src="https://www.youtube.com/embed/jNYg6NHCz2Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							
							<section class="landing__solution-story__text-description">

								<h1>Titulo solución</h1>
								<p>
									Transversal Consultores es una empresa preocupada desde el primer día por la correcta organización del curso. En cuanto a los participantes, quedaron muy motivados y satisfechos con la modalidad del curso de atención al cliente. Fue una capacitación diferente al resto de las que habíamos realizado con otras consultoras; por todo lo anterior se cumplieron los objetivos.
								</p>
								
								<section class="landing__customer-problem">
									<h1>Fusionamos coaching, stand Up para entregar transformación con entretenimiento</h1>
									
									<article class="landing__solution-story__benefit-item">
										<img src="https://transversalconsultores.cl/wp-content/uploads/group.svg" width="70" height="70" />
										<h3>Beneficio diferenciador</h3>
									</article>

									<article class="landing__solution-story__benefit-item">
										<img src="https://transversalconsultores.cl/wp-content/uploads/group.svg" width="70" height="70" />
										<h3>Beneficio diferenciador</h3>
										
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
									</article>

									<article class="landing__solution-story__benefit-item">
										<img src="https://transversalconsultores.cl/wp-content/uploads/group.svg" width="70" height="70" />
										<h3>Beneficio diferenciador</h3>
										
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
									</article>
								</section>
							</section>

							<section class="landing__cta-inline">

								<a href="landing__conversion-action"> Conversa con Nosotros </a>
							</section>
						</section>

						<section class="landing__testimonies">

							<h1>Imperfecto pero imparable, ¿Qué dicen de mi?</h1>
								
							<iframe class="landing__testimonies__video-principal" 
							width="560" height="315" src="https://www.youtube.com/embed/jNYg6NHCz2Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

							<section class="landing__testimonies__container">

								<article class="landing_testimonies_testimony">

										<figure>

											<img 
												src="https://impulsados.cl/wp-content/uploads/2018/02/fabian-palacios-redondeado-e1520005839467.png" 
												alt="fabian palacios varas impulsados" />

											<figcaption>

												<h3>Fabián Palacios</h3>
												<h4>Impulsados | Fundador</h4>
												
												<p>
												Con mucho  potencial  y muy autodidacta, pero con pequeños detalles que hacen que llegue a 8/10
												
												<br />
												Esos detalles pueden ser:
												</p>
												<ul>
													<li>Incumplimiento de expectativas en cuanto a plazos de entrega.</li>
													<li>Detalles de proyectos con 10 items, donde pueden faltar 1 o 2</li>
												</ul>
												
											</figcaption>
										</figure>
								</article>

								<article class="landing_testimonies_testimony">

										<figure>

											<img src="https://transversalconsultores.cl/wp-content/uploads/IMG_4908-150x150.jpg" />

											<figcaption>

												<h3>Andrea Muñoz</h3>
												<h4>GESVIAL | Jefa de operaciones</h4>
												
												<p>Transversal Consultores es una empresa preocupada desde el primer día por la correcta organización del curso. En cuanto a los participantes, quedaron muy motivados y satisfechos con la modalidad del curso de atención al cliente. Fue una capacitación diferente al resto de las que habíamos realizado con otras consultoras; por todo lo anterior se cumplieron los objetivos.</p>
											</figcaption>
										</figure>
								</article>


								<article class="landing_testimonies_testimony">

										<figure>

											<img src="https://transversalconsultores.cl/wp-content/uploads/IMG_4908-150x150.jpg" />

											<figcaption>

												<h3>Andrea Muñoz</h3>
												<h4>GESVIAL | Jefa de operaciones</h4>
												
												<p>Transversal Consultores es una empresa preocupada desde el primer día por la correcta organización del curso. En cuanto a los participantes, quedaron muy motivados y satisfechos con la modalidad del curso de atención al cliente. Fue una capacitación diferente al resto de las que habíamos realizado con otras consultoras; por todo lo anterior se cumplieron los objetivos.</p>
											</figcaption>
										</figure>
								</article>
							</section>


							<section class="landing__cta-inline">

								<a href="landing__conversion-action"> Conversa con Nosotros </a>
							</section>
						</section>
							
						<section class="landing__about-us">
								
							<h1>Estoy comprometido contigo</h1>

							<article class="landing__about-us__team-member">
							 		<figure>
							 							<img src="https://transversalconsultores.cl/wp-content/uploads/FullSizeRender-1-150x150.jpg" />

										<figcaption>

											<h3>Andrea Muñoz</h3>
											<h4>GESVIAL | Jefa de operaciones</h4>
											
											<p>Transversal Consultores es una empresa preocupada desde el primer día por la correcta organización del curso. En cuanto a los participantes, quedaron muy motivados y satisfechos con la modalidad del curso de atención al cliente. Fue una capacitación diferente al resto de las que habíamos realizado con otras consultoras; por todo lo anterior se cumplieron los objetivos.</p>
										</figcaption>
									</figure>
							</article>

							<article class="landing__about-us__team-member">
							 		<figure>
							 								<img src="https://transversalconsultores.cl/wp-content/uploads/FullSizeRender-150x150.jpg" />



										<figcaption>

											<h3>Andrea Muñoz</h3>
											<h4>GESVIAL | Jefa de operaciones</h4>
											
											<p>Transversal Consultores es una empresa preocupada desde el primer día por la correcta organización del curso. En cuanto a los participantes, quedaron muy motivados y satisfechos con la modalidad del curso de atención al cliente. Fue una capacitación diferente al resto de las que habíamos realizado con otras consultoras; por todo lo anterior se cumplieron los objetivos.</p>
										</figcaption>
									</figure>
							</article>
						</section>

						<section class="landing__sales-offer">
								

							<h1>Exactamente esto es mi propuesta para ti</h1>

							<ul>
								<li>Te entregamos una muestra de nuestro servicio GRATIS</li>
								<li>Contamos con certificación SENCE</li>
								<li>Te entregamos capacitaciónes entretenidas y transformadoras</li>
								<li>Adaptamos nuestro servicio a la identidad de su organización</li>
								<li>Generamos cambios medibles en los KPI de su organización</li>
								<li>Si nuestra calificación es menor de 6.0 devolvemos el 100% del dinero</li>
								<li>Te entregamos una muestra de nuestro servicio GRATIS</li>
								<li>Te entregamos capacitaciónes entretenidas y transformadoras</li>
								<li>Generamos cambios medibles en los KPI de su organización</li>
								<li>Si nuestra calificación es menor de 6.0 devolvemos el 100% del dinero</li>
							</ul>

							<section class="landing__cta-inline">

								<a href="landing__conversion-action"> Conversa con Nosotros </a>
							</section>
						</section>


						<section class="landing__call-to-action">
							
							<h2>¿Qué deberías hacer ahora?</h2>
							<p>Transversal Consultores es una empresa preocupada desde el primer día por la correcta organización del curso. En cuanto a los participantes, quedaron muy motivados y satisfechos con la modalidad del curso de atención al cliente. Fue una capacitación diferente al resto de las que habíamos realizado con otras consultoras; por todo lo anterior se cumplieron los objetivos.
							</p>

							<section class="landing__cta-inline">
								<a href="landing__conversion-action"> Conversa con Nosotros </a>
							</section>
						</section>

					</section>
				</main>

		
			<figure class="whatsapp-button">
					
				<section class="whatsapp-button__message">

					<img src="https://transversalconsultores.cl/wp-content/uploads/FullSizeRender-150x150.jpg" />
					<img class="logo" src="public/img/imagotipo-recortado-transversal-consultores.png" />
					<h3>Soy Maria Jose , ¿En que te ayudo?</h3>	
				</section>

				<section class="whatsapp-button__icon">
					<img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c543.png" width="100" />

					<figcaption>Escribenos</figcaption>
				</section>
			</figure>

		</section>
	)
}

export default LandingForRecruiters;


