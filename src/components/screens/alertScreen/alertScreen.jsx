import React from "react";
import { useRecoilState } from "recoil";
import { newAlertTextAtom } from "../../../recoilsState";
import AddEntryBar from "../../general/addEntryBar";
import AlertEntryContainer from "../../general/alertEntryContainer";

import "./alertScreen.css";

function AlertScreen() {
  const [newEntryData, setNewEntryData] = useRecoilState(newAlertTextAtom);
  const [isAdd, setIsAdd] = React.useState(true);
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
    </div>
  );
}

export default AlertScreen;
