import React from "react";
import "./settingContextType.css";

function SettingContextType() {
  const [contextType, setContextType] = React.useState("");
  const handleChange = (event) => setContextType(event.target.value);
  return (
    <form className="settingContextType">
      <p>Please select your context type</p>
      <input
        type="radio"
        value="url"
        name="contextType"
        required
        checked={contextType === "url"}
        onChange={handleChange}
      />
      <label>URL</label>
      <input
        type="radio"
        name="contextType"
        value="file"
        checked={contextType === "file"}
        onChange={handleChange}
      />
      <label>File</label>
      <input
        type="radio"
        name="contextType"
        value="rich-text"
        checked={contextType === "rich-text"}
        onChange={handleChange}
      />
      <label>Rich Text</label>
    </form>
  );
}

export default SettingContextType;
