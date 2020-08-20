import React from 'react';
import TripList from '../components/trips/TripList.js'
//this is exactly the smae and i'll probably refactor it to just use the usual tripContainer
const TripContainer = (props) => {

  return(
    <TripList fetchComments={props.fetchComments} fetchHolidays={props.fetchHolidays} selectedTraveller={props.selectedTraveller} trips={props.trips} comments={props.comments} holiday={props.holiday} />
  )
}

export default TripContainer;
