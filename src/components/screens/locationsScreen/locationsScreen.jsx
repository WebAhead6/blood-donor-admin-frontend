import React from "react";
import "./locationsScreen.css";
import LocationsButton from "../../general/locationsButton/locationsButton"

const exeBackendUrl = process.env.REACT_APP_API
function LocationsScreen() {


  return (
    <fieldset className="container">
      <legend>Download for Windows</legend>
      <LocationsButton href={`${exeBackendUrl}/exeFiles/fetchDataFromMada-win.exe`} title={"runs once only"} />
      <LocationsButton href={`${exeBackendUrl}/exeFiles/fetchDataFromMadaEveryHalfHour-win.exe`} title={"runs every half an hour"} />
      <LocationsButton href={`${exeBackendUrl}/exeFiles/fetchDataFromMadaEveryHour-win.exe`} title={"runs every hour"} />
      <LocationsButton href={`${exeBackendUrl}/exeFiles/fetchDataFromMadaEvery2Hours-win.exe`} title={"runs every two hour"} />
      <LocationsButton href={`${exeBackendUrl}/exeFiles/fetchDataFromMadaEvery3Hours-win.exe`} title={"runs every three hour"} />
    </fieldset>
  );
}

export default LocationsScreen;
