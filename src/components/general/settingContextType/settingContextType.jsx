import React from "react";
import "./settingContextType.css";

function SettingContextType() {
  return (
    <form className="settingContextType">
      <p>Please select your context type</p>
      <input type="radio" value="url" />
      <label>URL</label>
      <input type="radio" name="gender" value="file" />
      <label>File</label>
      <input type="radio" id="other" value="rich-text" />
      <label>Rich Text</label>
    </form>
  );
}

export default SettingContextType;
