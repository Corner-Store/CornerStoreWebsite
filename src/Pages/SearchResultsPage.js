import React, { Component } from "react";
import HeaderSearch from "../Components/HeaderSearch";
import DisplayBusinesses from "../Components/DisplayBusinesses";
import "../layoutMain.css";
import SearchBusiness from "../Components/SearchBusinesses";

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.location.state.data,
    };
    this.handleResults = this.handleResults.bind(this);
  }
  handleResults(results) {
    console.log(this.state.results);
    if (this.state.results.length > 0) {
      this.setState({ results: results });
    }
  }
  render() {
    return (
      <div>
        <HeaderSearch handleResults={this.handleResults} />
        <span />
        {this.state.results.length > 0 ? (
          <DisplayBusinesses results={this.state.results} />
        ) : (
          <div className="container">No Results Found</div>
        )}
      </div>
    );
  }
}
export default SearchResultsPage;
