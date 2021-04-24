import React, { Component } from "react";
import "../layoutMain.css";

const food = "images/food.png"
const alcohol = "images/alcohol.png"
const auto = "images/auto.png"
const media = "images/media.png"
const barber = "images/barber.png"
const beauty = "images/beauty.png"
const health = "images/health.png"
const retail = "images/retail.png"
const professionalService = "images/professionalService.png"
let imageURL = ""

class CategoryCard extends Component {

  render() {
    var categoryOutput = this.props.cardValue

    switch(categoryOutput)
    {
      case "Food":
        imageURL = food;
        break;

      case "Wellness":
        imageURL = barber;
        break;

      default:
        imageURL = beauty;
        break;
    }

    const cardStyle = {
      cursor: "pointer"
    }

    return (
      <div style={cardStyle} onClick={this.props.onSelect}>
        <div className="category-container">
          <div className="category">
            <img
              className="category-img"
              src={imageURL}
            />
          </div>
        </div>

        <div className="category-title-container">
          <h2 className="category-title">{this.props.cardValue}</h2>
        </div>
      </div>

    );
  }
}
export default CategoryCard;



