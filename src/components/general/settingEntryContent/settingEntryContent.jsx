import React from "react";
import "./settingEntryContent.css";
import TextField from "../textFields";
import SettingContextType from "../settingContextType";
function SettingEntryContent({
  textArray = [],
  canEdit,
  context,
  contextType,
  setData,
}) {
  const onTitleChange = (index, value) => {
    const arrClone = [...textArray];
    const changedData = { ...textArray[index], title: value };
    arrClone[index] = changedData;

    setData({ context, contextType, textArray: arrClone });
  };
  const onContextChange = (value) => {
    setData({ textArray, contextType, context: value });
  };

  const onContextTypeChange = (value) => {
    setData({ textArray, context, contextType: value });
    console.log(setData);
  };

  return (
    <div className="settingEntryContent">
      {textArray.map(({ language, title }, index) => (
        <TextField
          showSubTitle={false}
          key={language}
          legend={language}
          title={title}
          canEdit={canEdit}
          onTitleChange={(e) => onTitleChange(index, e.target.value)}
        />
      ))}
      <SettingContextType
        canEdit={canEdit}
        context={context}
        contextType={contextType}
        onContextChange={onContextChange}
        onContextTypeChange={onContextTypeChange}
      />
    </div>
  );
}
export default SettingEntryContent;
