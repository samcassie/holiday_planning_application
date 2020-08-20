import React, { Fragment } from 'react';
import Trip from './Trip.js';
import { PanelGroup, Panel } from 'rsuite';
import { Link } from 'react-router-dom';

const TripList = ({trips, handleTripSelected, selectedTrip, holiday, fetchHolidays}) => {
  if(trips.length === 0){
    return (
      <div className="buttons-centered">
        <Link to={"/trips/new"} className="nav-buttons-green">Add Trip</Link>
      </div>
    )
  }

  function compare(a, b){
    if(!a.plans || a.plans.length===0){
      return 1
    }

    if(!b.plans ||b.plans.length===0){
      return -1
    }

    const aDate = a.plans[0].date
    const bDate = b.plans[0].date

    let comparison = 0;
    if(aDate > bDate){
      comparison = 1;
    }else if(aDate < bDate){
      comparison = -1;
    }
    return comparison
  }

  let sortedTrips = trips.sort(compare)

  const allTrips = sortedTrips.map((trip, index) => {
    return (
      <Panel key={index} header={trip.location} defaultExpanded>
        <Trip fetchHolidays={fetchHolidays} trip={trip} handleTripSelected={handleTripSelected} selectedTrip={selectedTrip} holiday={holiday} />
      </Panel>
    )
  })

  return (
    <Fragment>
      <div className="buttons-centered">
        <Link to={"/trips/new"} className="nav-buttons-green">Add Trip</Link>
      </div>
        <PanelGroup accordion bordered>
          {allTrips}
        </PanelGroup>
    </Fragment>
  )
}

export default TripList;
