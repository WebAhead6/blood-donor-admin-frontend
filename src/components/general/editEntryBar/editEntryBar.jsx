import React from "react";
import "./editEntryBar.css";

const EditEntryBar = function ({
  isEdit,
  onEditClick,
  onCancelClick,
  title,
  onDeleteClick,
  onSaveClick,

  onInputClick,
}) {
  return (
    <div className="aditEntryBar-container">
      <div className="aditEntryBar-title" onClick={onInputClick}>
        {title}
      </div>

      {isEdit ? (
        <button onClick={onEditClick} className="aditEntryBar-addBtn">
          Edit
        </button>
      ) : (
        <div className="aditEntryBar-btns">
          <button className="aditEntryBar-saveBtn" onClick={onSaveClick}>
            Save
          </button>
          <button className="aditEntryBar-deleteBtn" onClick={onDeleteClick}>
            Delete
          </button>
          <button className="aditEntryBar-cancelBtn" onClick={onCancelClick}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default EditEntryBar;
