import React from "react";
import "../layoutMain.css";
import { withRouter } from "react-router-dom";

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
  const phoneNumber = (
    <React.Fragment>
      <div>
        <i className="fa fa-phone" />
        {" " + props.business[1]}{" "}
      </div>
    </React.Fragment>
  );

  const emailContact = (
    <React.Fragment>
      <div>
        <i className="fa fa-envelope" />
        {" " + props.business[2]}
      </div>
    </React.Fragment>
  );

  return (
    <div className="container-divide ">
      <p></p>
      <span />
      <div className="info-left">
        {/* Details of business profile - Needs to automate hide icons if data dont exist*/}
        <div className="containerProfile">
          <div className="alignLeft">
            <div onClick={goBack} className="round">
              &#8249;
            </div>
          </div>
          <p></p>
          <img
            className="business-image"
            src="images/businessProfile.jpg"
            width="800"
            height="auto"
            alt=""
          />

          <div className="alignLeft">
            <h1 className="business-profile-name"> {props.business[0]}</h1>
            <p className="title">
              {props.business[6] !== null ? <a href={props.business[6]}>{props.business[6]}</a> : ""}
            </p>
            {props.business[1] !== null ? phoneNumber : null} <p></p>
            {props.business[2] !== null ? emailContact : null}
            <div className="alignRight">
              <p className="thick">Address </p>
              <p>
                {props.business[3] !== null ? props.business[3] + " - " : ""}
                {props.business[4] !== null ? props.business[4] : ""}
              </p>
            </div>
            <hr className="solid"></hr>
          </div>
        </div>
      </div>
      {/* For Map Navigation */}
      <div className="map-right">
        <p> Zip Code </p>
      </div>
      <span />

    </div>
  );
}
export default withRouter(DisplayBusinessProfile);
