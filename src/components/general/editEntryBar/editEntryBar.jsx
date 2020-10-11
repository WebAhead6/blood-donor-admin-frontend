import React from "react";
import "./editEntryBar.css";

const EditEntryBar = function ({
  isShow,
  isEdit,
  onEditClick,
  onShowClick,
  onCancelClick,
  title,
  onDeleteClick,
  onSaveClick,
}) {
  return (
    <div className="aditEntryBar-container">
      {title}
      {isShow ? (
         <button onClick={onShowClick} className="aditEntryBar-addBtn">
         show
       </button>
      ) : ( <button onClick={onShowClick} className="aditEntryBar-addBtn">
      Edit
    </button>
    
    )}

      {isEdit ? (
        <button onClick={onEditClick} className="aditEntryBar-addBtn">
          Edittt
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


// {isEdit ? (
//   <button onClick={onEditClick} className="aditEntryBar-addBtn">
//     Edit
//   </button>
// ) : (
//   <div className="aditEntryBar-btns">
//     <button className="aditEntryBar-saveBtn" onClick={onSaveClick}>
//       Save
//     </button>
//     <button className="aditEntryBar-deleteBtn" onClick={onDeleteClick}>
//       Delete
//     </button>
//     <button className="aditEntryBar-cancelBtn" onClick={onCancelClick}>
//       Cancel
//     </button>
//   </div>
// )}