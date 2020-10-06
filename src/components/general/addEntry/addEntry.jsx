import React from "react";
import backEndApiCall from "../../../utils/backEndApiCall";
import "./addEntry.css";
import { newAlertTextAtom, newAlertBloodTypeAtom } from "../../../recoilsState";
import { useRecoilState } from "recoil";

const AddEntry = function ({ isAdd, onAddClick, onCancelClick }) {
  const [entryText, setEntryText] = useRecoilState(newAlertTextAtom);
  const [bloodType, setBloodType] = useRecoilState(newAlertBloodTypeAtom);

  const handleAddClick = () => {
    if (onAddClick) onAddClick();
  };

  const handleCancelClick = () => {
    if (onCancelClick) onCancelClick();
  };

  const handleSaveClick = () => {
    backEndApiCall("/alerts", {
      bloodType: bloodType.value,
      title: {
        he: entryText[0].title,
        ar: entryText[1].title,
        en: entryText[2].title,
      },
      context: {
        he: entryText[0].context,
        ar: entryText[1].context,
        en: entryText[2].context,
      },
    });
  };
  return (
    <div className="addEntry-container">
      Alerts
      {isAdd ? (
        <button onClick={handleAddClick} className="addEntry-addBtn">
          add
        </button>
      ) : (
        <div className="addEntry-btns">
          <button className="addEntry-saveBtn" onClick={handleSaveClick}>
            Save
          </button>
          <button className="addEntry-cancelBtn" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEntry;
