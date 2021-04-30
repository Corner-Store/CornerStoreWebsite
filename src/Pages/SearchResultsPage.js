import React, { Component } from "react";
import DisplayBusinesses from "../Components/DisplayBusinesses";
import "../layoutMain.css";

//Description: The search results page displays the businesses from the home page and has
//a search engine and the map of the business locations.

class SearchResultsPage extends Component {
  render() {
    const itemSearched = this.props.location.state?.passItemSearched;
    const locationSearched = this.props.location.state?.passLocationSearched;
    // Retrieve data (if it exists) passed from home page and set to searchResults
    const searchResults = this.props.location.state?.passResults;
    const displaySearchResult = (
      <React.Fragment>
        {/* // Pass search results for businesses to display */}
        <DisplayBusinesses results={searchResults} />
      </React.Fragment>
    );

    const noResult = <div className="container">No Results Found</div>;

    return (
      <div className="container-divide">
        <div className="info-left">
          <div className="search-display">
            {itemSearched}
            {locationSearched ? <a> in {locationSearched}</a> : null}
          </div>
          {/* Check if there is data available to display, if not, show no results */}
          {searchResults ? displaySearchResult : noResult}
        </div>
        <div className="map-right">MAP</div>
      </div>
    );
  }
}
export default SearchResultsPage;
