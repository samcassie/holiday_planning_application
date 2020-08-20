import React from 'react';
import LocationMap from './LocationMap.js';
import CommentBox from '../../containers/CommentBox.js'


const Trip = (props) => {
  const position = [props.trip.latitude, props.trip.longitude];

  return (
    <div className="trip">
      <div className="map-container">
        <LocationMap position={position} />
      </div>
      <CommentBox fetchComments={props.fetchComments} holiday={props.holiday} fetchHolidays={props.fetchHolidays} selectedTrip={props.trip} selectedTraveller={props.selectedTraveller} comments = {props.comments}/>
    </div>
  )
}

export default Trip;
