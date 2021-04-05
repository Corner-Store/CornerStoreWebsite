import React, { Component } from "react";
import "../layoutMain.css";

class CategoryCard extends Component {
  render() {
    return (
        <div className="card-container">
            <div className="card">
                <img
                    className="card-hero-img"
                    src={"https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg"}
                    alt={"Lloyd Sibson's Website Banner"}
                    title={"Lloyd Sibson's Logo"}
                />
                <div className="card-heading-container">
                    <img
                        className="card-social-icon"
                        src={"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg"}
                        alt={"https://lloydsibson.com/"}
                        title={"loyd Sibson"}
                    />
                    <div className="card-title-container">
                        <h3 className="card-title">{"loyd Sibson"}</h3>
                        <p className="card-sub-title">{"loyd Sibson"}</p>
                    </div>
                </div>
                <div className="icon-container">
                    <i className="far fa-heart heart-icon" />
                    <p className="heart-liked-text">Liked +1</p>
                </div>
            </div>
            <a href={"https://lloydsibson.com/"} target="_blank" />
        </div>
    )
  }
}
export default CategoryCard;
