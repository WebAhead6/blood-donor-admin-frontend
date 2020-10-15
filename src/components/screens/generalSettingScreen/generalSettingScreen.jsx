import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import AddEntryBar from "../../general/addEntryBar";
import SettingEntryContent from "../../general/settingEntryContent";
import { newSettingAtom } from "../../../recoilsState/newSetting";
import { addGeneralSetting } from "../../../utils/generalSetting";

function GeneralSettingScreen() {
  const [isAdd, setIsAdd] = React.useState(true);
  const [newEntrySetting, setNewEntrySetting] = useRecoilState(newSettingAtom);
  const resetnewEntryData = useResetRecoilState(newSettingAtom);

  const handleSaveClick = async (e) => {
    e.preventDefault();
    await addGeneralSetting(
      newEntrySetting.context,
      newEntrySetting.contextType,
      newEntrySetting.textArray
    );
    setIsAdd(true);
    resetnewEntryData();
  };
  return (
    <div className="barStyle">
      <form onSubmit={handleSaveClick}>
        <AddEntryBar
          name={"Setting"}
          isAdd={isAdd}
          onAddClick={() => setIsAdd(false)}
          onCancelClick={() => setIsAdd(true)}
          onSaveClick={handleSaveClick}
        />

        {!isAdd ? (
          <SettingEntryContent
            textArray={newEntrySetting.textArray}
            context={newEntrySetting.context}
            contextType={newEntrySetting.contextType}
            canEdit={true}
            setData={setNewEntrySetting}
          />
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default GeneralSettingScreen;
