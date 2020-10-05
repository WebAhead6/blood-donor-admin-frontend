import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";

function NavBar() {
    


  return (
    <div className="mainWrapper">
      <div className="mainWrapper_navbar">
        <div className="navbar_button_container ">
          <div className="navbar_bottom_links ">
          <img className="nav_icon" src="/img/img-logo.svg" alt="blood-donor" />
            <Link  to="/alertscreen">
              <li>Alerts</li>
            </Link>
            <br />
            <Link to="/goalsscreen">
              <li>goals</li>
            </Link>
            <br />
            <Link to="/homeMenu">
              <li>home Menu</li>
            </Link>
            <br />
            <Link to="/locationsscreen">
              <li>locations</li>
            </Link>
            <br />
          </div>
          <div className="navbar_bottom_links">
            <Link to="/changepassowrdscreen">
              <li>changePassword</li>
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
