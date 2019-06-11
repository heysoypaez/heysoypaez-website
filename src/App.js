import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./pages/Home.js"
import Blog from "./pages/Blog.js"

import {BrowserRouter, Switch, Route} from "react-router-dom"

function App(props) {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  )


}

export default App;
