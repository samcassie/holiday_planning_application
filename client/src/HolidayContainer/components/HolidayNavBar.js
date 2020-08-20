import React, { Component } from 'react';
import { Icon } from 'rsuite';
import { Link } from 'react-router-dom';

class HolidayNavBar extends Component {
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(){
    this.props.logOut();
  }

  render(){
    return (
      <div className="secondary-nav-bar">
        <nav>
          <div className="nav-bar-heading">
            <Icon icon="map" size="2x" />
            <h3 className="nav-bar-title">Holidays</h3>
          </div>
          <div className="nav-bar-links">
            <hr className="nav-horizontal-line" />
            <Link to={"/holidays/welcome"} className="nav-bar-link">Welcome</Link>
            <Link to={"/holidays"} className="nav-bar-link">My Holidays</Link>
            <Link to={"/holidays/new"} className="nav-bar-link">Create a Holiday</Link>
            <hr className="nav-horizontal-line" />
          </div>
        </nav>
        <div>
          <p>Logged in as {this.props.selectedTraveller.name}</p>
          <Link to={"/"} className="nav-buttons-green" onClick={this.handleLogOut}>Logout</Link>
        </div>
      </div>
    )
  }
}

export default HolidayNavBar;
