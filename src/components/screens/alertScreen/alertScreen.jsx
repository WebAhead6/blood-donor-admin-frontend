import React, { Fragment, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
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
  const resetnewEntryData = useResetRecoilState(newAlertData);

  React.useEffect(() => {
    getAlertsData()
      .then((data) => {
        setGetAlert(data);
      })
      .catch(() => {});
  }, []);

  const handleSaveClick = async (e) => {
    e.preventDefault();
    await addAlert(
      newEntryData.bloodType,
      newEntryData.member,
      newEntryData.textArray
    );

    const newAlerts = await getAlertsData();
    setGetAlert(newAlerts);
    setIsAdd(true);
    resetnewEntryData();
  };

  const handleCancelClick = () => {
    setIsAdd(true);
    resetnewEntryData();
  };

  return (
    <div className="barStyle">
      <form onSubmit={handleSaveClick}>
        <AddEntryBar
          name={"Alerts"}
          isAdd={isAdd}
          onAddClick={() => setIsAdd(false)}
          onCancelClick={handleCancelClick}
        />
        {!isAdd ? (
          <AlertEntryContent
            textArray={newEntryData.textArray}
            setData={setNewEntryData}
            bloodType={newEntryData.bloodType}
            member={newEntryData.member}
            canEdit={true}
          />
        ) : (
          ""
        )}
      </form>
      {getAlert.map(({ textArray, bloodType = [], id, addedDate, member }) => (
        <AlertEntryContainer 
          key={id}
          id={id}
          member={member}
          bloodType={bloodType}
          textArray={textArray}
          addedDate={addedDate}
        />
      ))}
    </div>
  );
}

export default AlertScreen;
