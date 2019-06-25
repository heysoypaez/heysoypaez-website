import React, {Fragment} from 'react';

import "./Home.css";

import Hero from "../components/Hero.js";
import Portfolio from "../components/Portfolio.js";
import BlogPosts from "../components/BlogPosts.js"
import Services from "../components/Services.js"
import Contact from "../components/Contact.js"
import SpeechForAudience from "../components/SpeechForAudience.js"


function HomePage() {

  return (
    <Fragment>

          <Hero />

          <SpeechForAudience />

          <Portfolio />

          <BlogPosts />

          <Services />

          <Contact />

    </Fragment>
  );
}

export default HomePage;
