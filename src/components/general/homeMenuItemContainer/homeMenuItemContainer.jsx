import React, { Fragment } from "react";
import EditEntryBar from "../editEntryBar";
import MenuEntryContent from "../menuEntryContent";
import { useRecoilState } from "recoil";
import { getMenuItemAtom } from "../../../recoilsState";
import { getMenuItemsData, deleteItem ,editItem } from "../../../utils/menuItems";

function HomeMenuItemContainer({ id, redirectionLink,textArray }) {
  const [isEdit, setIsEdit] = React.useState(true);

  const [canEdit, setCanEdit] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const [, setGetMenuItem] = useRecoilState(getMenuItemAtom);
  const [localState, setLocalState] = React.useState({redirectionLink,textArray});

  const handleSave = async (e) => {
    e.preventDefault();
    await editItem(id, localState);
  
    const data = await getMenuItemsData();
    setGetMenuItem(data);
    setIsOpen(false);
    setIsEdit(true);

  };

  const handleDelete = async () => {
    await deleteItem(id);
    const data = await getMenuItemsData();
    setGetMenuItem(data);
  };
  const handleCancel = async () => {
    setLocalState({redirectionLink , textArray});
    setIsEdit(true);
    setCanEdit(false);
  };
  const handleEdit = () => {
    setIsEdit(false);
    setIsOpen(true);
    setCanEdit(true);
  };
  const handleBarClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form onSubmit={handleSave}>
      <EditEntryBar
        isEdit={isEdit}
        onEditClick={handleEdit}
        onCancelClick={handleCancel}
        onDeleteClick={handleDelete}
        title={localState?.textArray?.[2]?.title}
        onInputClick={handleBarClick}

      />
      {isOpen ? (
        <MenuEntryContent
          redirectionLink={localState.redirectionLink}
          setData={setLocalState}
          canEdit={canEdit}
          textArray={localState.textArray}

        />
      ) : (
        ""
      )}
    </form>
  );
}

export default HomeMenuItemContainer;
