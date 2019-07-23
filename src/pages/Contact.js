import React from "react";
import "./styles/Contact.css";

function Contact(props) {


 	return(
			 	   
 	   <section className="Contact">

     	<h2> Las cosas relevantes suceden cuando dos personas fantásticas conversan</h2>
     	<small>¿Conversamos?</small>

			<a href={`https://api.whatsapp.com/send?phone=${56946599356}&text=Hola%20Daniel`} target="_blank" rel="noopener noreferrer">
				<h1>whatsapp</h1>
			</a>

			<a href={`mailto:${"danielpaezsw66@gmail.com"}?Subject=Hola%20Daniel`} target="_blank" rel="noopener noreferrer">
				<h1>Correo</h1>
			</a>

 	   </section>
 	)

 } 

export default Contact;

