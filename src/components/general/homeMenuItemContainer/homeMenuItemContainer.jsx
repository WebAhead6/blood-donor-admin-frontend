import React, { Fragment } from "react";
import EditEntryBar from "../editEntryBar";
import MenuEntryContent from "../menuEntryContent";
import { useRecoilState } from "recoil";
import { getMenuItemAtom } from "../../../recoilsState";
import { getMenuItemsData, deleteItem ,editItem } from "../../../utils/menuItems";
import { deleteAlert, editAlert, getAlertsData } from "../../../utils/alert";

function HomeMenuItemContainer({ id, redirectionLink }) {
  const [isEdit, setIsEdit] = React.useState(true);

  const [canEdit, setCanEdit] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const [, setGetMenuItem] = useRecoilState(getMenuItemAtom);
  const [localState, setLocalState] = React.useState({redirectionLink});

  const handleSave = async () => {
    await editItem(id, localState);
    const data = await getMenuItemsData();
    setGetMenuItem(data);
    setIsOpen(false);
  };

  const handleDelete = async () => {
    await deleteItem(id);
    const data = await getMenuItemsData();
    setGetMenuItem(data);
  };
  const handleCancel = async () => {
    setLocalState({redirectionLink});
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
    <div>
      <EditEntryBar
        isEdit={isEdit}
        onEditClick={handleEdit}
        onCancelClick={handleCancel}
        onDeleteClick={handleDelete}
        onSaveClick={handleSave}
        onInputClick={handleBarClick}
      />
      {isOpen ? (
        <MenuEntryContent
          redirectionLink={localState.redirectionLink}
          setData={setLocalState}
          canEdit={canEdit}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default HomeMenuItemContainer;
