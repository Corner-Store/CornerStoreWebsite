import React, { Component } from "react";
import Routes from "./Routes";
import HeaderSearch from "./Components/HeaderSearch";
import "./layoutMain.css";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleResults = this.handleResults.bind(this);
  }
  //Redirect page to /businesses with the search results
  handleResults(newResults, itemSearched, locationSearched) {
    // Reload page if currently on /businesses page
    if (this.props.location.pathname === "/businesses") {
      window.location.reload();
    }
    this.props.history.push({
      pathname: "/businesses",
      // Pass results data to the search results page
      state: {
        passResults: newResults,
        passItemSearched: itemSearched,
        passLocationSearched: locationSearched,
      },
    });
  }
  render() {
    const HOME = "/";
    // Get current location path
    let location = this.props.location.pathname;

    // Add home button and search bar
    const renderHeader = <HeaderSearch handleResults={this.handleResults} />;

    return (
      <div className="home-header">
        {/* Don't show search bar in homepage*/}{" "}
        {location === HOME ? null : renderHeader}
        <Routes />
      </div>
    );
  }
}
export default withRouter(App);
