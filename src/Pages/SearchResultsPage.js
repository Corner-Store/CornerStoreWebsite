import React, { Component } from "react";
import HeaderSearch from "../Components/HeaderSearch";
import DisplayBusinesses from "../Components/DisplayBusinesses";
import "../layoutMain.css";

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.location.state.data,
    };
  }
  render() {
    return (
      <div>
        <HeaderSearch />
        <span />
        {this.state.results !== null ? (
          <DisplayBusinesses results={this.state.results} />
        ) : (
          <div>No Results Found</div>
        )}
      </div>
    );
  }
}
export default SearchResultsPage;
