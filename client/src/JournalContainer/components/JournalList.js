import React, { Fragment } from 'react';
import Journal from './Journal.js';

const JournalList = (props) => {

  if (props.holidays.length === 0){
    return (
      <Fragment>
        <div className="container-header">
          <h1 className="container-title">My Holidays</h1>
        </div>
        <div className="component">
          <Journal holiday={null} />
        </div>
      </Fragment>
    )
  }

	const holidays = props.holidays.map((holiday, index) => {
	  return (
        <li key={index} className="holiday-list-item">
    	    <div className="component">
      	    <Journal holiday={holiday} />
    	    </div>
  	    </li>
	     )
	})

	return (

	  <ul className="no-bullet">
	    {holidays}
	  </ul>

	)
}


export default JournalList;
