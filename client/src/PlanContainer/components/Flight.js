import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Flight extends Component {
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
        <h6>{this.props.plan.departureAirport} - {this.props.plan.arrivalAirport}</h6>
        <p>Departing: {this.props.plan.departureTime}</p>
        <p>Arriving: {this.props.plan.arrivalTime}</p>
        <p>Flight: {this.props.plan.flightNumber}</p>
        <p>Booking Confirmation: {this.props.plan.bookingConfirmation}</p>
        <Link to={"/plans/flights/" + this.props.plan.id + "/edit"} onClick={this.handleClick} className="nav-buttons-white-sml">Edit Plan</Link>
      </Fragment>
    )
  }
}

export default Flight;
