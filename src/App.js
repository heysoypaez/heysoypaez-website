import React from 'react';

import Home from "./pages/Home.js"
import Blog from "./pages/Blog.js"

import Layout from "./components/Layout.js"

import {BrowserRouter, Switch, Route} from "react-router-dom"
import BlogPost from "./components/BlogPost.js"

import Contact from "./pages/Contact.js"
import Linkedin from "./pages/Linkedin.js"

import LandingForRecruiters from "./landings/LandingForRecruitersContainer.js";

import "./App.css"

function App(props) {

  return (
    <BrowserRouter>
      <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/como-empezar-a-programar" component={BlogPost} />
        <Route exact path="/contacto" component={Contact} />

        <Route exact path="/reclutador" component={LandingForRecruiters} />
        <Route exact path="/linkedin" component={Linkedin} />


      </Layout>
      </Switch>
    </BrowserRouter>
  )


}

export default App;
