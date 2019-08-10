
import React from "react";
import {Link} from "react-router-dom";
import "./styles/BlogPostLink.css";

function BlogPostLink(props) {
	
	return(
  	 <article className="BlogPostLink" >
  	 		<Link to={props.url}>
  	 		<h1>{props.title}</h1>
  	 		</Link>
  	 </article>
	)
}

export default BlogPostLink;


