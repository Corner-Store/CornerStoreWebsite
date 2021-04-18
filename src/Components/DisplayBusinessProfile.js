import React from "react";
import "../layoutMain.css";

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
function DisplayBusinessProfile(props) {
  return (
    <div>
      <span />
      <div className="containerProfile">
        {/* For Map Navigation */}
        <div className="mainProfile">
          <p> Zip Code </p>
        </div>

        <div className="sideProfile">
          {/* Details of business profile - Needs to automate hide icons if data dont exist*/}
          <div className="alignLeft">
            <h1> {props.business[0]}</h1>
            <p class="title">
              {props.business[6] !== null ? props.business[6] : ""}
            </p>

            <i class="fa fa-phone">
              {" "}
              {props.business[1] !== null ? props.business[1] : ""}
            </i>
            <p></p>
            <i class="fa fa-envelope">
              {" "}
              {props.business[2] !== null ? props.business[2] : ""}
            </i>

            <p class="thick">Address </p>
            <p>
              {" "}
              {props.business[3] !== null ? props.business[3] : ""} -{" "}
              {props.business[4] !== null ? props.business[4] : ""}{" "}
            </p>
            <hr class="solid"></hr>
          </div>
        </div>
      </div>

      <span />
    </div>
  );
}
export default DisplayBusinessProfile;
