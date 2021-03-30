import React from "react";
import "../layoutMain.css";
import { withRouter, Redirect } from "react-router-dom";


class SearchBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      location:"",
      businessNames: [],
      itemSearch: false,
      invalidInput: false,
    
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFilter(event) {
    this.setState({ search: event.target.value });
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
        });
      event.preventDefault();
    } else {
      this.setState({ invalidInput: true });
    }
  }

  render() {
    if (this.state.itemSearch) {
      return (
        <Redirect
          to={{
            pathname: "/businesses",
            state: { businesses: this.state.businessNames },
          }}
        />
      );
    } else {
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
            value={this.state.location}/>
            <input type="submit" value="Search" />
          </form>
        </div>
      );
    }
  }
}

export default withRouter(SearchBusiness);
