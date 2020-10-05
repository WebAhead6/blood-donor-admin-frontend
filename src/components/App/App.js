import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//general import
import NavBar from "../general/navBar/navBar.jsx";

//screens import
import HomeScreen from "../screens/homeScreen/homeScreen";
import AlertScreen from "../screens/alertScreen/index";
import ChangePassowrdScreen from "../screens/changePassowrdScreen/changePassowrdScreen.jsx";
import GoalsScreen from "../screens/goalsScreen/goalsScreen.jsx";
import LocationsScreen from "../screens/locationsScreen/locationsScreen.jsx";
import LoginScreen from "../screens/loginScreen/loginScreen.jsx";
import ResetPasswordScreen from "../screens/resetPasswordScreen/resetPasswordScreen.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>

          <Route exact path="/alertscreen">
            <AlertScreen />
          </Route>

          <Route exact path="/changepassowrdscreen">
            <ChangePassowrdScreen />
          </Route>

          <Route exact path="/goalsscreen">
            <GoalsScreen />
          </Route>

          <Route exact path="/locationsscreen">
            <LocationsScreen />
          </Route>

          <Route exact path="/loginscreen">
            <LoginScreen />
          </Route>

          <Route exact path="/resetpasswordscreen">
            <ResetPasswordScreen />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
