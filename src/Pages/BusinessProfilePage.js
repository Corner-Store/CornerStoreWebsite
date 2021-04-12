import React, { Component } from "react";
import HeaderSearch from "../Components/HeaderSearch";
import DisplayBusinessProfile from "../Components/DisplayBusinessProfile";
import "../layoutMain.css";

//Description: The search results page displays the businesses from the home page and has
//a search engine and the map of the business locations.

class BusinessProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Retrieve data passed from home page and set to searchResults
      businessChoice: this.props.location.state.businessProfileResult,
    };
    this.handleResults = this.handleResults.bind(this);
  }
  //Redirect page to /businesses with the search results
  handleResults(newResults) {
    this.props.history.push({
      pathname: "/businesses",
      // Pass results data to the search results page
      state: { passResults: newResults },
    });
  }

  render() {
    return (
      <div>
        <span />
        <HeaderSearch handleResults={this.handleResults} />
        {/* Check if there is data available to display, if not, show no results */}
        {this.state.businessChoice.length > 0 ? (
          <DisplayBusinessProfile business={this.state.businessChoice} />
        ) : (
          <div className="container">No Results Found</div>
        )}
      </div>
    );
  }
}
export default BusinessProfilePage;
