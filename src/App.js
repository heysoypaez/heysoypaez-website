import React from 'react';

import Home from "./pages/Home.js"
import Blog from "./pages/Blog.js"

import Layout from "./components/Layout.js"

import {BrowserRouter, Switch, Route} from "react-router-dom"

import "./App.css"

function App(props) {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </Layout>
      </Switch>
    </BrowserRouter>
  )


}

export default App;
