import React, { Component } from 'react';
import { Icon } from 'rsuite';
import { Link } from 'react-router-dom';

class HomeNavBar extends Component {
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
            <Icon icon="home" size="2x" />
            <h3 className="nav-bar-title">TravelGo</h3>
          </div>
          <div className="nav-bar-links">
            <hr className="nav-horizontal-line" />
            <Link to={"/"} className="nav-bar-link">Welcome</Link>
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

export default HomeNavBar;
