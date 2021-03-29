import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import SearchResultsPage from "./Pages/SearchResultsPage";

class Routes extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/businesses" component={SearchResultsPage} />
      </main>
    );
  }
}

export default Routes;
