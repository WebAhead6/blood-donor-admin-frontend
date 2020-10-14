import React from "react";
import "./settingEntryContent.css";
import TextField from "../textFields";
import SettingContextType from "../settingContextType";
function SettingEntryContent({ textArray = [], canEdit }) {
  return (
    <div className="barStyle">
      {textArray.map(({ language, title }, index) => (
        <TextField
          showSubTitle={false}
          key={language}
          legend={language}
          title={title}
          canEdit={canEdit}
          onTitleChange={(e) => e.target.value}
        />
      ))}
      <SettingContextType />
    </div>
  );
}
export default SettingEntryContent;
