import React, { Fragment } from 'react';
import Holiday from './Holiday.js';

const Holidays = (props) => {


  if (props.holidays.length === 0){
    return (
      <Fragment>
        <div className="container-header">
          <h1 className="container-title">My Holidays</h1>
        </div>
        <div className="component">
          <Holiday holiday={null} />
        </div>
      </Fragment>
    )
  }

  function compare(a, b){
    if(!a.trips || a.trips.length===0 || !a.trips[0].plans){
      return 1
    }

    if(!b.trips ||b.trips.length===0 || !b.trips[0].plans){
      return -1
    }

    const aDate = a.trips[0].plans[0].date
    const bDate = b.trips[0].plans[0].date

    let comparison = 0;
    if(aDate > bDate){
      comparison = 1;
    }else if(aDate < bDate){
      comparison = -1;
    }
    return comparison
  }

  let sortedHolidays = props.holidays.sort(compare)

	let holidays = sortedHolidays.map((holiday, index) => {
    if(!holiday.published){
      return (
          <li key={index} className="holiday-list-item">
            <div className="component">
              <Holiday holiday={holiday} />
            </div>
          </li>
      )
    }else{
      return null
    }
	})

	return (
    <Fragment>
      <div className="container-header">
        <h1 className="container-title">Your Holidays</h1>
      </div>
  	  <ul className="no-bullet">
  	    {holidays}
  	  </ul>
    </Fragment>
	)
}


export default Holidays;
