import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class AccommodationForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      accommodation: {
        planType: "ACCOMMODATION",
        date: "",
        bookingConfirmation: "",
        name: "",
        address: "",
        numOfNights: 0
      },
      confirmed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let accommodation = this.state.accommodation;
    accommodation[propertyName] = event.target.value;
    this.setState({accommodation: accommodation})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate('accommodations', this.state.accommodation)
    this.setState({confirmed: true})
  }

  render(){
    if(!this.state.confirmed){
      return (
        <Fragment>
          <div className="form-container">
            <form className="form-content" onSubmit={this.handleSubmit}>
            <h3 className="form-heading">Accommodation</h3>
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
                <input type="submit" className="nav-buttons-green" value="Create" />
              </div>
            </form>
          </div>
        </Fragment>
      )
    }else{
      return (
        <Confirmation url={"/holidays/"} heading={false} />
      )
    }
  }
}

export default AccommodationForm;
