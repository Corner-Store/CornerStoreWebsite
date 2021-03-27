import React, { Component } from "react";
import Header from "./Components/Header";
import "./layoutMain.css";
import Routes from "./Components/Routes";

class App extends Component {

  render() {
    return (
      <div>
      <Header/>
      <Routes/>
      </div>
    );
  }
}

export default App;
