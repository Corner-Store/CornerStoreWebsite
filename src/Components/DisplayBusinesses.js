import React, { Component } from "react";
import "../layoutMain.css";

class DisplayBusinesses extends Component {
  render() {
    return (
      <div>
        <span />
        <div className="container">
          {this.props.location.state.businesses.map((data, index) => (
            <div>
              <div key={index} className="businesses-container">
                <p>{data[0]}</p>
                <p>{data[1]}</p>
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
