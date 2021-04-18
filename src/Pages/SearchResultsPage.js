import React, { Component } from "react";
import HeaderSearch from "../Components/HeaderSearch";
import DisplayBusinesses from "../Components/DisplayBusinesses";
import "../layoutMain.css";
import SearchBusiness from "../Components/SearchBusinesses";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '100%',
  float: 'right',
};

const state = {
  showingInfoWindow: false,  // Hides or shows the InfoWindow
  activeMarker: {},          // Shows the active marker upon click
  selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
}

/*function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("Map"), {
    zoom: 4,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}
*/
class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.location.state.data,
    };
    this.handleResults = this.handleResults.bind(this);
  }
  handleResults(results) {
    console.log(this.state.results);
    if (this.state.results.length > 0) {
      this.setState({ results: results });
    }
  }
  render() {
    return (
      <div className="App">
        <HeaderSearch handleResults={this.handleResults} />
        <span />
        <div id = "results-and-maps">
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
        <div id = "results">
        {this.state.results.length > 0 ? (
          <DisplayBusinesses results={this.state.results} />
        ) : (
          <div className="container">No Results Found</div>
        )}
        </div>
        </div>
      </div>
    );
  }
}
//export default SearchResultsPage;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBwzB1uzj0Wcs1JbdEBXFcWymGIG1it_6M'
})(SearchResultsPage);

