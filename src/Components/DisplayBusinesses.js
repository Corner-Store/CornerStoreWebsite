import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import "../layoutMain.css";


/* Rating system */

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

/* Need to find a way to make the star ratings look nicer and close to each other */

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});



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
function DisplayBusinesses(props) {

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div>
      <span />

      {/* Use data passed from search results page and display */}
      {props.results.map((businesses, index) => (
        <div key={index}>
          <div className="containerProfile">

            <div className="mainProfile">
              <p>Business Details </p>
              <p class="thick">Adresss </p>
              {/* For Map Navigation */}




            </div>

            <div className="sideProfile">
              {/* Rating system */}
              <div className={classes.root}>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {/* Set value for rating */}
                {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
              </div>


              {/* Details of business profile - Needs to automate hide icons if data dont exist*/}
              <div className="alignLeft">
                <h1> {businesses[0]}</h1>
                <p class="title" >{businesses[6] !== null ? businesses[6] : ""}</p>
                
                <i class="fa fa-phone"> {businesses[1] !== null ? businesses[1] : ""}</i> 
                <p></p> 
                <i class="fa fa-envelope"> {businesses[2] !== null ? businesses[2] : ""}</i>

                <p class="thick">Adresss </p>
                <p> {businesses[3] !== null ? businesses[3] : ""} - {businesses[4] !== null ? businesses[4] : ""} </p>
                <hr class="solid"></hr>
                <p class="thick">Our Story </p>
                <p> Our product was found in {businesses[5] !== null ? businesses[5] : ""}  </p>
              </div>
            </div>
          </div>

          <span />
          {/* End of props.map */}
        </div>
      ))}
    </div>
  )
}
export default DisplayBusinesses;
