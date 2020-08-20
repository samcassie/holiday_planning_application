import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Train extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleTripSelected(this.props.trip);
  }

  render(){
    return (
      <Fragment>
        <h6>{this.props.plan.departureStation} - {this.props.plan.arrivalStation}</h6>
        <p>Departing: {this.props.plan.departureTime}</p>
        <p>Arriving: {this.props.plan.arrivalTime}</p>
        <p>Booking Confirmation: {this.props.plan.bookingConfirmation}</p>
        <Link to={"/plans/trains/" + this.props.plan.id + "/edit"} onClick={this.handleClick} className="nav-buttons-white-sml">Edit Plan</Link>
      </Fragment>
    )
  }
}

export default Train;
