import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="navbar">
          <Link to="/">Home</Link>
        </div>
      </header>
    );
  }
}

export default Header;
