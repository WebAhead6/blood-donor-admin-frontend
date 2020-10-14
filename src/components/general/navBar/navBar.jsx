import React from "react";
import { withRouter, NavLink, useLocation, useHistory } from "react-router-dom";
import { routes } from "../../../constants";
import { logOut } from "../../../utils/login";
import { useRecoilState } from "recoil";
import { isLoggedInAtom } from "../../../recoilsState";

import "./navBar.css";

function NavBar() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);

  return (
    <div className="mainWrapper">
      <div className="mainWrapper_navbar">
        <div className="navbar_button_container ">
          <div className="navbar_bottom_links ">
            <img
              className="nav_icon"
              src="/img/img-logo.svg"
              alt="blood-donor"
            />
            <NavLink
              className={pathname === routes.alertScreen ? "selected" : ""}
              to={routes.alertScreen}
            >
              <li>Alerts</li>
            </NavLink>
            <br />
            <NavLink
              className={pathname === routes.GoalsScreen ? "selected" : ""}
              to={routes.GoalsScreen}
            >
              <li>goals</li>
            </NavLink>
            <br />
            <NavLink
              className={pathname === routes.HomeMenuScreen ? "selected" : ""}
              to={routes.HomeMenuScreen}
            >
              <li>home Menu</li>
            </NavLink>
            <br />
            <NavLink
              className={pathname === routes.LocationsScreen ? "selected" : ""}
              to={routes.LocationsScreen}
            >
              <li>locations</li>
            </NavLink>
            <br />
            <br />
            <NavLink
              className={
                pathname === routes.GeneralSettingScreen ? "selected" : ""
              }
              to={routes.GeneralSettingScreen}
            >
              <li>general Setting</li>
            </NavLink>
            <br />
          </div>
          <div className="navbar_bottom_links">
            <NavLink
              className={
                pathname === routes.ChangePassowrdScreen ? "selected" : ""
              }
              to={routes.ChangePassowrdScreen}
            >
              <li>changePassword</li>
            </NavLink>
            <br />

            <a
              href="#"
              className="logout_button"
              onClick={() =>
                logOut().then(() => {
                  history.push(routes.LoginScreen);
                  setIsLoggedIn(false);
                })
              }
            >
              {" "}
              <li>logout</li>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

//export default NavBar;
export default withRouter(NavBar);
