import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from './logo.png'
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  const history = useHistory()

  return (
    <nav className="navbar-wrapper">
        <div className="navbar-home">
          <img
            className="navbar-home_logo"
            onClick={() => history.push('/')}
            src={logo}
            alt=""
          />
        </div>
        <div className="navbar-tabs">
          <NavLink to="/orders" exact={true} activeClassName="active">
            Start Your Order
          </NavLink>
          <br/>
          <NavLink to="/menus" exact={true} activeClassName="active">
            Menus
          </NavLink>
        </div>
    </nav>
  );
}

export default NavBar;
