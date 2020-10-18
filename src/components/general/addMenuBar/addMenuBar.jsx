import React from "react";

import "./addMenuBar.css";

const AddMenuBar = function ({
  isAdd,
  onAddClick,
  onCancelClick,
  onSaveClick,
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
    <div className="addMenuBar-container">
      Home Menu
      {isAdd ? (
        <button onClick={handleAddClick} className="addMenuBar-addBtn">
          add
        </button>
      ) : (
        <div className="addMenuBar-btns">
          <button className="addMenuBar-saveBtn" onClick={handleSaveClick}>
            Save
          </button>
          <button className="addMenuBar-cancelBtn" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMenuBar;
