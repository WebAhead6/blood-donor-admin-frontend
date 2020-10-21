import React from "react";
import {
  withRouter,
  NavLink,
  useLocation,
  useHistory,
  Route,
} from "react-router-dom";
import { routes } from "../../../constants";
import { logOut } from "../../../utils/login";
import { useRecoilState } from "recoil";
import { isLoggedInAtom } from "../../../recoilsState";
import "./navBar.css";
const navBarItems = [
  { label: "Alerts", route: routes.alertScreen },
  { label: "Goals", route: routes.GoalsScreen },
  { label: "Home Menu", route: routes.HomeMenuScreen },
  { label: "Locations", route: routes.LocationsScreen },
  { label: "General Settings", route: routes.GeneralSettingScreen },
  { label: "Change Password", route: routes.ChangePassowrdScreen },
  { label: "Logout", route: routes.logout },
];
function NavBar() {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <div className="navBar">
      <img className="navBar-icon" src="/img/img-logo.svg" alt="blood-donor" />

      {navBarItems.map(({ label, route }) => (
        <NavLink
          className={`navBar-route ${
            pathname === route ? "navBar-selected" : ""
          }`}
          to={route}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

//export default NavBar;
export default withRouter(NavBar);
