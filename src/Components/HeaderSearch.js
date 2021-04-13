import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBusiness from "../Components/SearchBusinesses";

class HeaderSearch extends Component {
  render() {
    return (
      <header id="home">
        <div className="navbarsearch">
          <Link to="/">Home</Link>
          <div className="navbarsearch-centered">
            <a><SearchBusiness handleResults={this.props.handleResults} /></a>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderSearch;
