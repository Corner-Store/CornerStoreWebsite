import React, { Component } from "react";
import SearchBusiness from "../Components/SearchBusinesses";
import DisplayBusinesses from "../Components/DisplayBusinesses";
import "../layoutMain.css";

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
    };
    this.handleResults = this.handleResults.bind(this);
  }
  componentWillReceiveProps(props) {
    if (props === undefined) {
      this.setState({ results: props.location.state.results });
    }
  }

  handleResults(results) {
    if (results != null) {
      this.setState({ results: results });
    }
  }
  render() {
    return (
      <div>
        <span />
        <SearchBusiness handleResults={this.handleResults} />
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
