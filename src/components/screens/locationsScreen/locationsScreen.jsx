import React from "react";
import "./locationsScreen.css";
import LocationsButton from "../../general/locationsButton/locationsButton"

function LocationsScreen() {
  return (
    <fieldset className="container">
      <legend>Download for Windows</legend>
      <LocationsButton href={`/exeFiles/fetchDataFromMada-win.exe`} title={"runs once only"} />
      <LocationsButton href={"/exeFiles/fetchDataFromMadaEveryHalfHour-win.exe"} title={"runs every half an hour"} />
      <LocationsButton href={"/exeFiles/fetchDataFromMadaEveryHour-win.exe"} title={"runs every hour"} />
      <LocationsButton href={"/exeFiles/fetchDataFromMadaEvery2Hours-win.exe"} title={"runs every two hour"} />
      <LocationsButton href={"/exeFiles/fetchDataFromMadaEvery3Hours-win.exe"} title={"runs every three hour"} />
    </fieldset>
  );
}

export default LocationsScreen;
