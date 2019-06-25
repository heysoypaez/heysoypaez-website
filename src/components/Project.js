
import React from "react";
import "./styles/Project.css";

function Project(props) {
	
	return(
   <article className="project">

       <div className="project-text">
        <h3 className="project-title">{props.title}</h3>

        <h6 className="project-course">{props.technology}</h6>

          <p className="project-date">
            <small> <strong>Fecha:</strong>{props.date}</small>
          </p>

          <p className="project-link"> 
            <strong>Puedes verlo en:</strong> <a href={props.link} > Github {props.title}</a>
          </p>

          <p  className="project-description">
          	{props.description}
          </p>

        </div>
        <figure className="project-image-container">

          <img className="project-image" alt="Project"
             src={props.image}
             width="500px" 
          />
        </figure>
   </article>
	)
}

export default Project;


