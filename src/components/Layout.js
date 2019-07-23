
import React from "react";
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"

import "./styles/Layout.css";

function Layout(props) {
	
	return(
		<section className="Layout">
		<Navbar />
			{props.children}
		<Footer />
		</section>
	)
}

export default Layout;


