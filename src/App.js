import React, { Component } from "react";
import Routes from "./Routes";
import HeaderSearch from "./Components/HeaderSearch";
import "./layoutMain.css";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessResults: null,
    };
    this.handleResults = this.handleResults.bind(this);
  }
  //Redirect page to /businesses with the search results
  handleResults(newResults) {
    console.log(newResults);
    if (this.props.location.pathname === "/businesses") {
      window.location.reload();
    }
    this.setState({ businessResults: newResults });
    this.props.history.push({
      pathname: "/businesses",
      // Pass results data to the search results page
      state: { passResults: newResults },
    });
  }
  render() {
    const HOME = "/";
    let location = this.props.location;
    const renderHeader = <HeaderSearch handleResults={this.handleResults} />;
    return (
      <div>
        {/* Add home button and search bar */}
        {location.pathname === HOME ? null : renderHeader}
        <Routes />
      </div>
    );
  }
}
export default withRouter(App);
