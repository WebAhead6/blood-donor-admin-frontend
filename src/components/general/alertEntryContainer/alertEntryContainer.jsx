import React, { Fragment } from "react";
import EditEntryBar from "../editEntryBar";
import AlertEntryContent from "../alertEntryContent";
import { useRecoilState } from "recoil";
import { getApiAlertsAtom } from "../../../recoilsState";
import { deleteAlert, editAlert, getAlertsData } from "../../../utils/alert";

function AlertEntryContainer({ id, textArray, bloodType, addedDate }) {
  const [isEdit, setIsEdit] = React.useState(true);
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
  };

  const handleDelete = async () => {
    await deleteAlert(id);
    const data = await getAlertsData();
    setGetAlert(data);
  };
  const handleCancel = async () => {
    setLocalState({ textArray, bloodType, addedDate });
    setIsEdit(true);
  };
  return (
    <div>
      <EditEntryBar
        isEdit={isEdit}
        onEditClick={() => setIsEdit(false)}
        onCancelClick={handleCancel}
        onDeleteClick={handleDelete}
        onSaveClick={handleSave}
        title={localState.textArray[2].title}
      />
      {!isEdit ? (
        <AlertEntryContent
          textArray={localState.textArray}
          addedDate={localState.addedDate}
          bloodType={localState.bloodType}
          setData={setLocalState}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default AlertEntryContainer;
