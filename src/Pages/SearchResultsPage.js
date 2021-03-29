import React, { Component } from "react";
import SearchBusiness from "../Components/SearchBusinesses";
import DisplayBusinesses from "../Components/DisplayBusinesses";
import "../layoutMain.css";

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.location.state.data,
    };
    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(results) {
    this.setState({ results: results });
  }
  render() {
    return (
      <div>
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
