import React from "react";
import "../layoutMain.css";

class SearchBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      location: "",
      businessNames: null,
      itemSearch: "",
      invalidInput: false,
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }
  handleFilter(event) {
    this.setState({ search: event.target.value });
  }

  handleLocation(event) {
    this.setState({ location: event.target.value });
  }
  handleSubmit(event) {
    if (this.state.search.length > 0) {
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
          this.setState({ businessNames: Array.from(json), itemSearch: true });
          this.props.handleResults(this.state.businessNames);
        });
      event.preventDefault();
    } else {
      this.setState({ invalidInput: true });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <input
            type="text"
            placeholder="I'm Looking For:"
            value={this.state.search}
            onChange={this.handleFilter}
          />
          <input
            type="text"
            placeholder="Where to:"
            value={this.state.location}
            onChange={this.handleLocation}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBusiness;
