import React from "react";
import "./alertEntryContainer.css";
import TextFields from "../textFields";
import BloodTypeFilter from "../../general/bloodTypeFilter";

function AlertEntryContainer({ data = [], setData }) {
  const onChange = (index, fieldName, value) => {
    const arrClone = [...data];
    const changedData = { ...data[index], [fieldName]: value };
    arrClone[index] = changedData;
    setData(arrClone);
  };

  return (
    <div className="alertScreen">
      <BloodTypeFilter />
      {data.map(({ language, context, title }, index) => (
        <TextFields
          legend={language}
          title={title}
          context={context}
          onContextChange={(e) => onChange(index, "context", e.target.value)}
          onTitleChange={(e) => onChange(index, "title", e.target.value)}
        />
      ))}
    </div>
  );
}
export default AlertEntryContainer;
