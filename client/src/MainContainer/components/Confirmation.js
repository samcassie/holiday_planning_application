import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Confirmation extends Component {
  constructor(props){
    super(props);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm(){
    if(this.props.toggleConfirmed){
      this.props.toggleConfirmed()
      console.log("toggled");
    }
  }

  render(){
    if(this.props.heading){
      return (
        <div className="component">
          <div className="container-header">
            <h1 className="container-title">Success!</h1>
          </div>
          <div className="confirmation-screen">
            <p>Your changes have been saved.</p>
            <div className="buttons-centered">
              <Link onClick={this.handleConfirm} className="nav-buttons-white" to={this.props.url}>Continue</Link>
            </div>
          </div>
        </div>
      )
    }else{
      return (
        <div className="component">
          <div className="confirmation-screen">
            <p>Success! Your changes have been saved.</p>
            <div className="buttons-centered">
              <Link onClick={this.handleConfirm} className="nav-buttons-white" to={this.props.url}>Continue</Link>
            </div>
          </div>
        </div>
      )
    }
  }
}



export default Confirmation;
