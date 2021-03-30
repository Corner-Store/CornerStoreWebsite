import React, { Component } from "react";
import Header from "./Components/Header";
import Routes from "./Routes";
import "./layoutMain.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
