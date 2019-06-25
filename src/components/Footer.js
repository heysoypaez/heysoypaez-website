
import React from "react";
import "./styles/Footer.css";
import platziLogo from "../images/platzi.png"

function Footer(props) {
	
	return(
          <footer className="footer">
            <div className="container">

              <section>
                <p>Powered by Platzi Courses
                  <img src={platziLogo} alt="platzi logo" className="logo" />
                </p>
              </section>

              <section>
                <p>
                  <a href="https://github.com/heysoypaez/heysoypaez-website">Web en mejora constante :)</a>
                </p>
              </section>
            </div>
          </footer>
	)
}

export default Footer;


