import React, { Fragment } from "react";
import EditEntryBar from "../editEntryBar";
import AlertEntryContent from "../alertEntryContent";
import { useRecoilState } from "recoil";
import { getApiAlertsAtom } from "../../../recoilsState";
import { deleteAlert, editAlert, getAlertsData } from "../../../utils/alert";

function AlertEntryContainer({ id, textArray, bloodType, addedDate }) {
  const [isEdit, setIsEdit] = React.useState(true);
  const [canEdit, setCanEdit] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const [, setGetAlert] = useRecoilState(getApiAlertsAtom);
  const [localState, setLocalState] = React.useState({
    textArray,
    bloodType,
    addedDate,
  });
  console.log(addedDate);
  const handleSave = async () => {
    await editAlert(id, localState);
    const data = await getAlertsData();
    setGetAlert(data);
    setIsOpen(false);
  };

  const handleDelete = async () => {
    await deleteAlert(id);
    const data = await getAlertsData();
    setGetAlert(data);
  };
  const handleCancel = async () => {
    setLocalState({ textArray, bloodType, addedDate });
    setIsEdit(true);
    setCanEdit(false);
  };
  const handleEdit = () => {
    setIsEdit(false);
    setIsOpen(true);
    setCanEdit(true);
  };
  const handleBarClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <EditEntryBar
        isEdit={isEdit}
        onEditClick={handleEdit}
        onCancelClick={handleCancel}
        onDeleteClick={handleDelete}
        onSaveClick={handleSave}
        title={localState.textArray[2].title}
        onInputClick={handleBarClick}
      />
      {isOpen ? (
        <AlertEntryContent
          textArray={localState.textArray}
          addedDate={localState.addedDate}
          bloodType={localState.bloodType}
          setData={setLocalState}
          canEdit={canEdit}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default AlertEntryContainer;
