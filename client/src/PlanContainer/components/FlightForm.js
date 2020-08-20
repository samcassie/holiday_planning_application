import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class FlightForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      flight: {
        planType: "FLIGHT",
        date: "",
        bookingConfirmation: "",
        departureAirport: "",
        arrivalAirport: "",
        departureTime: "",
        arrivalTime: ""
      },
      confirmed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let flight = this.state.flight;
    flight[propertyName] = event.target.value;
    this.setState({flight: flight})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate('flights', this.state.flight)
    this.setState({confirmed: true})
  }

  render(){
    if(!this.state.confirmed){
      return (
        <Fragment>
          <div className="form-container">
            <form className="form-content" onSubmit={this.handleSubmit}>
              <h3 className="form-heading">Flight</h3>
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
                <input className="nav-buttons-green" type="submit" value="Create" />
              </div>
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

export default FlightForm;
