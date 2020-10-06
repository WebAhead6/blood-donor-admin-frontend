import React from "react";
import "./textFields.css";

function TextFields({
  legend,
  title,
  context,
  onTitleChange,
  onContextChange,
}) {
  return (
    <div className="textFields">
      <fieldset>
        <legend>{legend}</legend>

        <label for="title">title</label>
        <br />
        <input
          className="textFields-input"
          type="text"
          name="title"
          value={title}
          onChange={onTitleChange}
        />
        <br />
        <label for="sub-title">sub-title</label>
        <br />
        <input
          className="textFields-input"
          type="text"
          name="title"
          value={context}
          onChange={onContextChange}
        />
      </fieldset>
    </div>
  );
}

export default TextFields;
