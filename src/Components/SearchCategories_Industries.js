import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

class SearchCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      businessNames: null,
      name: "",
    };
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
      "https://cornerstoreappbackend.herokuapp.com/api/industries/" +
        industry +
        "/businesses"
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

  handleChange(e) {
    this.setState({ id: e.value, name: e.label });
    this.getBusinessNames(e.value);
  }

  componentDidMount() {
    this.getOptions();
  }

  render() {
    return (
      <div>
        <Select
          options={this.state.selectOptions}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default SearchCategories;
