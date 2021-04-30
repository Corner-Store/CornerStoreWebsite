import React, { Component, useState } from "react";
import DisplayBusinesses from "../Components/DisplayBusinesses";
import "../layoutMain.css";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class SearchResultsPage extends Component {

  constructor(props, context) {
    super(props, context);
 
    this.state = {
      visible: false,
      searchResults: this.props.location.state?.passResults,
      places: [{lat: 47.49855629475769, lng: -122.14184416996333},
        {latitude: 47.359423, longitude: -122.021071},
        {latitude: 47.2052192687988, longitude: -121.988426208496},
        {latitude: 47.6307081, longitude: -122.1434325},
        {latitude: 47.3084488, longitude: -122.2140121},
        {latitude: 47.5524695, longitude: -122.0425407}]
}

    this.handleWebFilter = this.handleWebFilter.bind(this);
    this.handleIG = this.handleIG.bind(this);
     this.handleTwitter = this.handleTwitter.bind(this);
     this.handleFacebook = this.handleFacebook.bind(this);
  }

  displayMarkers = () => {
    return this.state.places.map((places, index) => {
      return <Marker key={index} id={index} position={{
       lat: places.latitude,
       lng: places.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
}


handleWebFilter(){
  const results = this.state.searchResults.filter(business=>business[6]);
  this.setState({searchResults:results});
  console.log(results)
;}

handleIG(){
  const results = this.state.searchResults.filter(business=>business[7]);
  this.setState({searchResults:results});
  console.log(results)
;}

handleFacebook(){
  const results = this.state.searchResults.filter(business=>business[8]);
  this.setState({searchResults:results});
  console.log(results)
;}

handleTwitter(){
  const results = this.state.searchResults.filter(business=>business[9]);
  this.setState({searchResults:results});
  console.log(results)
;}


  render() {
    const itemSearched = this.props.location.state?.passItemSearched;
    const locationSearched = this.props.location.state?.passLocationSearched;
    // Retrieve data (if it exists) passed from home page and set to searchResults
    const searchResults = this.props.location.state?.passResults;
    const displaySearchResult = (
      <React.Fragment>
        {/* // Pass search results for businesses to display */}
        <DisplayBusinesses results={this.state.searchResults} />
      </React.Fragment>
    );

    const noResult = <div className="container">No Results Found</div>;

    return (
      <div className="container-divide">
        <div className="info-left">
          <div className="search-display">
            {itemSearched}
            {locationSearched ? <a> in {locationSearched}</a> : null}
            <div className = "filter-dropdown">
            <button onClick={this.handleWebFilter}>Website</button>
            <button onClick={this.handleIG}>Instagram</button>
            <button onClick={this.handleFacebook}>Facebook</button>
            <button onClick={this.handleTwitter}>Twitter</button>
          </div>
          </div>
          {/* Check if there is data available to display, if not, show no results */}
          {this.state.searchResults ? displaySearchResult : noResult}
        </div>
        <div className="map-right">
        <Map
          google={this.props.google}
          zoom={8}
          style={ {
            width: '30%',
            height: '100%',
          }}
          initialCenter={{ lat: 42.407211, lng: -71.382439}}
        >
          {/* <Marker position={{ lat: 42.407211, lng: -71.382439}} /> */}
          {this.displayMarkers()}
        </Map>


        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(SearchResultsPage);