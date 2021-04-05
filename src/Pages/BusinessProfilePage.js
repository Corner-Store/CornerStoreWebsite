import React, { Component } from "react";
import HeaderSearch from "../Components/HeaderSearch";
import DisplayBusinessProfile from "../Components/DisplayBusinessProfile";
import "../layoutMain.css";

class BusinessProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.location.state.data,
    };
  }
  render() {
    return (
      <div>
        <HeaderSearch />
        <span />
        {this.state.results !== null ? (
          <DisplayBusinessProfile results={this.state.results} />
        ) : (
          <div>No Results Found</div>
        )}
      </div>
    );
  }
}
export default BusinessProfilePage;
