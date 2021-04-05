import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBusiness from "../Components/SearchBusinesses";

import Header from "./Components/Header";
import Routes from "./Routes";
import "./layoutMain.css";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%'
};

const state = {
  showingInfoWindow: false,  // Hides or shows the InfoWindow
  activeMarker: {},          // Shows the active marker upon click
  selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
}

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
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
      </div>
    );
  }
}
*/

export class MapContainer extends Component {
  render() {
    
    return (
          <div className="App">
      <Header />
      <Routes />
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
      </div>
    );

  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBwzB1uzj0Wcs1JbdEBXFcWymGIG1it_6M'
})(MapContainer);



class HeaderSearch extends Component {
  render() {
    return (
      <header id="home">
        <div className="navbarsearch">
          <Link to="/">Home</Link>
          <div className="navbarsearch-centered">
            <a><SearchBusiness handleResults={this.props.handleResults} /></a>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderSearch;
