import React, { Component } from "react";
import "../layoutMain.css";

class CategoryCard extends Component {
  render() {
    return (
      <div>
        <div className="category-container">
          <div className="category">
            <img
              className="category-img"
              src={
                "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg"
              }
            />
          </div>
        </div>
        <div className="category-title-container">
          <h3 className="category-title">{this.props.selectOptions}</h3>
        </div>
      </div>
    );
  }
}
export default CategoryCard;
