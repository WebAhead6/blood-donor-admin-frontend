import React from "react";
import "./urlContextType.css";

function UrlContextType({ onContextChange, context, canEdit }) {
  const handleContextChange = (value) => {
    if (canEdit) onContextChange(value);
  };
  return (
    <input
      className="urlContextType"
      type="url"
      name="url"
      value={context}
      placeholder="https://example.com"
      pattern="https://.*"
      required
      onChange={(e) => handleContextChange(e.target.value)}
    ></input>
  );
}
export default UrlContextType;
