import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";

function NavBar() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <a href="/alerts" className="">
              <span>Alerts</span>
            </a>
            <br/>
            <a href="/goals" className="">
              <span>Goals</span>
            </a>
            <br/>
            <a href="/homeMenu" className="">
              <span>Home Menu</span>
            </a>
            <br/>
            <a href="/locations" className="">
              <span>Locations</span>
            </a>
            <br/>
          </div>
          <div className="navbar_bottom_links">
            <a className="equals selectedNavbarItem " href="/changePassword">
              <span>Change password</span>
            </a>
            <a className="logout_button" href="/logout">
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
