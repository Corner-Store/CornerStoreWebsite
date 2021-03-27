import React from "react";
import "../layoutMain.css";
class SearchBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      businesssesFound: [],
      itemSearch: false,
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFilter(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    console.log("Request to backend");
    let data = new FormData();
    data.append("search", this.state.search);
    let requestSearch = {
      method: "POST",
      header: { content_type: "application/json" },
      body: data,
    };
    fetch("http://localhost:5000/search", requestSearch)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ businesssesFound: Array.from(json), itemSearch: true });
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <input
            type="text"
            placeholder="Search for Businesses..."
            value={this.state.search}
            onChange={this.handleFilter}
          />
          <input type="submit" value="Search" />
        </form>
        <div class={this.state.itemSearch ? "container" : ""}>
          {this.state.businesssesFound.map((data, index) => (
            <p key={index} class="businesses-container">
              {data[0]}
              <p>{data[1]}</p>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBusiness;
