import React, { Component } from "react";
import DisplayBusinesses from "../Components/DisplayBusinesses";
import "../layoutMain.css";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

//Description: The search results page displays the businesses from the home page and has
//a search engine and the map of the business locations.

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

    this.displayMarkers = this.displayMarkers.bind(this);
  }

  displayMarkers = () => {

    // Retrieve data (if it exists) passed from home page and set to searchResults
    const searchResults = this.props.location.state?.passResults;

    return searchResults.map((business, index) => {
      return business[7] && business[8] ? (
        <Marker
          key={index}
          id={index}
          position={{
            lat: parseFloat(business[7]),
            lng: parseFloat(business[8])
          }}
        />
      ) : null
    })
  }

  render() {
    const itemSearched = this.props.location.state?.passItemSearched;
    const locationSearched = this.props.location.state?.passLocationSearched;
    // Retrieve data (if it exists) passed from home page and set to searchResults
    const searchResults = this.props.location.state?.passResults;
    const displaySearchResult = (
      <React.Fragment>
        {/* // Pass search results for businesses to display */}
        <DisplayBusinesses results={searchResults} />
      </React.Fragment>
    );

    const noResult = <div className="container">No Results Found</div>;

    return (
      <section className="resultResearch-container">
        <div className="info-left">
          <div className="search-display">
            {itemSearched}
            {locationSearched ? <a> in {locationSearched}</a> : null}
          </div>
          {/* Check if there is data available to display, if not, show no results */}
          {searchResults ? displaySearchResult : noResult}
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
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBwzB1uzj0Wcs1JbdEBXFcWymGIG1it_6M'
})(SearchResultsPage);
