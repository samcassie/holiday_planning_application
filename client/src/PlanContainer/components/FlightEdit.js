import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class FlightEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      flight: this.props.flight,
      confirmed: false,
      warned: false,
      deleted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleWarning = this.handleWarning.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let flight = this.state.flight;
    flight[propertyName] = event.target.value;
    this.setState({flight: flight})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onUpdate('flights', this.state.flight, this.state.flight.id)
    this.setState({confirmed: true})
  }

  handleWarning(){
    this.setState({warned: true})
  }

  handleDelete(){
    this.props.onDelete('flights', this.state.flight.id)
    this.setState({deleted: true})
  }

  render(){
    if(this.state.deleted){
      return (
        <Confirmation url={"/holidays/" + this.props.holiday.id} heading={false} />
      )
    }

    let warning;

    if(this.state.warned){
      warning = (
        <Fragment>
          <p className="centered">Warning!  This will permanently delete this plan.</p>
          <p className="centered">Are you sure you wish to proceed?</p>
          <div className="buttons-centered">
            <button onClick={this.handleDelete} className="nav-buttons-white">Yes</button>
          </div>
        </Fragment>
      )
    }

    if(!this.state.confirmed){
      return (
        <Fragment>
          <div className="form-container">
            <form className="form-content" onSubmit={this.handleSubmit}>
              <h3 className="form-heading">Edit Flight</h3>
              <div className="form-item">
                <label htmlFor="date">Date:</label>
                <input type="date" name="date" onChange={this.handleChange} value={this.state.flight.date} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="bookingConfirmation">Booking Confirmation:</label>
                <input type="text" name="bookingConfirmation" onChange={this.handleChange} value={this.state.flight.bookingConfirmation} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="departureAirport">Departure Airport:</label>
                <input type="text" name="departureAirport" onChange={this.handleChange} value={this.state.flight.departureAirport} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="arrivalAirport">Arrival Airport:</label>
                <input type="text" name="arrivalAirport" onChange={this.handleChange} value={this.state.flight.arrivalAirport} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="departureTime">Departure Time:</label>
                <input type="text" name="departureTime" onChange={this.handleChange} value={this.state.flight.departureTime} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="arrivalTime">Arrival Time:</label>
                <input type="text" name="arrivalTime" onChange={this.handleChange} value={this.state.flight.arrivalTime} /><br />
              </div>
              <div className="buttons-centered">
                <input type="submit" className="nav-buttons-green" value="Update" />
                <button type="button" onClick={this.handleWarning} className="nav-buttons-white">Delete Plan</button>
              </div>
              {warning}
            </form>
          </div>
        </Fragment>
      )
    }else{
      return (
        <Confirmation url={"/holidays/" + this.props.holiday.id} heading={false} />
      )
    }
  }
}

export default FlightEdit;
