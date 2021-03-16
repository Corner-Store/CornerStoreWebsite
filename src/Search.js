import React from "react";
import { businessesJSON } from "./businesses";

class SearchBusiness extends React.Component {
  state = {
      search: '',
    }
  filter = (event) => {
    this.setState({ search: event.target.value });
  };
  render() {
   
    const showBusinesses = businessesJSON.filter((data) => {
        if (this.state.search == null) {
          return data;
        } else if (data.name.toLowerCase().includes(this.state.search.toLowerCase())) {
          return data;
        }
      })
      .map((data) => {
        return (
          <li className="list-item">
            <a href={data.link}>{data.name}</a>
          </li>
        );
      });
    return (
      <div>
        <input
          type="text"
          classname="input"
          placeholder="Search for Businesses..."
          value = {this.state.search}
          onChange={this.filter}
        />
        {showBusinesses}
      </div>
    );
  }
}

export default SearchBusiness;
