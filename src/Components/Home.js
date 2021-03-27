import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";

import SearchBusiness from "./Search";
import CategoryBar from "./CategoryBar";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      cornerstoreData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getCornerstoreData() {
    $.ajax({
      url: "/cornerstoreData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ cornerstoreData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getCornerstoreData();
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to Corner Store</h1>
        <SearchBusiness />
        <div></div>
        <CategoryBar data={this.state.cornerstoreData.main} />
      </div>
    );
  }
}

export default Home;
