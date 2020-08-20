import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'rsuite';

const NavBar = (props) => {

  return (
    <nav className="sidenav">
      <ul className="no-bullet">
        <li>
          <Link className="nav-icon" to="/">
            <img src="/images/logo.png" width="40" height="40" alt="Logo"/>
          </Link>
        </li>
        <br />
        <li>
          <Link className="nav-icon" to="/">
            <Icon icon="home" size="2x" />
          </Link>
        </li>
        <li>
          <Link className="nav-icon" to="/profile">
            <Icon icon="user" size="2x" />
          </Link>
        </li>
        <li className="navLink">
          <Link className="nav-icon" to="/holidays/welcome">
            <Icon icon="map" size="2x" />
          </Link>
        </li>
        <li className="navLink">
          <Link className="nav-icon" to="/journal/welcome" >
            <Icon icon="book" size="2x" />
          </Link>
        </li>

      </ul>
    </nav>
  )
}

export default NavBar;
