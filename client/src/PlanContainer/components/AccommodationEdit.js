import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class AccommodationEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      accommodation: this.props.accommodation,
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
    let accommodation = this.state.accommodation;
    accommodation[propertyName] = event.target.value;
    this.setState({accommodation: accommodation})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onUpdate('accommodations', this.state.accommodation, this.state.accommodation.id)
    this.setState({confirmed: true})
  }

  handleWarning(){
    this.setState({warned: true})
  }

  handleDelete(){
    this.props.onDelete('accommodations', this.state.accommodation.id)
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
              <h3 className="form-heading">Edit Accommodation</h3>
              <div className="form-item">
                <label htmlFor="date">Date:</label>
                <input type="date" name="date" onChange={this.handleChange} value={this.state.accommodation.date} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="bookingConfirmation">Booking Confirmation:</label>
                <input type="text" name="bookingConfirmation" onChange={this.handleChange} value={this.state.accommodation.bookingConfirmation} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.accommodation.name} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="address">Address:</label>
                <input type="text" name="address" onChange={this.handleChange} value={this.state.accommodation.address} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="numOfNights">Number of Nights:</label>
                <input type="number" name="numOfNights" onChange={this.handleChange} value={this.state.accommodation.numOfNights} /><br />
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

export default AccommodationEdit;
