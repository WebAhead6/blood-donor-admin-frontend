import React from "react";
import { withRouter,NavLink } from "react-router-dom";
import {useLocation} from "react-router-dom"

import "./navBar.css";



function NavBar() {
    
  const {pathname} = useLocation()


  return (
    <div className="mainWrapper">
      <div className="mainWrapper_navbar">
        <div className="navbar_button_container ">
          <div className="navbar_bottom_links ">
          <img className="nav_icon" src="/img/img-logo.svg" alt="blood-donor" />
            <NavLink className={pathname ==="/alertscreen" ? "selected" :""} to="/alertscreen">
              <li >Alerts</li>
            </NavLink>
            <br />
            <NavLink className={pathname ==="/goalsscreen" ? "selected" :""} to="/goalsscreen">
              <li >goals</li>
            </NavLink>
            <br />
            <NavLink className={pathname ==="/homeMenu" ? "selected" :""} to="/homeMenu">
              <li >home Menu</li>
            </NavLink>
            <br />
            <NavLink className={pathname ==="/locationsscreen" ? "selected" :""} to="/locationsscreen">
              <li >locations</li>
            </NavLink>
            <br />
          </div>
          <div className="navbar_bottom_links">

            <NavLink className={pathname ==="/changepassowrdscreen" ? "selected" :""} to="/changepassowrdscreen">
              <li >changePassword</li>
            </NavLink>
            <br />
            <NavLink className="logout_button" to="/logout">
              <li>logout</li>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

//export default NavBar;
export default withRouter(NavBar);
