import React from 'react';
import { Link } from 'react-router-dom';

const Holiday = ({holiday}) => {

  if (!holiday){
    return (
      <div className="confirmation-screen">
        <p>Oops! Looks like you've not added any holidays yet.</p>
        <Link to={"/holidays/new"} className="nav-buttons-green">Create a Holiday</Link>
      </div>
    )
  }

  let locations = "";

  if(holiday.trips.length > 0){
    locations = holiday.trips[0].location;

    if(holiday.trips.length > 1){
      for(let i = 1; i < holiday.trips.length; i++){
        locations = `${locations} - ${holiday.trips[i].location}`
      }
    }
  }


  return (
    <div className="holiday">
      <Link className="holiday-link" to={"/holidays/" + holiday.id}>
        <h2 className="holiday-title">{holiday.title}</h2>
        <h3 className="holiday-locations">{locations}</h3>
      </Link>
      <Link to={"/holidays/" + holiday.id} className="nav-buttons-white">View Holiday</Link>
    </div>
  )
}

export default Holiday;
