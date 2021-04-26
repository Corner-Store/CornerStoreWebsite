import React, { Component } from "react";
import "../layoutMain.css";
import { withRouter } from "react-router-dom";

//Description: Show businesses found from database with name and location

class DisplayBusinesses extends Component {
  constructor(props) {
    super(props);
    this.redirectToBusinessProfile = this.redirectToBusinessProfile.bind(this);
  }

  //Redirect page to /businessProfile with the business shop name
  redirectToBusinessProfile(businessProfileChoice) {
    window.scrollTo(0, 0);
    this.props.history.push({
      pathname: "/businessProfile",
      // Pass results data to the search results page
      state: { businessProfileResult: businessProfileChoice },
    });
  }

  render() {
    const cardStyle = {
      cursor: "pointer",
    };

    return (
      <div id="outerDiv">
        <span />
        <div className="container" id="scrollableContent">
          <p></p>
          {/* Use data passed from search results page and display */}
          {this.props.results.map((business, index) => (
            <div
              key={index}
              onClick={() => this.redirectToBusinessProfile(business)}
            >
              <div style={cardStyle} className="businesses-container">
                <p>
                  {index + 1}. {business[0]}
                </p>
                <p>{business[1]}</p>
                <p>{business[2] !== null ? business[2] : ""}</p>
              </div>
              <span />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default withRouter(DisplayBusinesses);
