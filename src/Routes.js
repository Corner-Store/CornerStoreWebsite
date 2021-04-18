import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchResultsPage from "./Pages/SearchResultsPage";
import BusinessProfilePage from "./Pages/BusinessProfilePage";

class Routes extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={HomePage} />
        <Route path="/businesses" component={SearchResultsPage} />
        <Route path="/businessProfile" component={BusinessProfilePage} />
      </main>
    );
  }
}

export default Routes;
