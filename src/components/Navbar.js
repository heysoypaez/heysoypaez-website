
import React, {useState} from "react";

import "./styles/Navbar.css";

import {Link} from "react-router-dom"

import iconMenu from "../public/icon-menu.svg";


const IconMenu = (props) => {


  return(

     <figure onClick={props.onClick}>
       <img src={iconMenu} alt="Icon Menu" />
     </figure>
  )
}

function Navbar(props) {
	
  const [visible, setVisible] = useState(false)

  if(!visible) {
    return (
      <header className="Navbar hidden">

      <IconMenu onClick={() => setVisible(!visible)} />

      </header>
    )
  }

	return(

	   <header className="Navbar visible">

        <div className="container">

           <IconMenu onClick={() => setVisible(!visible)} />

            <section className="logo">
              <Link to="/">
                <h1>Daniel Páez</h1>
              </Link>
            </section>

            <nav className="menu">
              <ul>
            
                <li>
                  <a className="link" href="#portafolio">Portafolio</a>
                </li>

                <li>
                  <a className="link" href="https://www.linkedin.com/in/heysoypaez/detail/recent-activity/posts/" target="_blank"  rel="noopener noreferrer">Blog</a>
                </li>

                <li>
                  <a className="link" href="#contacto">Trabajemos Juntos</a>
                </li>
              </ul>
            </nav>
            </div>
     </header>
	)


}

export default Navbar;


