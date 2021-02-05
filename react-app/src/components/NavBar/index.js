import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="navbar-wrapper">
        <div className="navbar-home">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        <div className="navbar-tabs">
          <NavLink to="/orders" exact={true} activeClassName="active">
            Start Your Order
          </NavLink>
          <NavLink to="/menus" exact={true} activeClassName="active">
            Menus
          </NavLink>
        </div>
    </nav>
  );
}

export default NavBar;
