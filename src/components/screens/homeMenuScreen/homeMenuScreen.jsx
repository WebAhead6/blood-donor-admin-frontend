import React, { Fragment, useEffect } from "react";
import { useRecoilState,useResetRecoilState } from "recoil";
import { newMenuItemAtom, getMenuItemAtom } from "../../../recoilsState";
//import components
import HomeMenuItemContainer from "../../general/homeMenuItemContainer";
import MenuEntryContent from "../../general/menuEntryContent";
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
  const resetnewMenuItemAtom = useResetRecoilState(newMenuItemAtom);


  React.useEffect(() => {
    getMenuItemsData()
      .then((data) => {
        setGetMenuItem(data);
        console.log(data);
      })
      .catch(() => {});
  }, []);

  const handleSaveClick = async (e) => {
    e.preventDefault();
    await addItem(newMenuItem.redirectionLink,newMenuItem.textArray); //FIXME: BEFOR IT WAS ONLY newMenuItem
    const newItems = await getMenuItemsData();
    setGetMenuItem(newItems);
    setIsAdd(true);
    resetnewMenuItemAtom();

  };


  const  handleCancelClick=() =>{
     setIsAdd(true)
     resetnewMenuItemAtom();

  }

  return (
    <div className="barStyle">
      <form onSubmit={handleSaveClick}>
        <AddEntryBar
          name={"Home Menu"}
          isAdd={isAdd}
          onAddClick={() => setIsAdd(false)}
          onCancelClick={handleCancelClick}
        />
        {!isAdd ? (
          <MenuEntryContent
            redirectionLink={newMenuItem.redirectionLink}
            textArray={newMenuItem.textArray}
            setData={setNewMenuItem}
            canEdit={true}
          />
        ) : (
          ""
        )}
      </form>
      {getMenuItem.map(({textArray, redirectionLink, id }) => (
        <HomeMenuItemContainer
          redirectionLink={redirectionLink}
          textArray={textArray}
          key={id}
          id={id}
        />
      ))}
    </div>
  );
}

export default HomeMenuScreen;
