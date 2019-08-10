import React from "react";

import BlogPostLink from "../components/BlogPostLink.js"
import data from "../data.json";
import "./styles/Blog.css";

function BlogPage(argument) {
	// body...

	return(
	   <section className="BlogPage">

	   		<h1>Un blog para sumar</h1>
		     
		     <BlogPostLink 
		     	url="/blog/como-empezar-a-programar"
		     	title="Cómo empezar en la programación y cómo la descubrí yo"
		     />

		     <BlogPostLink 
		     	url="/blog/como-empezar-a-programar"
		     	title="Cómo empezar en la programación y cómo la descubrí yo"
		     />

		     <BlogPostLink 
		     	url="/blog/como-empezar-a-programar"
		     	title="Cómo empezar en la programación y cómo la descubrí yo"
		     />	



	   </section>
	 )
}

export default BlogPage;