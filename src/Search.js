import React from "react";
import { businessesJSON } from "./businesses";

class SearchBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      businesssesFound: '',
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleFilter(event){
    this.setState({ search: event.target.value });
  };

  handleSubmit(event){
    console.log("Request to backend")
    fetch("/search",{
      method:"POST",
      cache:"no-cache",
      headers:{
        "content_type": "application/json",
      },
      body:JSON.stringify(this.state.search)

    }).then(response => {
      return response.json()
    }).then(json=>{
      this.setState({businesssesFound: json[0]})
    })
  }
  render() {
    // const showBusinesses = businessesJSON
    //   .filter((data) => {
    //     if (this.state.search == null) {
    //       return data;
    //     } else if (
    //       data.name.toLowerCase().includes(this.state.search.toLowerCase())
    //     ) {
    //       return data;
    //     }
    //   })
    //   .map((data) => {
    //     return (
    //       <li className="list-item">
    //         <a href={data.link}>{data.name}</a>
    //       </li>
    //     );
    //   });
    return (
      <div>
        <input
          type="text"
          classname="input"
          placeholder="Search for Businesses..."
          value={this.state.search}
          onChange = {this.handleFilter}
        />
        <button onClick = {this.handleSubmit}> Search</button>
        {/* {this.state.businessesFound.map((item, index) => (
          <li key={index} className="list-item" data-testid="single-item">
            <a href={item.link} data-testid="display-businesses">
              {item.name}
            </a>
          </li>
        ))} */}
        {this.state.businesssesFound}
      </div>
    );
  }
}

export default SearchBusiness;
