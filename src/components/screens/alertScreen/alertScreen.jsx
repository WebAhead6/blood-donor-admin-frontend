import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { newAlertTextAtom, getNewAlertsAtom } from "../../../recoilsState";
import AddEntry from "../../general/addEntry";
import EditEntry from "../../general/editEntry";
import AlertEntryContainer from "../../general/alertEntryContainer";
import { addAlert, getAlertsData } from "../../../utils/alert";

import "./alertScreen.css";

function AlertScreen() {
  const [newEntryData, setNewEntryData] = useRecoilState(newAlertTextAtom);
  const [getAlert, setGetAlert] = useRecoilState(getNewAlertsAtom);
  const [isAdd, setIsAdd] = React.useState(true);
  const [isEdit, setIsEdit] = React.useState(true);

  React.useEffect(() => {
    return setGetAlert(getAlertsData);
  }, []);
  return (
    <div className="alertScreen">
      <AddEntry
        isAdd={isAdd}
        onAddClick={() => setIsAdd(false)}
        onCancelClick={() => setIsAdd(true)}
      />
      {!isAdd ? (
        <AlertEntryContainer data={getAlert} setData={setGetAlert} />
      ) : (
        ""
      )}
      <EditEntry
        isEdit={isEdit}
        onEditClick={() => setIsEdit(false)}
        onCancelClick={() => setIsEdit(true)}
      />
      {!isEdit ? (
        <AlertEntryContainer data={newEntryData} setData={setNewEntryData} />
      ) : (
        ""
      )}
    </div>
  );
}

export default AlertScreen;
