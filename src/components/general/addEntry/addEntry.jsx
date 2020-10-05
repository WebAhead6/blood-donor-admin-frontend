import React from "react";
import "./addEntry.css";

const AddEntry = function () {
  const [isAdd, setIsAdd] = React.useState(false);

  const handleAddClick = () => {
    setIsAdd(true);
  };

  const handleCancelClick = () => {
    setIsAdd(false);
  };
  return (
    <div className="addEntry-container">
      Alerts
      {!isAdd ? (
        <button onClick={handleAddClick} className="addEntry-addBtn">
          add
        </button>
      ) : (
        <div className="addEntry-btns">
          <button className="addEntry-saveBtn">Save</button>
          <button className="addEntry-cancelBtn" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEntry;
