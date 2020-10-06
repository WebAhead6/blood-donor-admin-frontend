import React from "react";
import { withRouter,NavLink } from "react-router-dom";
import {useLocation} from "react-router-dom"
import { routes } from "../../../constants";

import "./navBar.css";



function NavBar() {
    
  const {pathname} = useLocation()


  return (
    <div className="mainWrapper">
      <div className="mainWrapper_navbar">
        <div className="navbar_button_container ">
          <div className="navbar_bottom_links ">
          <img className="nav_icon" src="/img/img-logo.svg" alt="blood-donor" />
            <NavLink className={pathname === routes.alertScreen ? "selected" :""} to={routes.alertScreen}>
              <li >Alerts</li>
            </NavLink>
            <br />
            <NavLink className={pathname ===routes.GoalsScreen ? "selected" :""} to={routes.GoalsScreen}>
              <li >goals</li>
            </NavLink>
            <br />
            <NavLink className={pathname ===routes.HomeMenuScreen ? "selected" :""} to={routes.HomeMenuScreen}>
              <li >home Menu</li>
            </NavLink>
            <br />
            <NavLink className={pathname ===routes.LocationsScreen ? "selected" :""} to={routes.LocationsScreen}>
              <li >locations</li>
            </NavLink>
            <br />
          </div>
          <div className="navbar_bottom_links">

            <NavLink className={pathname ===routes.ChangePassowrdScreen ? "selected" :""} to={routes.ChangePassowrdScreen}>
              <li >changePassword</li>
            </NavLink>
            <br />
            <NavLink className="logout_button" to={routes.logout}>
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
