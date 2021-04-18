import React from "react";
import "../layoutMain.css";

//Description: Search businesses contains the search bar for finding a shop name or industry 
//and a search for the location they want to search in.

class SearchBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      location: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  //Set users' search for industry or shop name
  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  //Set users' search for the city of where they want to find the business
  handleLocation(event) {
    this.setState({ location: event.target.value });
  }
  handleSubmit(event) {
    //Check for valid input for search and location
    if (this.state.search.length > 0 && this.state.location.length > 0) {
      console.log("Request to backend");

      //Create form data for api to recieve
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
          //Use the handle results function from the parent page to redirect to show the businesses
          this.props.handleResults(Array.from(json));
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
              onChange={this.handleSearch}
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
            <i className="fa fa-search">
            <input type="submit" value="Search"  
            className="search-button" /> 
            </i>

          </form>
        </div>
      </div>
    );
  }
}

export default SearchBusiness;
