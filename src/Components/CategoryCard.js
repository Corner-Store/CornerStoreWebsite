import React, { Component } from "react";
import "../layoutMain.css";

const restaurants = "images/restaurants.png"
const alcohol = "images/alcohol.png"
const auto = "images/auto.png"
const media = "images/media.png"
const wellness = "images/wellness.png"
const beauty = "images/beauty.png"
const health = "images/health.png"
const retail = "images/retail.png"
const professionalservice = "images/professionalservice.png"
let imageURL = ""

class CategoryCard extends Component {

  render() {
    var categoryOutput = this.props.cardValue

    switch (categoryOutput) {
      case "Alcohol":
        imageURL = alcohol;
        break;

      case "Health":
        imageURL = health;
        break;

      case "Media":
        imageURL = media;
        break;

      case "Professional Services":
        imageURL = professionalservice;
        break;

      case "Food":
        imageURL = restaurants;
        break;

      case "Retail":
        imageURL = retail;
        break;

      case "Auto":
        imageURL = auto;
        break;

      case "Wellness":
        imageURL = wellness;
        break;

      case "Beauty":
        imageURL = beauty;

        break;
      default:
        imageURL = beauty;
        break;
    }

    const cardStyle = {
      cursor: "pointer"
    }

    return (
      <body style={cardStyle} onClick={this.props.onSelect}>
        <div className="category-container">
          <div className="category">
            <img
              className="category-img"
              src={imageURL}
              alt=""
            />
          </div>
        </div>

        <div className="category-title-container">
          {this.props.cardValue}
        </div>
      </body>

    );
  }
}
export default CategoryCard;



