import React, { Component } from "react";
import "../layoutMain.css";

//Description: Show businesses found from database with name and location

class DisplayBusinesses extends Component {
  render() {
    return (
      <div>
        <span />
        <div className="container">
          {/* Use data passed from search results page and display */}
          {this.props.results.map((businesses, index) => (
            <div key={index}>
              <div className="businesses-container">
                <p>
                  {index + 1}. {businesses[0]}
                </p>
                <p>{businesses[1]}</p>
                <p>{businesses[2] !== null ? businesses[2] : ""}</p>
              </div>
              <span />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default DisplayBusinesses;
