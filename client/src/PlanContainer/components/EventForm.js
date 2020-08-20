import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class EventForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      event: {
        planType: "EVENT",
        date: "",
        bookingConfirmation: "",
        name: "",
        location: ""
      },
      confirmed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let eventObj = this.state.event;
    eventObj[propertyName] = event.target.value;
    this.setState({event: eventObj})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate('events', this.state.event)
    this.setState({confirmed: true})
  }

  render(){
    if(!this.state.confirmed){
      return (
        <Fragment>
          <div className="form-container">
            <form className="form-content"onSubmit={this.handleSubmit}>
              <h3 className="form-heading">Event</h3>
              <div className="form-item">
                <label htmlFor="date">Date:</label>
                <input type="date" name="date" onChange={this.handleChange} value={this.state.event.date} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="bookingConfirmation">Booking Confirmation:</label>
                <input type="text" name="bookingConfirmation" onChange={this.handleChange} value={this.state.event.bookingConfirmation} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.event.name} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="location">Location:</label>
                <input type="text" name="location" onChange={this.handleChange} value={this.state.event.location} /><br />
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

export default EventForm;
