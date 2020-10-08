import React, { Fragment, useEffect } from "react";
import { useRecoilState } from "recoil";
import { newAlertData, getApiAlertsAtom } from "../../../recoilsState";
import AddEntryBar from "../../general/addEntryBar";

import AlertEntryContent from "../../general/alertEntryContent";
import AlertEntryContainer from "../../general/alertEntryContainer";
import { addAlert, getAlertsData } from "../../../utils/alert";

import "./alertScreen.css";

function AlertScreen() {
  const [newEntryData, setNewEntryData] = useRecoilState(newAlertData);
  const [getAlert, setGetAlert] = useRecoilState(getApiAlertsAtom);
  const [isAdd, setIsAdd] = React.useState(true);

  React.useEffect(() => {
    getAlertsData()
      .then((data) => {
        setGetAlert(data);
      })
      .catch(() => {});
  }, []);

  const handleSaveClick = async () => {
    await addAlert(newEntryData.bloodType, newEntryData.textArray);
    const newAlerts = await getAlertsData();
    setGetAlert(newAlerts);
    setIsAdd(true);
  };

  return (
    <div className="alertScreen">
      <AddEntryBar
        isAdd={isAdd}
        onAddClick={() => setIsAdd(false)}
        onCancelClick={() => setIsAdd(true)}
        onSaveClick={handleSaveClick}
      />
      {!isAdd ? (
        <AlertEntryContent
          textArray={newEntryData.textArray}
          setData={setNewEntryData}
          bloodType={newEntryData.bloodType}
        />
      ) : (
        ""
      )}
      {getAlert.map(({ textArray, bloodType = [], id, addedDate }) => (
        <AlertEntryContainer
          key={id}
          id={id}
          bloodType={bloodType}
          textArray={textArray}
          addedDate={addedDate}
        />
      ))}
    </div>
  );
}

export default AlertScreen;
