import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class TrainForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      train: {
        planType: "TRAIN",
        date: "",
        bookingConfirmation: "",
        departureStation: "",
        arrivalStation: "",
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
    let train = this.state.train;
    train[propertyName] = event.target.value;
    this.setState({train: train})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate('trains', this.state.train)
    this.setState({confirmed: true})
  }

  render(){
    if(!this.state.confirmed){
      return (
        <Fragment>
          <div className="form-container">
            <form className="form-content" onSubmit={this.handleSubmit}>
              <h3 className="form-heading">Train</h3>
              <div className="form-item">
                <label htmlFor="date">Date:</label>
                <input type="date" name="date" onChange={this.handleChange} value={this.state.train.date} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="bookingConfirmation">Booking Confirmation:</label>
                <input type="text" name="bookingConfirmation" onChange={this.handleChange} value={this.state.train.bookingConfirmation} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="departureStation">Departure Station:</label>
                <input type="text" name="departureStation" onChange={this.handleChange} value={this.state.train.departureStation} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="arrivalStation">Arrival Station:</label>
                <input type="text" name="arrivalStation" onChange={this.handleChange} value={this.state.train.arrivalStation} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="departureTime">Departure Time:</label>
                <input type="text" name="departureTime" onChange={this.handleChange} value={this.state.train.departureTime} /><br />
              </div>
              <div className="form-item">
                <label htmlFor="arrivalTime">Arrival Time:</label>
                <input type="text" name="arrivalTime" onChange={this.handleChange} value={this.state.train.arrivalTime} /><br />
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

export default TrainForm;
