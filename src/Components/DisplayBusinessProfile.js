import React from "react";
import "../layoutMain.css";
import { withRouter } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  position: 'absolute',
  width: '30%',
  height: '100%'
};





//Description: Show businesses found from database with name and location
/* Business Data Extract
        "BusinessName", 
        "Number", 
        "Email", 
        "City", 
        "ZipCode",
        "OPeningYear",
        "Website" 

*/



// This only works if we deploy live :D
function goBack() {
  window.history.back();
}

function DisplayBusinessProfile(props) {
  const phoneNumber = <i className="fa fa-phone">{" " + props.business[1]}</i>;

  const emailContact = (
    <i className="fa fa-envelope">{" " + props.business[2]}</i>
  );
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

//   constructor(props, context) {
//     super(props, context);
  
//     this.state = {
//       visible: false,
//       searchResults: this.props.location.state?.passResults,
//     }
// }

  return (
    <div className="containerBusinessProfile">
      <p></p>
      <span />
      <div className="containerProfile">
        {/* For Map Navigation */}
        <div className="mainProfile">
          <p> Zip Code </p>
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
          position={{ lat: business=>business[10], lng: business=>business[11]}}
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
        { <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.name}</h4>
          </div>
        </InfoWindow> }
        </Map>
        </div>

        {/* Details of business profile - Needs to automate hide icons if data dont exist*/}
        <div className="sideProfile">
          <div className="alignLeft">
            <div onClick={goBack} className="round">
              &#8249;
            </div>
          </div>
          <p></p>
          <img
            className="business-image"
            src="images/businessProfile.jpg"
            width="900"
            height="auto"
            alt=""
          />

          <div className="alignLeft">
            <h1> {props.business[0]}</h1>
            <p class="title">
              {props.business[6] !== null ? props.business[6] : ""}
            </p>
            {props.business[1] !== null ? phoneNumber : null} <p></p>
            {props.business[2] !== null ? emailContact : null}
            <div className="alignRight">
              <p class="thick">Address </p>
              <p>
                {props.business[3] !== null ? props.business[3] + " - " : ""}
                {props.business[4] !== null ? props.business[4] : ""}
              </p>
            </div>
            <hr class="solid"></hr>
          </div>
        </div>
      </div>

      <span />
    </div>
  );
}
}

// export default withRouter(DisplayBusinessProfile);

export default GoogleApiWrapper({
  apiKey: ''
})(withRouter(DisplayBusinessProfile));

