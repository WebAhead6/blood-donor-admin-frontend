import React from "react";
import "./entryTitle.css";

function EntryTitle() {
  const languages = ["Hebraw", "English", "Arabic"];
  return (
    <div>
      {languages.map((language) => (
        <fieldset>
          <legend>{language}</legend>

          <label for="title">title</label>
          <br />
          <input className="entryTitle-input" type="text" name="title" />
          <br />
          <label for="sub-title">sub-title</label>
          <br />
          <input className="entryTitle-input" type="text" name="title" />
        </fieldset>
      ))}
    </div>
  );
}

export default EntryTitle;
