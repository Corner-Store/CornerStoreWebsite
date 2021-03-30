import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderSearch extends Component {
  render() {
    return (
      <header id="home">
        <div className="navbarsearch">
          <Link to="/">Home</Link>
        </div>
      </header>
    );
  }
}

export default HeaderSearch;
