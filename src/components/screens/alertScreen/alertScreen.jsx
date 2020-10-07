import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { newAlertTextAtom, getNewAlertsAtom } from "../../../recoilsState";
import AddEntryBar from "../../general/addEntryBar";
import EditEntry from "../../general/editEntry";
import AlertEntryContainer from "../../general/alertEntryContainer";
import { getAlertsData } from "../../../utils/alert";

import "./alertScreen.css";

function AlertScreen() {
  const [newEntryData, setNewEntryData] = useRecoilState(newAlertTextAtom);
  const [getAlert, setGetAlert] = useRecoilState(getNewAlertsAtom);
  const [isAdd, setIsAdd] = React.useState(true);
  const [isEdit, setIsEdit] = React.useState(true);

  React.useEffect(() => {
    setGetAlert(getAlertsData);
  }, []);
  return (
    <div className="alertScreen">
      <AddEntryBar
        isAdd={isAdd}
        onAddClick={() => setIsAdd(false)}
        onCancelClick={() => setIsAdd(true)}
      />
      {!isAdd ? (
        <AlertEntryContainer data={newEntryData} setData={setNewEntryData} />
      ) : (
        ""
      )}
      <EditEntry
        isEdit={isEdit}
        onEditClick={() => setIsEdit(false)}
        onCancelClick={() => setIsEdit(true)}
      />
      {!isEdit ? (
        <AlertEntryContainer data={getAlert} setData={setGetAlert} />
      ) : (
        ""
      )}
    </div>
  );
}

export default AlertScreen;
