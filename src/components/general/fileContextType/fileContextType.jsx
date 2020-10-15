import React from "react";
import "./fileContextType.css";

function FileContextType({ onContextChange, context, canEdit }) {
  const handleContextChange = (value) => {
    if (canEdit) onContextChange(value);
  };
  return (
    <div className="fileContextType">
      <label> Upload file </label>
      <input
        className="fileContextType-input"
        type="file"
        name="file"
        accept=".pdf"
        value={context}
        aria-label="File browser example"
        onChange={(e) => handleContextChange(e.target.value)}
      ></input>
    </div>
  );
}
export default FileContextType;
