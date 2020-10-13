import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { newMenuItemAtom, getMenuItemAtom } from "../../../recoilsState";
//import components
import HomeMenuItemContainer from "../../general/homeMenuItemContainer";
import MenuEntryContent from "../../general/menuEntryContent";

import AddMenuBar from "../../general/addMenuBar";
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
        console.log(data);
      })
      .catch(() => {});
  }, []);

  const handleSaveClick = async () => {
    await addItem(newMenuItem);
    const newItems = await getMenuItemsData();
    setGetMenuItem(newItems);
    setIsAdd(true);
  };

  return (
    <div className="homeMenuScreen">
      <AddMenuBar
        isAdd={isAdd}
        onAddClick={() => setIsAdd(false)}
        onCancelClick={() => setIsAdd(true)}
        onSaveClick={handleSaveClick}
      />
      {!isAdd ? (
        <MenuEntryContent
        redirectionLink={newMenuItem.redirectionLink}
          setData={setNewMenuItem}
          canEdit={true}
        />
      ) : (
        ""
      )}
      {getMenuItem.map(({ redirectionLink,id}) =>
           <HomeMenuItemContainer
           redirectionLink={redirectionLink}
           key={id}
           id={id}

           />
      )}
    </div>
  );
}

export default HomeMenuScreen;

// {
//   src:"",
//   redirectionLink:"",
//   textArray:
// [
//       {
//     language: "Hebrew",
//     title: "",
//   },
//   {
//     language: "Arabic",
//     title: "",
//   },
//   {
//     language: "English",
//     title: "",
//   },
// ]
// }
