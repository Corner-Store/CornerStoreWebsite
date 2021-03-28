import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'
import ReactDOM from 'react-dom';

class SearchCategories extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      businessNames: null,
      name: ""    }
  }
 // Get a dropdown of categories
  async getOptions(){
    const res = await axios.get('http://localhost:5000/industries')
    const data = res.data

    const options = data.map(industry => ({
      value : industry,
      label: industry
    }))

    this.setState({selectOptions: options})

  }
// Get names of business in catergories
  async getBusinessNames(industry) {
    const res = await axios.get('http://localhost:5000/industries/' + industry + '/businesses')
    const data = res.data
    this.setState({businessNames: data})
  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
   this.getBusinessNames(e.value)
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {

    const businessList = this.state.businessNames && this.state.businessNames.length && this.state.businessNames.length > 0 ? (
      <ul>
        {this.state.businessNames.map(name => <li>{name}</li>)}
      </ul>
    ) : null

    console.log(this.state.selectOptions)
    return (
      <div>
        <Select
            name = "Top Categories"
            options={this.state.selectOptions}
            onChange={this.handleChange.bind(this)}
        />

        <p>You selected <strong>{this.state.name}</strong> category </p>
        {businessList}
      </div>
    )
  }
}

export default SearchCategories;




