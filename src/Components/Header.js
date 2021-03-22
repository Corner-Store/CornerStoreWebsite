import React, { Component } from 'react';

class Header extends Component {
  render() {


    return (
      <header id="home">

        <div class="navbar">
          <a href="#home">Home</a>
          <a href="#news">About</a>
          <div class="dropdown">
            <button class="dropbtn">Categories
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <div class="row">
                <div class="column">
                  <h3>Services</h3>
                  <a href="#">Education</a>
                  <a href="#">Consulting</a>
                  <a href="#">Technology</a>
                </div>
                <div class="column">
                  <h3>Others</h3>
                  <a href="#">Retail</a>
                  <a href="#">Transportation</a>
                  <a href="#">Contracting</a>
                </div>
                <div class="column">
                  <h3>Beauty</h3>
                  <a href="#">Hair Salon</a>
                  <a href="#">Make Up</a>
                  <a href="#">Barber</a>
                </div>
              </div>
            </div>
          </div>
        </div>
   </header>
    );
  }
}

export default Header;