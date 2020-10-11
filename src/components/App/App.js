import React, { useEffect } from "react";
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
import { useRecoilState } from "recoil";
import { isLoggedInAtom } from "../../recoilsState";
import {isLoggedIn as checkLogin}  from "../../utils/login"

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
  useEffect(() => {
    checkLogin().then(checkLogedIn => setIsLoggedIn(checkLogedIn))
    const intervalId = setInterval(() => {
      checkLogin().then(checkLogedIn => setIsLoggedIn(checkLogedIn))
    }, 1000*5) 
    return ()=> clearInterval(intervalId)
  }, []);
  if (!isLoggedIn) return <div className="App">
     <Switch>
         <Route exact path={routes.ResetPasswordScreen}>
            <ResetPasswordScreen />
          </Route>

          <Route  path={routes.home}>
          <LoginScreen/>
          </Route>
            
    </Switch>
    </div>
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

         

         
        </Switch>
      </div>
  );
}

export default App;
