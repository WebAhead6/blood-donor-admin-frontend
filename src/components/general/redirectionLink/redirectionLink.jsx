import React from "react";
import "./redirectionLink.css";

function RedirectionLink({ redirectionLink, onredirectionLinkChange, canEdit }) {
  return (
    <div className="textFields">
      <fieldset>
        <label for="title">redirection link</label>
        <br />
        <input
          
          className="textFields-input"
          type="text"
          name="title"
          value={redirectionLink}
          onChange={(e) => canEdit && onredirectionLinkChange(e)}
        />
      </fieldset>
    </div>
  );
}
export default RedirectionLink;
