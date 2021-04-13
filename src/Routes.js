import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import SearchResultsPage from "./Pages/SearchResultsPage";
import BusinessProfilePage from "./Pages/BusinessProfilePage";



class Routes extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/businesses" component={SearchResultsPage} />
        <Route path="/businessProfile" component={BusinessProfilePage} />

      </main>
    );
  }
}

export default Routes;
