import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Event extends Component {
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
        <h6>{this.props.plan.name}</h6>
        <p>Location: {this.props.plan.location}</p>
        <p>Booking Confirmation: {this.props.plan.bookingConfirmation}</p>
        <Link to={"/plans/events/" + this.props.plan.id + "/edit"} onClick={this.handleClick} className="nav-buttons-white-sml">Edit Plan</Link>
      </Fragment>
    )
  }
}

export default Event;
