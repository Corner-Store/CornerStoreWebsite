import React, { Component } from "react";
import DisplayBusinessProfile from "../Components/DisplayBusinessProfile";
import "../layoutMain.css";

//Description: The search results page displays the businesses from the home page and has
//a search engine and the map of the business locations.

class BusinessProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Retrieve data passed (if it exists) from home page and set to searchResults
      businessChoice: this.props.location.state?.businessProfileResult,
    };
  }

  render() {
    return (
      <div>
        <span />
        {/* Check if there is data available to display, if not, show no results */}
        {this.state.businessChoice ? (
          <DisplayBusinessProfile business={this.state.businessChoice} />
        ) : (
          <div className="container">No Results Found</div>
        )}
      </div>
    );
  }
}
export default BusinessProfilePage;
