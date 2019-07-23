import React from "react";
import BlogPosts from "../components/BlogPosts.js"

import {Link} from "react-router-dom";

function BlogPage(argument) {
	// body...
	return(
	      <section>
	     
	   
	      	 
	      	 <article className="BlogPost" >
	      	 		<Link to="/blog/como-empezar-a-programar">
	      	 		<h1>Cómo empezar en la programación y cómo la descubrí yo</h1>
	      	 		</Link>
	      	 </article>

	      	  <article className="BlogPost" >
	      	 		<Link to="/blog/como-empezar-a-programar">
	      	 		<h1>Cómo empezar en la programación y cómo la descubrí yo</h1>
	      	 		</Link>
	      	 </article>

	      </section>
	      
	 )
}

export default BlogPage;