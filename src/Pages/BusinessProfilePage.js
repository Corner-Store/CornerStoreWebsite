import React, { Component } from "react";
import DisplayBusinessProfile from "../Components/DisplayBusinessProfile";
import "../layoutMain.css";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  position: 'absolute',
  width: '30%',
  height: '100%'
};


//Description: The search results page displays the businesses from the home page and has
//a search engine and the map of the business locations.

class BusinessProfilePage extends Component {
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      // Retrieve data passed (if it exists) from home page and set to searchResults
      businessChoice: this.props.location.state?.businessProfileResult,
    };
  }

  render() {
    return (
      
      <div>
        {/* Check if there is data available to display, if not, show no results */}
        {this.state.businessChoice ? (
          <DisplayBusinessProfile business={this.state.businessChoice} />
        ) : (
          <div className="container">No Results Found</div>
        )}
        
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 42.407211,
            lng: -71.382439
          }
        }
      >
        <Marker 
          position={{ lat: 42.407211, lng: -71.382439}}
          onClick={this.onMarkerClick}
        />
        </Map>

      </div>
    );
  }
}
export default BusinessProfilePage;

