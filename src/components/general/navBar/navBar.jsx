import React from "react";
import { Link } from "react-router-dom";
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
            <Link className={pathname ==="/alertscreen" ? "selected" :""} to="/alertscreen">
              <li >Alerts</li>
            </Link>
            <br />
            <Link className={pathname ==="/goalsscreen" ? "selected" :""} to="/goalsscreen">
              <li >goals</li>
            </Link>
            <br />
            <Link className={pathname ==="/homeMenu" ? "selected" :""} to="/homeMenu">
              <li >home Menu</li>
            </Link>
            <br />
            <Link className={pathname ==="/locationsscreen" ? "selected" :""} to="/locationsscreen">
              <li >locations</li>
            </Link>
            <br />
          </div>
          <div className="navbar_bottom_links">

            <Link className={pathname ==="/changepassowrdscreen" ? "selected" :""} to="/changepassowrdscreen">
              <li >changePassword</li>
            </Link>
            <br />
            <Link className="logout_button" to="/logout">
              <li>logout</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
