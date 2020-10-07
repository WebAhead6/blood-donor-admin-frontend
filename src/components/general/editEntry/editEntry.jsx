import React from "react";
import backEndApiCall from "../../../utils/backEndApiCall";
import "./editEntry.css";
import { newAlertTextAtom, newAlertBloodTypeAtom } from "../../../recoilsState";
import { useRecoilState } from "recoil";

const EditEntry = function ({ isEdit, onEditClick, onCancelClick }) {
  const [entryText, setEntryText] = useRecoilState(newAlertTextAtom);
  const [bloodType, setBloodType] = useRecoilState(newAlertBloodTypeAtom);

  const handleEditClick = () => {
    if (onEditClick) onEditClick();
  };

  const handleCancelClick = () => {
    if (onCancelClick) onCancelClick();
  };

  //   const handleSaveClick = () => {
  //     backEndApiCall("POST", "/alerts", {});
  //   };
  return (
    <div className="aditEntry-container">
      Alerts
      {isEdit ? (
        <button onClick={handleEditClick} className="aditEntry-addBtn">
          Edit
        </button>
      ) : (
        <div className="aditEntry-btns">
          <button className="aditEntry-saveBtn">Save</button>
          <button className="aditEntry-deleteBtn">Delete</button>
          <button className="aditEntry-cancelBtn" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default EditEntry;
