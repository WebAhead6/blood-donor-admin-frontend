import React, { Fragment, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { newMenuItemAtom, getMenuItemAtom } from "../../../recoilsState";
//import components
import HomeMenuItemContainer from "../../general/homeMenuItemContainer";
import MenuEntryContent from "../../general/menuEntryContent";
import AddEntryBar from "../../general/addEntryBar";
//
import "./homeMenuScreen.css";
//
import { addItem, getMenuItemsData, editItem } from "../../../utils/menuItems";
//
import { Draggable } from "react-beautiful-dnd";
import DragDropWrapper from "../../general/dragDropWrapper";



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
    await addItem(newMenuItem.redirectionLink, newMenuItem.textArray); //FIXME: BEFOR IT WAS ONLY newMenuItem
    const newItems = await getMenuItemsData();
    setGetMenuItem(newItems);
    setIsAdd(true);
    resetnewMenuItemAtom();
  };

  const handleCancelClick = () => {
    setIsAdd(true);
    resetnewMenuItemAtom();
  };

  const handleDragAndDrop = async (result) => {
    // the only one that is required{ destination, source, draggableId }
   // if (!result.destination) return
    const items = await Array.from(getMenuItem)
    console.log(items)
    const  [reorderdItems] = items.splice(result.source.index, 1)
    items.splice(result.destination.index,0,reorderdItems)
    setGetMenuItem(items)// FIXME: WE MAYBE NEED A LOCAL STATE TO HOLED THE CHANGAE
console.log(items);
    //await editItem(items.id ,items );

    

  };



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

      <DragDropWrapper onDragEnd={handleDragAndDrop} >
        {getMenuItem.map(({ indexOrder,textArray, redirectionLink, id }, index) => (
          <Draggable draggableId={id} index={index} key={id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <HomeMenuItemContainer
                  redirectionLink={redirectionLink}
                  textArray={textArray}
                  id={id}
                  indexOrder={indexOrder}
                />
              </div>
            )}
          </Draggable>
        ))}
      </DragDropWrapper>
    </div>
  );
}

export default HomeMenuScreen;
