import React, { Component } from "react";
import SearchBusiness from "./Search";
import SearchCategories from "./SearchCategories_Industries";

import "../layoutMain.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Corner Store</h1>
        <SearchBusiness />
        <span />
        <SearchCategories />
        <div></div>
      </div>
    );
  }
}

export default App;
