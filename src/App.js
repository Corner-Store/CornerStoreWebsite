import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from './Components/Header';
import SearchBusiness from "./Components/Search";
import CategoryBar from './Components/CategoryBar';
import SearchCategories from './Components/SearchCategories_Industries';

import "./layoutMain.css";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      cornerstoreData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getCornerstoreData(){
    $.ajax({
      url:'/cornerstoreData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({cornerstoreData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getCornerstoreData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.cornerstoreData.main}/>
                 <h1>Welcome to Corner Store</h1>
                   <SearchBusiness />
                   <SearchCategories />
             <div></div>
       </div>
    );
  }
}

export default App;