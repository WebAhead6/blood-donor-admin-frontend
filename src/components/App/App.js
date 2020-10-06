import React from "react";
import { Switch, Route } from "react-router-dom";
// import constants
import {routes} from "../../constants"
//general import
import NavBar from "../general/navBar/navBar.jsx";
//screen componetnts import
import HomeScreen from "../screens/homeScreen";
import AlertScreen from "../screens/alertScreen";
import ChangePassowrdScreen from "../screens/changePassowrdScreen";
import GoalsScreen from "../screens/goalsScreen";
import LocationsScreen from "../screens/locationsScreen";
import LoginScreen from "../screens/loginScreen";
import ResetPasswordScreen from "../screens/resetPasswordScreen";
import HomeMenuScreen from "../screens/homeMenuScreen";

import "./App.css";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path={routes.home}>
            <HomeScreen />
          </Route>

          <Route exact path={routes.alertScreen}>
            <AlertScreen />
          </Route>

          <Route exact path={routes.ChangePassowrdScreen}>
            <ChangePassowrdScreen />
          </Route>

          <Route exact path={routes.GoalsScreen}>
            <GoalsScreen />
          </Route>

          <Route exact path={routes.HomeMenuScreen}>
            <HomeMenuScreen />
          </Route>

          <Route exact path={routes.LocationsScreen}>
            <LocationsScreen />
          </Route>

          <Route exact path={routes.LoginScreen}>
            <LoginScreen />
          </Route>

          <Route exact path={routes.ResetPasswordScreen}>
            <ResetPasswordScreen />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
