import React, {Component} from "react";
import { Route } from "react-router-dom";
import Home from "./Home";

class Routes extends Component {

  render() {
    return (
  <main>
  <Route exact path="/" component={Home} />;
  </main>
  );
}
}

export default Routes;
