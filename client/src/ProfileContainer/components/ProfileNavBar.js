import React, { Component } from 'react';
import { Icon } from 'rsuite';
import { Link } from 'react-router-dom';

class ProfileNavBar extends Component {
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
            <Icon icon="user" size="2x" />
            <h3 className="nav-bar-title">Traveller Profile</h3>
          </div>
          <div className="nav-bar-links">
            <hr className="nav-horizontal-line" />
            <Link to={"/"} className="nav-bar-link">Welcome</Link>
            <Link to={"/profile/edit"} className="nav-bar-link">Edit Profile</Link>
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

export default ProfileNavBar;
