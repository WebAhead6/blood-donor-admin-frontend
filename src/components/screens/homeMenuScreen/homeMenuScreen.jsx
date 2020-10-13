import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { newMenuItemAtom, getMenuItemAtom } from "../../../recoilsState";
//import components 
import AlertEntryContainer from "../../general/alertEntryContainer";
import AlertEntryContent from "../../general/alertEntryContent";

import AddEntryBar from "../../general/addEntryBar";
//
import "./homeMenuScreen.css";
//
import { addItem, getMenuItemsData } from "../../../utils/menuItems";


function HomeMenuScreen() {
  //const [newEntryData, setNewEntryData] = useRecoilState(newAlertTextAtom);
  const [newMenuItem, setNewMenuItem] = useRecoilState(newMenuItemAtom);
  // const [getAlert, setGetAlert] = useRecoilState(getNewAlertsAtom);
  const [getMenuItem, setGetMenuItem] = useRecoilState(getMenuItemAtom);
  const [isAdd, setIsAdd] = React.useState(true);

  React.useEffect(() => {
    getMenuItemsData()
    .then((data) => {
      setGetMenuItem(data);
    })
    .catch(() => {});
  }, []);

  const handleSaveClick = async () => {
    await addItem(newMenuItem.bloodType, newMenuItem.textArray);
    const newItems = await getMenuItemsData();
    setGetMenuItem(newItems);
    setIsAdd(true);
  };

  return (
    <div className="homeMenuScreen">
      <AddEntryBar 
        isAdd={isAdd}
        onAddClick={() => setIsAdd(false)}
        onCancelClick={() => setIsAdd(true)}
        onSaveClick={handleSaveClick}

      />
      {!isAdd ? (
       <AlertEntryContent
          

        />
      ) : (
        ""
      )}
      {getMenuItem.map(({ textArray, bloodType = [], id, addedDate }) => (
        <AlertEntryContainer
     
        />
      ))}
    </div>
  );
}

export default HomeMenuScreen;