import React from "react";

class SearchBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      businesssesFound: "",
      isLoading: false,
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFilter(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    console.log("Request to backend");

    fetch("/search", {
      method: "POST",
      cache: "no-cache",
      headers: {
        content_type: "application/json",
      },
      body: JSON.stringify(this.state.search),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ businesssesFound: json[0] });
      });
    //event.preventDefault();
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          action="http://localhost:5000/search"
          method="post"
        >
          <input
            type="text"
            className="searchInput"
            name="input"
            placeholder="Search for Businesses..."
            value={this.state.search.toLowerCase()}
            onChange={this.handleFilter}
          />
          <input type="submit" value="Search" />
        </form>
        {/* {this.state.businesssesFound} */}
      </div>
    );
  }
}

export default SearchBusiness;
