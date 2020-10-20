import React from "react";
import "./locationsScreen.css";
import LocationsButton from "../../general/locationsButton/locationsButton";

const exeBackendUrl = process.env.REACT_APP_API;
function LocationsScreen() {
  return (
    <fieldset className="container">
      <legend>Download for Windows</legend>
      <LocationsButton
        href={`${exeBackendUrl}/exeFiles/fetchDataFromMada.exe`}
        title={"runs once only"}
      />
      <LocationsButton
        href={`${exeBackendUrl}/exeFiles/fetchDataFromMadaEveryHalfHour.exe`}
        title={"runs every half an hour"}
      />
      <LocationsButton
        href={`${exeBackendUrl}/exeFiles/fetchDataFromMadaEveryH exe`}
        title={"runs every hour"}
      />
      <LocationsButton
        href={`${exeBackendUrl}/exeFiles/fetchDataFromMadaEvery2Hours.exe`}
        title={"runs every two hour"}
      />
      <LocationsButton
        href={`${exeBackendUrl}/exeFiles/fetchDataFromMadaEvery3Hours.exe`}
        title={"runs every three hour"}
      />
    </fieldset>
  );
}

export default LocationsScreen;
