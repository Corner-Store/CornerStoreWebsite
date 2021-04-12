import React, { Component } from "react";
import HeaderSearch from "../Components/HeaderSearch";
import DisplayBusinesses from "../Components/DisplayBusinesses";
import "../layoutMain.css";
import DisplayBusinessProfile from "../Components/DisplayBusinessProfile";

//Description: The search results page displays the businesses from the home page and has
//a search engine and the map of the business locations.

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Retrieve data passed from home page and set to searchResults
      searchResults: this.props.location.state.passResults,
    };
    this.handleResults = this.handleResults.bind(this);
  }

  //Sets the new search results to be displayed later and checks if the new results exists
  handleResults(newResults) {
    if (newResults.length > 0) {
      this.setState({ searchResults: newResults });
    }
  }

  //Redirect page to /businessProfile with the business shop name
  handleResults(businessProfileChoice) {
    this.props.history.push({
      pathname: "/businessProfile",
      // Pass results data to the search results page
      state: { businessProfileResult: businessProfileChoice },
    });
  }

  render() {

    const searchResult = (
      <React.Fragment>
        // Pass search results for businesses to display
        <DisplayBusinesses results={this.state.searchResults} />
        {this.state.businessProfileResult > 0 ? < DisplayBusinessProfile result = {this.state.businessProfileResult}/> : null}
      </React.Fragment>
    )

    const noResult = <div className="container">No Results Found</div>

    return (
      <div>
        {/* Add home button and search bar */}
        <HeaderSearch handleResults={this.handleResults} />
        <span />
        {/* Check if there is data available to display, if not, show no results */}
        {this.state.searchResults.length > 0 ? searchResult : noResult}
      </div>
    );
  }
}
export default SearchResultsPage;
