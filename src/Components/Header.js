import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchCategories from "../Components/SearchCategories_Industries";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="navbar">
          <Link to="/">Home</Link>
           <Link class="dropdown"> All Categories
              <div class="dropdown-content">
                <SearchCategories/>
               </div>
           </Link>
        </div>
      </header>
    );
  }
}

export default Header;
