import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class HolidayPublish extends Component {
  constructor(props){
    super(props);
    this.state = {
      confirmed: false
    }

    this.handlePublish = this.handlePublish.bind(this);
  }

  handlePublish(){
    let holiday = this.props.holiday;
    holiday.published = true;
    this.props.onPublish(holiday.id, holiday)
    this.setState({confirmed: true})
  }

  render(){
    if(!this.state.confirmed){
      return(
        <Fragment>
          <div className="container-header">
            <h1 className="container-title">Publish Holiday</h1>
          </div>
          <div className="confirmation-screen">
            <p>Are you sure you want to publish the holiday {this.props.holiday.title}?</p>
            <p>This will permanently move the holiday to your Journal.</p>
            <div className="buttons-centered">
              <button className="nav-buttons-green" onClick={this.handlePublish}>Publish</button>
            </div>
          </div>
        </Fragment>
      )
    }else{
      return (
        <Confirmation url="/holidays" heading={true}/>
      )
    }
  }
}

export default HolidayPublish;
