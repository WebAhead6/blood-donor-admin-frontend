import React from "react";

import "./addEntryBar.css";

const AddEntryBar = function ({
  isAdd,
  onAddClick,
  onCancelClick,
  onSaveClick,
  name,
}) {
  const handleAddClick = () => {
    if (onAddClick) onAddClick();
  };

  const handleCancelClick = () => {
    if (onCancelClick) onCancelClick();
  };

  const handleSaveClick = () => {
    if (onSaveClick) onSaveClick();
  };
  return (
    <div className="addEntryBar-container">
      {name}
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
