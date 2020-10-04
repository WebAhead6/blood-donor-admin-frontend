import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";

function NavBar() {
  return (
    <div className="mainWrapper">
      <div className="mainWrapper_navbar">
        <div className="navbar_button_container ">
          <div className="navbar_bottom_links ">
            <Link  to="/alertscreen">
              <li className=""><span >Alerts</span></li>
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
            <Link to="/logout">
              <li>logout</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
