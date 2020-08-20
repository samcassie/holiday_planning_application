import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class EventEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      event: this.props.event,
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
    let eventObj = this.state.event;
    eventObj[propertyName] = event.target.value;
    this.setState({event: eventObj})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onUpdate('events', this.state.event, this.state.event.id)
    this.setState({confirmed: true})
  }

  handleWarning(){
    this.setState({warned: true})
  }

  handleDelete(){
    this.props.onDelete('events', this.state.event.id)
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
              <h3 className="form-heading">Edit Event</h3>
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
                <input className="nav-buttons-green" type="submit" value="Update" />
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

export default EventEdit;
