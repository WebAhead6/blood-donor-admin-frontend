import React from "react";
import "./editEntryBar.css";

const EditEntryBar = function ({
  isEdit,
  onEditClick,
  onCancelClick,
  title,
  onDeleteClick,

  onInputClick,
}) {
  return (
    <div className="aditEntryBar-container">
      <div className="aditEntryBar-title" onClick={onInputClick}>
        {title}
      </div>

      {isEdit ? (
        <input
          type="button"
          value="Edit"
          onClick={onEditClick}
          className="aditEntryBar-addBtn"
        />
      ) : (
        <div className="aditEntryBar-btns">
          <input type="submit" value="Save" className="aditEntryBar-saveBtn" />

          <input
            type="button"
            value="Delete"
            className="aditEntryBar-deleteBtn"
            onClick={onDeleteClick}
          />

          <input
            type="button"
            value="Cancel"
            className="aditEntryBar-cancelBtn"
            onClick={onCancelClick}
          />
        </div>
      )}
    </div>
  );
};

export default EditEntryBar;
