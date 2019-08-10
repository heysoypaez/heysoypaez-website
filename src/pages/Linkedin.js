
import React from "react";
import "./styles/Linkedin.css";

function Linkedin(props) {
	
	return(
		<section className="Linkedin">

			<div 
				className="LI-profile-badge"  
				data-version="v1" 
				data-size="large" 
				data-locale="en_US" 
				data-type="horizontal" 
				data-theme="dark" 
				data-vanity="heysoypaez">
				<a 
					className="LI-simple-link" 
					href='https://cl.linkedin.com/in/heysoypaez/en?trk=profile-badge'>
					Daniel Páez Soto
				</a>
			</div>

			<div 
				className="LI-profile-badge"  
				data-version="v1" 
				data-size="medium" 
				data-locale="en_US" 
				data-type="vertical" 
				data-theme="dark" 
				data-vanity="heysoypaez" >
				<a 
					className="LI-simple-link" 
					href='https://cl.linkedin.com/in/heysoypaez/en?trk=profile-badge'>
					Daniel Páez Soto
				</a>
			</div>


			
		</section>
	)
}

export default Linkedin;


