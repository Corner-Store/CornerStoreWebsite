import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import DisplayBusinesses from "./Components/DisplayBusinesses";

class Routes extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/businesses" component={DisplayBusinesses} />
      </main>
    );
  }
}

export default Routes;
