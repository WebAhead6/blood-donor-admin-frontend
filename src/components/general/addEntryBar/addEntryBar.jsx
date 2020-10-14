import React from "react";

import "./addEntryBar.css";

const AddEntryBar = function ({
  isAdd,
  onAddClick,
  onCancelClick,

  name,
}) {
  const handleAddClick = () => {
    if (onAddClick) onAddClick();
  };

  const handleCancelClick = () => {
    if (onCancelClick) onCancelClick();
  };

  return (
    <div className="addEntryBar-container">
      {name}
      {isAdd ? (
        <input
          type="button"
          value="add"
          onClick={handleAddClick}
          className="addEntryBar-addBtn"
        />
      ) : (
        <div className="addEntryBar-btns">
          <input type="submit" value="Save" className="addEntryBar-saveBtn" />

          <input
            type="button"
            value="Cancel"
            className="addEntryBar-cancelBtn"
            onClick={handleCancelClick}
          />
        </div>
      )}
    </div>
  );
};

export default AddEntryBar;
