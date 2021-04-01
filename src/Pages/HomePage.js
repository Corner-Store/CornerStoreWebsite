import React, { Component } from "react";
import Header from "../Components/Header";
import SearchBusiness from "../Components/SearchBusinesses";
import SearchCategories from "../Components/SearchCategories_Industries";
import { withRouter, Redirect } from "react-router-dom";
import "../layoutMain.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      redirectPage: false,
    };
    this.handleResults = this.handleResults.bind(this);
  }
  handleResults(results) {
      this.setState({ results: results, redirectPage: true });

  }

  render() {
    if (this.state.redirectPage) {
      return (
        <Redirect
          to={{
            pathname: "/businesses",
            state: { data: this.state.results },
          }}
        />
      );
    } else {
      return (
        <div className="App">
          <Header />
          <section className="home-container">
            <h1>Corner Store</h1>
            <SearchBusiness handleResults={this.handleResults} />
          </section>
          <span />
          <SearchCategories handleResults={this.handleResults} />
          <div></div>
        </div>
      );
    }
  }
}

export default withRouter(App);
