import React from "react";
import "./textFields.css";

function TextFields({
  legend,
  title,
  context,
  onTitleChange,
  onContextChange,
  canEdit,
  showSubTitle,
}) {
  return (
    <div className="textFields">
      <fieldset>
        <legend>{legend}</legend>

        <label>title</label>
        <br />
        <input
          required
          className="textFields-input"
          type="text"
          name="title"
          value={title}
          onChange={(e) => canEdit && onTitleChange(e)}
        />
        <br />
        {showSubTitle ? (
          <>
            {" "}
            <label>sub-title</label>
            <br />
            <input
              required
              className="textFields-input"
              type="text"
              name="title"
              value={context}
              onChange={(e) => canEdit && onContextChange(e)}
            />
          </>
        ) : (
          ""
        )}
      </fieldset>
    </div>
  );
}

export default TextFields;
