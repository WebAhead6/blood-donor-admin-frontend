import React from "react";
import backEndApiCall from "../../../utils/backEndApiCall";
import "./addEntry.css";
import { newAlertTextAtom, newAlertBloodTypeAtom } from "../../../recoilsState";
import { useRecoilState } from "recoil";
import { addAlert, getAlertsData } from "../../../utils/alert";

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
    (async () => {
      await addAlert(bloodType, entryText);
      const newAlert = await getAlertsData();
      console.log(newAlert);
    })();
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
