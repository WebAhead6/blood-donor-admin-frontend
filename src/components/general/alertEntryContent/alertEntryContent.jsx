import React from "react";
import "./alertEntryContent.css";
import TextFields from "../textFields";
import BloodTypeFilter from "../bloodTypeFilter";

function AlertEntryContent({
  textArray = [],
  setData,
  bloodType,
  addedDate,
  canEdit,
}) {

  const onChange = (index, fieldName, value) => {
    const arrClone = [...textArray];
    const changedData = { ...textArray[index], [fieldName]: value };
    arrClone[index] = changedData;
    setData({ bloodType, textArray: arrClone, addedDate });
  };
  const onBloodTypeChange = (value) => {
    setData({ bloodType: value, textArray, addedDate });
  };

  return (
    <div className="alertEntryContent">

      <BloodTypeFilter
        canEdit={canEdit}
        valueArray={bloodType}
        onChange={onBloodTypeChange}
      />

      {textArray.map(({ language, context, title }, index) => (
        <TextFields
          key={language}
          legend={language}
          title={title}
          context={context}

          canEdit={canEdit}

          onContextChange={(e) => onChange(index, "context", e.target.value)}
          onTitleChange={(e) => onChange(index, "title", e.target.value)}
        />
      ))}
    </div> 
  );
}
export default AlertEntryContent;
