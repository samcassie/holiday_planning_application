import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class TrainEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      train: this.props.train,
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
    let train = this.state.train;
    train[propertyName] = event.target.value;
    this.setState({train: train})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onUpdate('trains', this.state.train, this.state.train.id)
    this.setState({confirmed: true})
  }

  handleWarning(){
    this.setState({warned: true})
  }

  handleDelete(){
    this.props.onDelete('trains', this.state.train.id)
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
              <h3 className="form-heading">Edit Train</h3>
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

export default TrainEdit;
