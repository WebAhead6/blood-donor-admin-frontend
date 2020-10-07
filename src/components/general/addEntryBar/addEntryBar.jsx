import React from "react";
import backEndApiCall from "../../../utils/backEndApiCall";
import "./addEntryBar.css";
import { newAlertTextAtom, newAlertBloodTypeAtom } from "../../../recoilsState";
import { useRecoilState } from "recoil";
import { addAlert, getAlertsData } from "../../../utils/alert";

const AddEntryBar = function ({ isAdd, onAddClick, onCancelClick }) {
  const [entryText, setEntryText] = useRecoilState(newAlertTextAtom);
  const [bloodType, setBloodType] = useRecoilState(newAlertBloodTypeAtom);

  const handleAddClick = () => {
    if (onAddClick) onAddClick();
  };

  const handleCancelClick = () => {
    if (onCancelClick) onCancelClick();
  };

  const handleSaveClick = () => {
    (async () => {
      await addAlert(bloodType, entryText);
      const newAlert = await getAlertsData();
      console.log(newAlert);
    })();
  };
  return (
    <div className="addEntryBar-container">
      Alerts
      {isAdd ? (
        <button onClick={handleAddClick} className="addEntryBar-addBtn">
          add
        </button>
      ) : (
        <div className="addEntryBar-btns">
          <button className="addEntryBar-saveBtn" onClick={handleSaveClick}>
            Save
          </button>
          <button className="addEntryBar-cancelBtn" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEntryBar;
