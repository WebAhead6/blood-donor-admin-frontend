import React, { Fragment } from "react";
import EditEntryBar from "../editEntryBar";
import SettingEntryContent from "../settingEntryContent";
import { useRecoilState } from "recoil";
import { getGeneralSettingAtom, newSettingAtom } from "../../../recoilsState";
import {
  deleteSetting,
  editSetting,
  getGeneralSettingData,
} from "../../../utils/generalSetting";

function GeneralSettingEntryContainer({ id, textArray, context, contextType }) {
  const [isEdit, setIsEdit] = React.useState(true);

  const [canEdit, setCanEdit] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const [, setGetGeneralSetting] = useRecoilState(getGeneralSettingAtom);
  const [localState, setLocalState] = React.useState({
    textArray,
    context,
    contextType,
  });

  const handleSave = async (e) => {
    e.preventDefault();
    await editSetting(id, localState);
    const data = await getGeneralSettingData();
    setGetGeneralSetting(data);

    setIsOpen(false);
    setIsEdit(true);
  };

  const handleDelete = async () => {
    await deleteSetting(id);
    const data = await getGeneralSettingData();
    setGetGeneralSetting(data);
  };
  const handleCancel = async () => {
    setLocalState({ textArray, context, contextType });
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
        <SettingEntryContent
          textArray={localState.textArray}
          context={localState.context}
          contextType={localState.contextType}
          setData={setLocalState}
          canEdit={canEdit}
        />
      ) : (
        ""
      )}
    </form>
  );
}

export default GeneralSettingEntryContainer;
