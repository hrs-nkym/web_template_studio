import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Blank from "./components/Blank";
import List from "./components/List";
import Grid4 from "./components/Grid4";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          < Redirect exact path = "/" to = "/Blank" />
          < Route path = "/Blank" component = { Blank } />
          < Route path = "/List" component = { List } />
          < Route path = "/Grid4" component = { Grid4 } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
