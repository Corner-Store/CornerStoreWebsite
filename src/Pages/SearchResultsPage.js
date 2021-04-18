import React, { Component } from "react";
import DisplayBusinesses from "../Components/DisplayBusinesses";
import "../layoutMain.css";

//Description: The search results page displays the businesses from the home page and has
//a search engine and the map of the business locations.

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Retrieve data (if it exists) passed from home page and set to searchResults
      searchResults: this.props.location.state?.passResults,
    };
  }

  render() {
    const searchResult = (
      <React.Fragment>
        {/* // Pass search results for businesses to display */}
        <DisplayBusinesses results={this.state.searchResults} />
      </React.Fragment>
    );

    const noResult = <div className="container">No Results Found</div>;

    return (
      <div>
        <span />
        {/* Check if there is data available to display, if not, show no results */}
        {this.state.searchResults ? searchResult : noResult}
      </div>
    );
  }
}
export default SearchResultsPage;
