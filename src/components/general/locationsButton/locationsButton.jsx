import React from "react";
import "./locationButton.css";

function LocationsButton(props) {
  return (
    <div>
      <a href={props.href} target="_blank" download>
        <button className="button">{props.title}</button>
      </a>
      <div className="space"></div>
    </div>
  );
}

export default LocationsButton;
