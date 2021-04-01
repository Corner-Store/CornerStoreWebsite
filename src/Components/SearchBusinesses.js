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
      invalidInput: "",
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
    if (this.state.search.length > 0 && this.state.location.length > 0) {
      console.log("Request to backend");
      let data = new FormData();
      data.append("search", this.state.search);
      data.append("location", this.state.location);
      let requestSearch = {
        method: "POST",
        header: { content_type: "multipart/form-data" },
        body: data,
      };
      fetch("http://localhost:5000/api/search", requestSearch)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.setState({ businessNames: Array.from(json), itemSearch: true });
          this.props.handleResults(this.state.businessNames);
        })
        .catch(function (error) {
          console.warn(error);
        });
      event.preventDefault();
    } else {
      alert("Please fill in all fields.");
    }
  }

  render() {
    return (
      <div>
        <div className="search-bar-box">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="I'm Looking For:"
              onChange={this.handleFilter}
              name="input"
              className="right-search-outline "
            />
            <data className="vertical-line" />
            <input
              type="text"
              placeholder="Where to:"
              onChange={this.handleLocation}
              name="location"
              className="left-search-outline "
            />
            <data className="vertical-line" />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBusiness;
