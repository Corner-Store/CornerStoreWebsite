import React, { Component } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 3,
  },
};

class SearchCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      businessNames: null,
      name: "",
    };

    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
  }
  // Get a dropdown of categories
  async getOptions() {
    const res = await axios.get("http://localhost:5000/api/industries");
    const data = res.data;
    const options = data.map((industry) => ({
      value: industry,
      label: industry,
    }));
    this.setState({ selectOptions: options });
  }

  async getBusinessNames(industry) {
    const res = await axios.get(
      "http://localhost:5000/api/industries/" + industry + "/businesses"
    );
    const data = res.data;
    this.setState({ businessNames: data });
    if (
      this.state.businessNames &&
      this.state.businessNames.length &&
      this.state.businessNames.length > 0
    ) {
      //Use the handle results function from the parent page to redirect to show the businesses
      this.props.handleResults(this.state.businessNames);
    }
  }

  handleSelectChange(e) {
    this.setState({ id: e.value, name: e.label });
    this.getBusinessNames(e.value);
  }

  handleCardClick(value) {
    this.setState({ id: value, name: value})
    this.getBusinessNames(value)
  }

  componentDidMount() {
    this.getOptions();
  }

  render() {
    return (
      <div>
        <Carousel responsive={responsive} draggable={false} infinite={true}>
          {this.state.selectOptions.map((categories, index) => (
            <div key={index}>
              <CategoryCard cardValue={categories.value} onSelect={() => this.handleCardClick(categories.value)}/>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default SearchCategories;